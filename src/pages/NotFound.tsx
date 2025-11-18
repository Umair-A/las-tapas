import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-9xl font-serif font-bold text-terracotta mb-4">404</h1>
        <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-charcoal/80 mb-8">
          The page you're looking for doesn't exist. Let's get you back to the good food.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-terracotta text-cream px-8 py-4 rounded-full font-semibold hover:bg-terracotta/90 transition-colors"
        >
          <Home size={20} />
          Return Home
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound

