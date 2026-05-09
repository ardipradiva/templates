import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FloatingParticles from './FloatingParticles';
import MagneticButton from './ui/MagneticButton';
import heroImg from '../assets/images/hero.png';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.85]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={heroImg}
          alt="Aurum restaurant interior"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary"
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ boxShadow: 'inset 0 0 200px 60px rgba(0,0,0,0.6)' }} />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto will-change-transform"
      >
        {/* Overline */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-12 h-[1px] bg-accent-gold/50" />
          <span className="text-xs tracking-[0.35em] uppercase text-accent-gold font-body">
            Fine Dining & Cocktail Bar
          </span>
          <span className="w-12 h-[1px] bg-accent-gold/50" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-6"
        >
          <span className="block">Where Every</span>
          <span className="block mt-2">
            Flavor Tells a{' '}
            <em className="gold-gradient-text italic font-medium">Story</em>
          </span>
        </motion.h1>

        {/* Subtitle Container */}
        <motion.div
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-12"
        >
          <p className="text-text-muted text-base sm:text-lg max-w-xl text-center font-body font-light leading-relaxed">
            An exclusive culinary journey crafted from the finest seasonal ingredients, 
            presented in an atmosphere of timeless elegance.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <MagneticButton
            variant="primary"
            onClick={() => scrollToSection('#reservation')}
          >
            Reserve a Table
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            onClick={() => scrollToSection('#menu')}
          >
            Explore Menu
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-text-dim text-[10px] tracking-[0.3em] uppercase font-body">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8 bg-gradient-to-b from-accent-gold/50 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
