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
        <SectionReveal className="flex flex-col items-center text-center mb-8">
          <div className="gold-line-center mb-6" />
          <span className="text-xs tracking-[0.3em] uppercase text-accent-gold font-body">
            The Menu
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mt-6">
            Signature{' '}
            <em className="gold-gradient-text italic">Creations</em>
          </h2>
        </SectionReveal>

        {/* Description Text Container */}
        <SectionReveal delay={0.1} className="flex justify-center items-center h-20 mb-12">
          <p className="text-text-muted text-base max-w-lg text-center font-body font-light">
            Each dish is a celebration of flavor, crafted with precision and the finest seasonal ingredients.
          </p>
        </SectionReveal>

        {/* Category filters */}
        <SectionReveal delay={0.2} className="flex flex-wrap justify-center items-center min-h-[5rem] gap-3 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer font-body border ${
                active === cat
                  ? 'bg-accent-gold/15 border-accent-gold/40 text-accent-gold'
                  : 'bg-transparent border-white/8 text-text-muted hover:border-accent-gold/20 hover:text-text-primary'
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="h-2.5"></div> {/* Tembok Atas */}
                <div className="flex items-center">
                  <div className="w-6 shrink-0"></div> {/* Tembok Kiri */}
                  <span>{cat}</span>
                  <div className="w-6 shrink-0"></div> {/* Tembok Kanan */}
                </div>
                <div className="h-2.5"></div> {/* Tembok Bawah */}
              </div>
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
                    <div className="rounded-full bg-accent-gold/15 border border-accent-gold/30 text-accent-gold text-xs tracking-wider font-body overflow-hidden">
                      <div className="flex flex-col items-center justify-center">
                        <div className="h-1.5"></div> {/* Tembok Atas */}
                        <div className="flex items-center">
                          <div className="w-3 shrink-0"></div> {/* Tembok Kiri */}
                          <span>${item.price}</span>
                          <div className="w-3 shrink-0"></div> {/* Tembok Kanan */}
                        </div>
                        <div className="h-1.5"></div> {/* Tembok Bawah */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex py-6">
                  <div className="w-6 shrink-0"></div> {/* Tembok Kiri */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl mb-2 group-hover:text-accent-gold-light transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-text-dim text-sm font-body font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-6 shrink-0"></div> {/* Tembok Kanan */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
