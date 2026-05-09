import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToSection = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: `rgba(10, 10, 10, ${bgOpacity.get()})`,
          backdropFilter: `blur(${backdropBlur.get()}px)`,
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        {/* Need to use a wrapper to apply the dynamic styles */}
        <NavbarInner
          bgOpacity={bgOpacity}
          backdropBlur={backdropBlur}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          scrollToSection={scrollToSection}
        />
      </motion.nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-primary/98 backdrop-blur-xl flex items-center justify-center"
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => scrollToSection(link.href)}
                className="text-3xl font-display text-text-primary hover:text-accent-gold transition-colors duration-300 cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={() => scrollToSection('#reservation')}
              className="mt-4 bg-gradient-to-r from-accent-gold to-accent-gold-light text-primary font-semibold rounded-full text-sm tracking-[0.15em] uppercase cursor-pointer border-none"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="h-5"></div> {/* Tembok Atas */}
                <div className="flex items-center">
                  <div className="w-10"></div> {/* Tembok Kiri */}
                  <span>Reserve a Table</span>
                  <div className="w-10"></div> {/* Tembok Kanan */}
                </div>
                <div className="h-5"></div> {/* Tembok Bawah */}
              </div>
            </motion.button>
          </nav>
        </motion.div>
      )}
    </>
  );
}

function NavbarInner({ bgOpacity, backdropBlur, isOpen, setIsOpen, scrollToSection }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (v) => {
      setScrolled(v > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <div
      className="transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto h-20 md:h-24 px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-full">
            
            {/* 1. LOGO */}
            <div className="flex justify-start items-center">
              {/* Tembok Kiri */}
              <div className="w-6 md:w-10 lg:w-16 shrink-0"></div>
              <motion.a
                href="#"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-2xl tracking-[0.1em] gold-gradient-text no-underline"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                AURUM
              </motion.a>
            </div>

            {/* 2. NAV */}
            <div className="hidden lg:flex justify-center">
              <div className="flex items-center gap-10">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-xs tracking-[0.2em] uppercase text-text-muted hover:text-accent-gold transition-colors duration-300 cursor-pointer bg-transparent border-none font-body"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* 3. CTA */}
            <div className="flex justify-end items-center">
              <div className="flex items-center">
                {/* Desktop CTA */}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('#reservation')}
                  className="hidden lg:block border border-accent-gold/40 rounded-full text-xs tracking-[0.15em] uppercase text-accent-gold hover:bg-accent-gold/10 hover:border-accent-gold/70 transition-all duration-300 cursor-pointer bg-transparent font-body"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-3"></div> {/* Tembok Atas */}
                    <div className="flex items-center">
                      <div className="w-8"></div> {/* Tembok Kiri */}
                      <span>Reserve</span>
                      <div className="w-8"></div> {/* Tembok Kanan */}
                    </div>
                    <div className="h-3"></div> {/* Tembok Bawah */}
                  </div>
                </motion.button>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2 z-50 relative ml-4"
                  aria-label="Toggle menu"
                >
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="block w-6 h-[1.5px] bg-accent-gold origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block w-6 h-[1.5px] bg-accent-gold"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="block w-6 h-[1.5px] bg-accent-gold origin-center"
                  />
                </button>
              </div>
              {/* Tembok Kanan */}
              <div className="w-6 md:w-10 lg:w-16 shrink-0"></div>
            </div>

          </div>
        </div>
      </div>
  </div>
  );
}
