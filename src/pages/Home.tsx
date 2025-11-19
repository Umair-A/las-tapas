import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../sections/Hero'
import QuickInfo from '../sections/QuickInfo'

const Home = () => {
  return (
    <div>
      <Hero />
      <QuickInfo />
      
      {/* Shisha Coming Soon Announcement */}
      <section className="py-16 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-3xl p-8 md:p-12 border border-gold/30"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 grain-overlay" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full shrink-0">
                  <svg
                    className="w-12 h-12 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold">
                      Shisha
                    </h3>
                    <span className="bg-gold/30 text-gold px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-cream/90 text-sm md:text-base">
                    We're preparing something special. Stay tuned for our premium shisha selection!
                  </p>
                </div>
              </div>
              <Link
                to="/menu"
                className="bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-saffron transition-all shadow-lg hover:scale-105 shrink-0"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Sections Preview */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta mb-4">
              Experience Spanish Excellence
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              Discover authentic flavors, warm hospitality, and unforgettable moments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <Link
                to="/menu"
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-terracotta/30 via-terracotta/20 to-gold/20 relative flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Beautiful Spanish tapas and paella"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-terracotta mb-2">
                    Our Menu
                  </h3>
                  <p className="text-charcoal/80 mb-4">
                    Explore our authentic Spanish tapas, from traditional favorites to modern interpretations
                  </p>
                  <span className="inline-flex items-center gap-2 text-terracotta font-semibold group-hover:gap-3 transition-all">
                    View Menu
                    <ArrowRight size={20} />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Gallery Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link
                to="/gallery"
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-terracotta/30 via-terracotta/20 to-gold/20 relative flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Spanish tapas dishes"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-terracotta mb-2">
                    Gallery
                  </h3>
                  <p className="text-charcoal/80 mb-4">
                    See the artistry behind every dish and the warm atmosphere that awaits you
                  </p>
                  <span className="inline-flex items-center gap-2 text-terracotta font-semibold group-hover:gap-3 transition-all">
                    View Gallery
                    <ArrowRight size={20} />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* About Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <Link
                to="/about"
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-terracotta/30 via-terracotta/20 to-gold/20 relative flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Restaurant interior"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-terracotta mb-2">
                    Our Story
                  </h3>
                  <p className="text-charcoal/80 mb-4">
                    Learn about our journey bringing authentic Spanish cuisine to Dubai
                  </p>
                  <span className="inline-flex items-center gap-2 text-terracotta font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={20} />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-terracotta to-terracotta/80 text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-xl mb-8 text-cream/90">
              Reserve your table today and join us for authentic Spanish tapas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservations"
                className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-charcoal transition-all shadow-xl hover:scale-105 inline-block"
              >
                Make a Reservation
              </Link>
              <Link
                to="/menu"
                className="bg-white/10 backdrop-blur-sm text-cream border-2 border-cream/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

