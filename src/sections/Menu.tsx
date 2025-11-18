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
                  onClick={() => scrollToCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeCategory === category.id
                      ? 'bg-terracotta text-cream font-semibold shadow-lg'
                      : 'text-charcoal hover:bg-charcoal/5'
                  }`}
                >
                  {category.name}
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
                  onClick={() => scrollToCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? 'bg-terracotta text-cream font-semibold'
                      : 'bg-charcoal/10 text-charcoal'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 space-y-16">
            {menuCategories.map((category) => (
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu

