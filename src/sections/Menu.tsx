import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { menuCategories, happyHour } from '../lib/menuData'
import MenuCategory from '../components/MenuCategory'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryId = entry.target.getAttribute('data-category-id')
            if (categoryId) {
              setActiveCategory(categoryId)
            }
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    Object.values(categoryRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToCategory = (categoryId: string) => {
    const element = categoryRefs.current[categoryId]
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveCategory(categoryId)
    }
  }

  return (
    <section id="menu" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block lg:w-64 shrink-0">
            <div className="sticky top-32 space-y-2 shrink-0">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => !category.comingSoon && scrollToCategory(category.id)}
                  disabled={category.comingSoon}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    category.comingSoon
                      ? 'text-charcoal/40 cursor-not-allowed'
                      : activeCategory === category.id
                      ? 'bg-terracotta text-cream font-semibold shadow-lg'
                      : 'text-charcoal hover:bg-charcoal/5'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {category.name}
                    {category.comingSoon && (
                      <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                        Soon
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Tabs */}
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-2 min-w-max">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => !category.comingSoon && scrollToCategory(category.id)}
                  disabled={category.comingSoon}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    category.comingSoon
                      ? 'bg-charcoal/5 text-charcoal/40 cursor-not-allowed'
                      : activeCategory === category.id
                      ? 'bg-terracotta text-cream font-semibold'
                      : 'bg-charcoal/10 text-charcoal'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {category.name}
                    {category.comingSoon && (
                      <span className="text-xs bg-gold/20 text-gold px-1.5 py-0.5 rounded-full">
                        Soon
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 space-y-16">
            {menuCategories
              .filter((cat) => !cat.comingSoon)
              .map((category) => (
                <div
                  key={category.id}
                  ref={(el) => {
                    categoryRefs.current[category.id] = el
                  }}
                  data-category-id={category.id}
                  className="scroll-mt-32"
                >
                  <MenuCategory items={category.items} categoryName={category.name} />
                </div>
              ))}

            {/* Happy Hour */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gold/10 border-2 border-gold rounded-2xl p-8"
            >
              <h3 className="text-3xl font-serif font-bold text-terracotta mb-4">
                Happy Hour
              </h3>
              <p className="text-lg text-charcoal/80 mb-6">{happyHour.hours}</p>
              <ul className="space-y-2">
                {happyHour.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-charcoal">
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Shisha Coming Soon */}
            {menuCategories
              .filter((cat) => cat.comingSoon)
              .map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal rounded-2xl p-12 text-cream"
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 grain-overlay" />
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full mb-6">
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
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
                      {category.name}
                    </h3>
                    <p className="text-2xl md:text-3xl font-semibold text-cream/90 mb-2">
                      Coming Soon
                    </p>
                    <p className="text-lg text-cream/80 max-w-md mx-auto">
                      We're preparing something special. Stay tuned for our premium shisha selection!
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu

