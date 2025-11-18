import { motion } from 'framer-motion'
import ReservationForm from '../components/ReservationForm'
import { Calendar } from 'lucide-react'

const Reservations = () => {
  return (
    <section id="reservations" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <ReservationForm />
        </motion.div>
      </div>
    </section>
  )
}

export default Reservations

