import { motion } from 'framer-motion'
import { MapPin, Clock, Car } from 'lucide-react'

const Location = () => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const hours = [
    { day: 'Monday', hours: '4:00 PM - 11:00 PM' },
    { day: 'Tuesday', hours: '4:00 PM - 11:00 PM' },
    { day: 'Wednesday', hours: '4:00 PM - 11:00 PM' },
    { day: 'Thursday', hours: '4:00 PM - 11:00 PM' },
    { day: 'Friday', hours: '4:00 PM - 11:00 PM' },
    { day: 'Saturday', hours: '4:00 PM - 11:00 PM' },
    { day: 'Sunday', hours: '4:00 PM - 11:00 PM' },
  ]

  return (
    <section id="location" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1234567890123!2d55.2689!3d25.1885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69c123456789%3A0xabcdef1234567890!2sInternational%20Business%20Tower%2C%20Amal%20St%2C%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Las Tapas Location - Business Bay, Dubai"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center">
                <MapPin className="text-terracotta" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Address</h3>
                <p className="text-charcoal/80">
                  G.05, International Business Tower<br />
                  Amal Street, Business Bay<br />
                  Dubai, UAE<br />
                  <span className="text-sm italic">(behind the IBT)</span>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center">
                <Clock className="text-terracotta" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Hours</h3>
                <div className="space-y-2">
                  {hours.map((schedule) => (
                    <div
                      key={schedule.day}
                      className={`flex justify-between items-center py-2 ${
                        schedule.day === today
                          ? 'bg-gold/20 rounded-lg px-3 font-semibold'
                          : ''
                      }`}
                    >
                      <span className="text-charcoal">{schedule.day}</span>
                      <span className="text-charcoal/80">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center">
                <Car className="text-terracotta" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contact</h3>
                <p className="text-charcoal/80 space-y-1">
                  <a href="tel:+97144452811" className="block hover:text-terracotta transition-colors">
                    Landline: +971 4 445 2811
                  </a>
                  <a href="tel:+971586182224" className="block hover:text-terracotta transition-colors">
                    WhatsApp: +971 58 618 2224
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location

