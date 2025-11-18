import { motion } from 'framer-motion'
import { Quote, Award, Users, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-terracotta/10 to-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-terracotta mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto">
              Bringing the authentic flavors and warm hospitality of Spain to Dubai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Las Tapas restaurant interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-full opacity-20 blur-3xl" />
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
                A Journey of Passion
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Las Tapas is Dubai's premier destination for authentic Spanish cuisine. 
                Located in the heart of Business Bay, we bring the vibrant flavors and warm 
                hospitality of Spain to the UAE.
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
                glass of wine during happy hour, Las Tapas is where memories are made.
              </p>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-br from-terracotta/10 to-gold/10 border-l-4 border-gold p-12 rounded-3xl mb-24"
          >
            <Quote className="absolute top-8 right-8 text-gold/20" size={64} />
            <p className="text-3xl md:text-4xl font-serif italic text-charcoal relative z-10 mb-4">
              "Authentic Spanish flavors in the heart of Dubai"
            </p>
            <p className="text-lg text-charcoal/60 font-semibold">— Las Tapas</p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                description: 'Every dish is crafted with love and dedication to authentic Spanish cuisine',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We source the finest ingredients and maintain the highest standards',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building connections through shared meals and warm hospitality',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta/10 rounded-full mb-4">
                  <value.icon className="text-terracotta" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-terracotta mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Experience Our Story
          </h2>
          <p className="text-lg text-cream/80 mb-8">
            Join us for an authentic Spanish dining experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservations"
              className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-saffron transition-all shadow-xl hover:scale-105 inline-block"
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
        </div>
      </section>
    </div>
  )
}

export default About

