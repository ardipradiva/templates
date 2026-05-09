import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './ui/SectionReveal';

import menuStarterImg from '../assets/images/menu-starter.png';
import menuMainImg from '../assets/images/menu-main.png';
import menuDessertImg from '../assets/images/menu-dessert.png';
import menuDrinkImg from '../assets/images/menu-drink.png';

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

const menuItems = [
  {
    id: 1,
    name: 'Tuna Tartare',
    description: 'Yellowfin tuna, avocado mousse, yuzu gel, shiso crumble, gold leaf',
    price: '28',
    category: 'Starters',
    image: menuStarterImg,
  },
  {
    id: 2,
    name: 'Burrata Caprese',
    description: 'Heirloom tomato, fresh burrata, aged balsamic, micro basil, truffle oil',
    price: '24',
    category: 'Starters',
    image: menuStarterImg,
  },
  {
    id: 3,
    name: 'Herb-Crusted Lamb Rack',
    description: 'New Zealand lamb, rosemary jus, roasted root vegetables, pomme purée',
    price: '58',
    category: 'Mains',
    image: menuMainImg,
  },
  {
    id: 4,
    name: 'Pan-Seared Sea Bass',
    description: 'Mediterranean sea bass, saffron risotto, beurre blanc, seasonal greens',
    price: '52',
    category: 'Mains',
    image: menuMainImg,
  },
  {
    id: 5,
    name: 'Wagyu Beef Tenderloin',
    description: 'A5 Japanese wagyu, black truffle, bone marrow butter, charred leek',
    price: '88',
    category: 'Mains',
    image: menuMainImg,
  },
  {
    id: 6,
    name: 'Vanilla Crème Brûlée',
    description: 'Tahitian vanilla bean, caramelized sugar crust, seasonal berries',
    price: '18',
    category: 'Desserts',
    image: menuDessertImg,
  },
  {
    id: 7,
    name: 'Chocolate Noir Sphere',
    description: 'Valrhona dark chocolate, gold leaf, salted caramel core, espresso foam',
    price: '22',
    category: 'Desserts',
    image: menuDessertImg,
  },
  {
    id: 8,
    name: 'Espresso Martini',
    description: 'Cold brew espresso, premium vodka, Kahlúa, vanilla bean, coffee foam',
    price: '19',
    category: 'Drinks',
    image: menuDrinkImg,
  },
  {
    id: 9,
    name: 'Golden Hour',
    description: 'Saffron-infused gin, elderflower, champagne, citrus zest, edible gold',
    price: '24',
    category: 'Drinks',
    image: menuDrinkImg,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

export default function SignatureMenu() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="section-padding bg-surface/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <div className="gold-line-center mb-6" />
          <span className="text-xs tracking-[0.3em] uppercase text-accent-gold font-body">
            The Menu
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mt-6 mb-6">
            Signature{' '}
            <em className="gold-gradient-text italic">Creations</em>
          </h2>
          <p className="text-text-muted text-base max-w-lg mx-auto font-body font-light">
            Each dish is a celebration of flavor, crafted with precision and the finest seasonal ingredients.
          </p>
        </SectionReveal>

        {/* Category filters */}
        <SectionReveal delay={0.1} className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer font-body border ${
                active === cat
                  ? 'bg-accent-gold/15 border-accent-gold/40 text-accent-gold'
                  : 'bg-transparent border-white/8 text-text-muted hover:border-accent-gold/20 hover:text-text-primary'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </SectionReveal>

        {/* Menu grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="glass-card glass-card-hover rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/30 text-accent-gold text-xs tracking-wider font-body">
                      ${item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl mb-2 group-hover:text-accent-gold-light transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-text-dim text-sm font-body font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
