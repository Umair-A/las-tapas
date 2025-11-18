import { motion } from 'framer-motion'
import { Flame, Star } from 'lucide-react'
import type { MenuItem } from '../lib/menuData'

interface MenuCategoryProps {
  items: MenuItem[]
  categoryName: string
}

const MenuCategory = ({ items, categoryName }: MenuCategoryProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-serif font-bold text-terracotta mb-6">
        {categoryName}
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-charcoal/10 pb-6 last:border-0"
          >
            <div className="flex items-start gap-4">
              {/* Menu Item Image */}
              {item.image && (
                <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-terracotta/10 to-gold/10">
                  <img
                    src={item.image}
                    alt={item.nameSpanish}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              
              <div className="flex-1 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="text-lg font-semibold text-charcoal">
                      {item.nameSpanish}
                    </h4>
                    {item.mostLoved && (
                      <span className="flex items-center gap-1 text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                        <Star size={12} fill="currentColor" />
                        Most Loved
                      </span>
                    )}
                    {item.spicy && (
                      <span className="flex items-center gap-1 text-xs text-red-600">
                        <Flame size={14} fill="currentColor" />
                        Spicy
                      </span>
                    )}
                  </div>
                  {item.nameEnglish && (
                    <p className="text-sm text-charcoal/60 italic mb-1">
                      {item.nameEnglish}
                    </p>
                  )}
                  {item.description && (
                    <p className="text-sm text-charcoal/80">{item.description}</p>
                  )}
                </div>
                <p className="text-lg font-semibold text-terracotta whitespace-nowrap">
                  {item.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MenuCategory

