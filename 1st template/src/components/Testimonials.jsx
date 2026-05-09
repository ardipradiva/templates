import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './ui/SectionReveal';

const testimonials = [
  {
    id: 1,
    name: 'Victoria Hartwell',
    role: 'Food & Travel Journalist',
    text: '"Aurum redefines what fine dining can be. Every course was a revelation — from the delicate tuna tartare to the showstopping chocolate sphere. The atmosphere is pure magic."',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Michelin Guide Reviewer',
    text: '"A masterclass in culinary excellence. Chef Moretti\'s ability to blend tradition with innovation is unparalleled. The herb-crusted lamb was, without question, the best I\'ve had this year."',
    rating: 5,
  },
  {
    id: 3,
    name: 'Isabella Rossi',
    role: 'Lifestyle Influencer',
    text: '"From the moment you walk in, you\'re transported. The golden lighting, the impeccable service, the cocktails that are works of art. Aurum isn\'t just dinner — it\'s an event."',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Müller',
    role: 'Executive Chef, Berlin',
    text: '"As a fellow chef, I rarely feel moved by another kitchen. Aurum moved me. The precision, the creativity, the respect for ingredients — it\'s everything fine dining should be."',
    rating: 5,
  },
];

const Star = () => (
  <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <div className="gold-line-center mb-6" />
          <span className="text-xs tracking-[0.3em] uppercase text-accent-gold font-body">
            Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mt-6 mb-6">
            Words from Our{' '}
            <em className="gold-gradient-text italic">Guests</em>
          </h2>
        </SectionReveal>

        {/* Carousel */}
        <SectionReveal delay={0.1}>
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Quote icon */}
            <div className="text-center mb-8">
              <span className="font-display text-7xl text-accent-gold/20 select-none">"</span>
            </div>

            {/* Testimonial content */}
            <div className="relative min-h-[280px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[current].id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-center px-4"
                >
                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-8">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-display text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed text-text-primary/90 mb-10 max-w-3xl mx-auto">
                    {testimonials[current].text}
                  </p>

                  {/* Author */}
                  <div>
                    <div className="gold-line-center mb-5" />
                    <p className="font-display text-lg text-accent-gold-light">
                      {testimonials[current].name}
                    </p>
                    <p className="text-text-dim text-xs tracking-[0.2em] uppercase font-body mt-1">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-accent-gold hover:bg-white/8 transition-colors cursor-pointer border border-white/5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </motion.button>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer border-none ${
                      i === current
                        ? 'w-8 bg-accent-gold'
                        : 'w-1.5 bg-white/15 hover:bg-white/25'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-accent-gold hover:bg-white/8 transition-colors cursor-pointer border border-white/5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </motion.button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
