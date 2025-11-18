import emailjs from '@emailjs/browser'
import type { ReservationFormData } from './schemas'

// Initialize EmailJS (you'll need to set these in your .env)
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''

export const sendReservationEmail = async (data: ReservationFormData): Promise<boolean> => {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    console.warn('EmailJS not configured. Please set environment variables.')
    return false
  }

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        date: data.date,
        time: data.time,
        party_size: data.partySize,
        special_requests: data.specialRequests || 'None',
      },
      PUBLIC_KEY
    )
    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

