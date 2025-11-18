import { Link } from 'react-router-dom'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.avif'

const Footer = () => {
  const footerLinks = [
    { path: '/about', label: 'Our Story' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/reservations', label: 'Reservations' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <img
              src={logo}
              alt="Las Tapas Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-cream/80 text-sm mb-4">
              Powered by passion, served with love.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/las_tapas_cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@las_tapas_cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-gold transition-colors text-sm font-semibold"
                aria-label="TikTok"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                <span className="text-cream/80">
                  G.05, International Business Tower<br />
                  Amal Street, Business Bay<br />
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-gold shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+97144452811"
                    className="text-cream/80 hover:text-gold transition-colors text-sm"
                  >
                    +971 4 445 2811
                  </a>
                  <a
                    href="tel:+971586182224"
                    className="text-cream/80 hover:text-gold transition-colors text-sm"
                  >
                    +971 58 618 2224
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href="mailto:info@lastapascafe.com"
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  info@lastapascafe.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold mb-4">Reservations</h4>
            <p className="text-cream/80 text-sm mb-4">
              Give us a call to book your table.
            </p>
            <motion.a
              href="tel:+97144452811"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-saffron transition-colors text-sm"
            >
              Call Us
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
            <p>
              © {new Date().getFullYear()} Las Tapas. All rights reserved.
            </p>
            <p>
              Authentic Spanish Tapas in Dubai
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

