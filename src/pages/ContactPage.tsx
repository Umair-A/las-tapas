import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Car } from 'lucide-react'
import { Link } from 'react-router-dom'
import Location from '../sections/Location'

const ContactPage = () => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const hours = [
    { day: 'Monday', hours: '4:00 PM - 10:00 PM' },
    { day: 'Tuesday', hours: '4:00 PM - 10:00 PM' },
    { day: 'Wednesday', hours: '4:00 PM - 10:00 PM' },
    { day: 'Thursday', hours: '4:00 PM - 10:00 PM' },
    { day: 'Friday', hours: '4:00 PM - 11:00 PM' },
    { day: 'Saturday', hours: '4:00 PM - 11:00 PM' },
    { day: 'Sunday', hours: '4:00 PM - 9:00 PM' },
  ]

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-terracotta/10 to-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-terracotta mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch or visit us in Business Bay
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta/10 rounded-full mb-4">
                <MapPin className="text-terracotta" size={32} />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Address</h3>
              <p className="text-sm text-charcoal/80">
                G.05, International Business Tower<br />
                Amal Street, Business Bay<br />
                Dubai, UAE
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta/10 rounded-full mb-4">
                <Phone className="text-terracotta" size={32} />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Phone</h3>
              <div className="text-sm">
                <a
                  href="tel:+97144452811"
                  className="block text-terracotta hover:text-gold transition-colors"
                >
                  +971 4 445 2811
                </a>
                <a
                  href="tel:+971586182224"
                  className="block text-terracotta hover:text-gold transition-colors"
                >
                  +971 58 618 2224
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta/10 rounded-full mb-4">
                <Mail className="text-terracotta" size={32} />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Email</h3>
              <a
                href="mailto:info@lastapascafe.com"
                className="text-sm text-terracotta hover:text-gold transition-colors"
              >
                info@lastapascafe.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta/10 rounded-full mb-4">
                <Car className="text-terracotta" size={32} />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Social Media</h3>
              <div className="text-sm space-y-1">
                <a
                  href="https://www.instagram.com/las_tapas_cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-terracotta hover:text-gold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@las_tapas_cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-terracotta hover:text-gold transition-colors"
                >
                  TikTok
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Location />

      {/* CTA */}
      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Visit?
          </h2>
          <p className="text-lg text-cream/80 mb-8">
            Make a reservation or give us a call
          </p>
          <Link
            to="/reservations"
            className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-saffron transition-all shadow-xl hover:scale-105 inline-block"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

