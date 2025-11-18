import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Las Tapas restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-full opacity-20 blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta">
              Our Story
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Las Tapas is Dubai's premier destination for authentic
              Spanish cuisine. Located in the heart of Business Bay, we bring the vibrant
              flavors and warm hospitality of Spain to the UAE.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Our chefs craft each dish with traditional techniques passed down through
              generations, using the finest ingredients to create an unforgettable dining
              experience. From our sizzling gambas al ajillo to our perfectly executed
              paella, every bite tells a story of Spanish culinary heritage.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              We believe that great food brings people together. Whether you're sharing
              tapas with friends, celebrating a special occasion, or simply enjoying a
              glass of Rioja, Las Tapas is where memories are made.
            </p>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-terracotta/10 border-l-4 border-gold p-6 rounded-lg mt-8"
            >
              <Quote className="absolute top-4 right-4 text-gold/20" size={48} />
              <p className="text-xl font-serif italic text-charcoal relative z-10">
                "The best tapas this side of Barcelona"
              </p>
              <p className="text-sm text-charcoal/60 mt-2">— Las Tapas</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

