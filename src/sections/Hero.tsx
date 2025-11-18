import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const Hero = () => {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1555939594-58d7cb561b1d?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute inset-0 grain-overlay" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-cream mb-4 text-balance">
            Las Tapas
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-cream/90 mb-12 font-light"
          >
            Authentic Spanish Tapas in Dubai
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/menu"
              className="bg-terracotta text-cream px-8 py-4 rounded-full font-semibold hover:bg-terracotta/90 transition-all shadow-xl hover:scale-105 text-lg"
            >
              View Menu
            </Link>
            <Link
              to="/reservations"
              className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-saffron transition-all shadow-xl hover:scale-105 text-lg"
            >
              Reserve Table
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.a
          href="#quick-info"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-cream/80 hover:text-cream transition-colors cursor-pointer block"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero

