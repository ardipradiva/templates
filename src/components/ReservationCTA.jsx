import { motion } from 'framer-motion';
import SectionReveal from './ui/SectionReveal';
import MagneticButton from './ui/MagneticButton';

export default function ReservationCTA() {
  return (
    <section id="reservation" className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gold circles */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full border border-accent-gold/10"
        />
        <motion.div
          animate={{ y: [15, -25, 15], x: [8, -12, 8] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-[10%] w-48 h-48 rounded-full border border-accent-gold/8"
        />
        <motion.div
          animate={{ y: [10, -15, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-[5%] w-32 h-32 rounded-full bg-accent-gold/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [-12, 18, -12] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-[15%] w-40 h-40 rounded-full bg-accent-warm/5 blur-3xl"
        />

        {/* Subtle grain */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
          }}
        />
      </div>
      <div className="relative z-10 w-full flex justify-center px-6">    
        <div className="max-w-3xl w-full text-center">
          {/* Header */}
          <SectionReveal className="flex flex-col items-center text-center mb-8">
            <div className="gold-line-center mb-6" />
            <span className="text-xs tracking-[0.3em] uppercase text-accent-gold font-body">
              Join Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.05] mt-6">
              Your Table{' '}
              <em className="gold-gradient-text italic">Awaits</em>
            </h2>
          </SectionReveal>

          {/* Description Text Container */}
          <SectionReveal delay={0.1} className="flex justify-center mb-12">
            <p className="text-text-muted text-base sm:text-lg max-w-xl text-center font-body font-light leading-relaxed">
              Experience the artistry of Aurum. Reserve your evening and let us 
              create an unforgettable culinary moment, crafted just for you.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-2 sm:px-0">
              <MagneticButton variant="primary" className="w-full sm:w-auto">
                Reserve Now
              </MagneticButton>
              <MagneticButton variant="secondary" className="w-full sm:w-auto">
                Contact Us
              </MagneticButton>
            </div>
          </SectionReveal>

          {/* Contact details */}
          <SectionReveal delay={0.4}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/5">
              <div>
                <p className="text-text-dim text-xs tracking-[0.2em] uppercase font-body mb-2">Phone</p>
                <p className="font-display text-lg text-text-primary">+1 (555) 234-5678</p>
              </div>
              <div>
                <p className="text-text-dim text-xs tracking-[0.2em] uppercase font-body mb-2">Email</p>
                <p className="font-display text-lg text-text-primary">hello@aurum.com</p>
              </div>
              <div>
                <p className="text-text-dim text-xs tracking-[0.2em] uppercase font-body mb-2">Location</p>
                <p className="font-display text-lg text-text-primary">Manhattan, NY</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
