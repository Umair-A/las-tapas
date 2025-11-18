import { MapPin, Clock, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const QuickInfo = () => {
  return (
    <section id="quick-info" className="bg-charcoal text-cream py-4 sticky top-20 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>Daily: 4PM-11PM | Happy Hour: 4PM-7PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Business Bay, Dubai</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <a href="tel:+97144452811" className="hover:text-gold transition-colors">
              +971 4 445 2811
            </a>
          </div>
          <motion.a
            href="tel:+97144452811"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-saffron transition-colors text-xs sm:text-sm"
          >
            Call to Reserve
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default QuickInfo

