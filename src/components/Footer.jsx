import { motion } from 'framer-motion';
import SectionReveal from './ui/SectionReveal';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservation' },
  ],
  hours: [
    { day: 'Monday — Thursday', time: '5:00 PM — 11:00 PM' },
    { day: 'Friday — Saturday', time: '5:00 PM — 12:00 AM' },
    { day: 'Sunday', time: '4:00 PM — 10:00 PM' },
  ],
};

export default function Footer() {
  const scrollTo = (href) => {
    if (href === '#hero') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface/60 border-t border-white/5">
      <div className="flex w-full">
        <div className="w-6 lg:w-12 shrink-0"></div> {/* Tembok Kiri */}
        <div className="flex-1 w-full mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <SectionReveal>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
               className="font-display text-3xl tracking-[0.1em] gold-gradient-text no-underline block mb-6">AURUM</a>
            <p className="text-text-muted text-sm font-body font-light leading-relaxed mb-8 max-w-xs">
              An exclusive fine dining experience where culinary artistry meets timeless elegance.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'TripAdvisor'].map((s) => (
                <motion.a key={s} href="#" whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-text-muted hover:text-accent-gold transition-colors duration-300"
                  aria-label={s}>
                  <span className="text-xs">{s[0]}</span>
                </motion.a>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h4 className="text-xs tracking-[0.25em] uppercase text-accent-gold font-body mb-6">Navigation</h4>
            <ul className="space-y-3 list-none p-0">
              {footerLinks.navigation.map((l) => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)}
                    className="text-text-muted text-sm font-body hover:text-accent-gold-light transition-colors duration-300 cursor-pointer bg-transparent border-none p-0">{l.label}</button>
                </li>
              ))}
            </ul>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <h4 className="text-xs tracking-[0.25em] uppercase text-accent-gold font-body mb-6">Opening Hours</h4>
            <ul className="space-y-4 list-none p-0">
              {footerLinks.hours.map((h) => (
                <li key={h.day}>
                  <p className="text-text-primary text-sm font-body mb-0.5">{h.day}</p>
                  <p className="text-text-dim text-xs font-body">{h.time}</p>
                </li>
              ))}
            </ul>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <h4 className="text-xs tracking-[0.25em] uppercase text-accent-gold font-body mb-6">Contact</h4>
            <div className="space-y-4 mb-8">
              <p className="text-text-muted text-sm font-body">128 Grand Avenue<br />Manhattan, New York 10013</p>
              <p className="text-text-muted text-sm font-body">+1 (555) 234-5678</p>
              <p className="text-text-muted text-sm font-body">hello@aurum.com</p>
            </div>
            <div className="rounded-xl overflow-hidden glass-card h-32 flex items-center justify-center">
              <span className="text-text-dim text-xs tracking-wider font-body">📍 View on Maps</span>
            </div>
          </SectionReveal>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-xs font-body">© 2024 Aurum. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-text-dim text-xs font-body hover:text-text-muted transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="text-text-dim text-xs font-body hover:text-text-muted transition-colors no-underline">Terms of Service</a>
          </div>
        </div>
        </div>
        <div className="w-6 lg:w-12 shrink-0"></div> {/* Tembok Kanan */}
      </div>
      <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-card border border-accent-gold/20 flex items-center justify-center text-accent-gold hover:bg-accent-gold/10 transition-colors cursor-pointer z-40"
        aria-label="Back to top">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </motion.button>
    </footer>
  );
}
