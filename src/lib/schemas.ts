import { z } from 'zod'

export const reservationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  partySize: z.string().min(1, 'Please select party size'),
  specialRequests: z.string().optional(),
})

export type ReservationFormData = z.infer<typeof reservationSchema>

