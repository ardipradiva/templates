import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './ui/SectionReveal';

import gallery1 from '../assets/images/gallery-1.png';
import gallery2 from '../assets/images/gallery-2.png';
import gallery3 from '../assets/images/gallery-3.png';
import gallery4 from '../assets/images/gallery-4.png';
import gallery5 from '../assets/images/gallery-5.png';
import gallery6 from '../assets/images/gallery-6.png';

const images = [
  { src: gallery1, alt: 'Wagyu steak perfection', span: 'col-span-2 row-span-2' },
  { src: gallery2, alt: 'Chocolate noir dessert', span: 'col-span-1 row-span-1' },
  { src: gallery3, alt: 'Craft cocktail artistry', span: 'col-span-1 row-span-1' },
  { src: gallery4, alt: 'Private dining experience', span: 'col-span-1 row-span-1' },
  { src: gallery5, alt: 'Fresh seafood selection', span: 'col-span-1 row-span-2' },
  { src: gallery6, alt: 'Artisan sourdough bread', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <div className="gold-line-center mb-6" />
          <span className="text-xs tracking-[0.3em] uppercase text-accent-gold font-body">
            Visual Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mt-6 mb-6">
            A Feast for the{' '}
            <em className="gold-gradient-text italic">Eyes</em>
          </h2>
        </SectionReveal>

        {/* Bento grid */}
        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${img.span}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs tracking-wider text-text-primary/80 font-body">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass-card flex items-center justify-center text-accent-gold hover:bg-white/10 transition-colors cursor-pointer border-none"
              onClick={() => setLightbox(null)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 text-center"
            >
              <span className="text-sm text-text-muted font-body">{lightbox.alt}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
