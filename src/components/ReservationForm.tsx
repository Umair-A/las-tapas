import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { reservationSchema, type ReservationFormData } from '../lib/schemas'
import { sendReservationEmail } from '../lib/emailjs'
import { useState } from 'react'
import { Calendar, Clock, Users, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  })

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const success = await sendReservationEmail(data)

    if (success) {
      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } else {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }

    setIsSubmitting(false)
  }

  const partySizes = ['1', '2', '3', '4', '5', '6', '7', '8+']
  const timeSlots = [
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:ring-2 focus:ring-terracotta focus:border-transparent bg-white"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/40" size={20} />
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-charcoal/20 focus:ring-2 focus:ring-terracotta focus:border-transparent bg-white"
              placeholder="your@email.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
            Phone *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/40" size={20} />
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-charcoal/20 focus:ring-2 focus:ring-terracotta focus:border-transparent bg-white"
              placeholder="(206) 555-1234"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-2">
            Date *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/40" size={20} />
            <input
              {...register('date')}
              type="date"
              id="date"
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-charcoal/20 focus:ring-2 focus:ring-terracotta focus:border-transparent bg-white"
            />
          </div>
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-charcoal mb-2">
            Time *
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/40" size={20} />
            <select
              {...register('time')}
              id="time"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-charcoal/20 focus:ring-2 focus:ring-terracotta focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          {errors.time && (
            <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="partySize" className="block text-sm font-medium text-charcoal mb-2">
            Party Size *
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/40" size={20} />
            <select
              {...register('partySize')}
              id="partySize"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-charcoal/20 focus:ring-2 focus:ring-terracotta focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select party size</option>
              {partySizes.map((size) => (
                <option key={size} value={size}>
                  {size} {size === '1' ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </div>
          {errors.partySize && (
            <p className="mt-1 text-sm text-red-600">{errors.partySize.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium text-charcoal mb-2">
          Special Requests
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-charcoal/40" size={20} />
          <textarea
            {...register('specialRequests')}
            id="specialRequests"
            rows={4}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-charcoal/20 focus:ring-2 focus:ring-terracotta focus:border-transparent bg-white resize-none"
            placeholder="Dietary restrictions, celebrations, seating preferences..."
          />
        </div>
      </div>

      {submitStatus === 'success' && (
        <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <CheckCircle size={20} />
          <p>Reservation request sent! We'll confirm shortly.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <AlertCircle size={20} />
          <p>Something went wrong. Please call us at +971 4 445 2811 to make a reservation.</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-terracotta text-cream px-8 py-4 rounded-full font-semibold hover:bg-terracotta/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {isSubmitting ? 'Sending...' : 'Request Reservation'}
        </button>
        <a
          href="tel:+97144452811"
          className="flex-1 bg-gold text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-saffron transition-colors text-center shadow-lg"
        >
          Call to Book
        </a>
      </div>
    </form>
  )
}

export default ReservationForm

