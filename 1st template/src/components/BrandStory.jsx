import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SectionReveal from './ui/SectionReveal';
import ParallaxImage from './ui/ParallaxImage';
import brandImg from '../assets/images/brand-story.png';

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 12, suffix: '+', label: 'Years of Excellence' },
  { value: 8, suffix: '', label: 'Industry Awards' },
  { value: 150, suffix: '+', label: 'Signature Dishes' },
];

export default function BrandStory() {
  return (
    <section id="story" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <SectionReveal>
            <div className="relative">
              <ParallaxImage
                src={brandImg}
                alt="Our chef preparing a signature dish"
                className="rounded-2xl aspect-[4/5] relative z-10"
              />
              {/* Decorative gold frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-accent-gold/20 rounded-2xl z-0" />
              {/* Floating gold accent */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-accent-gold/20 to-transparent blur-2xl z-0"
              />
            </div>
          </SectionReveal>

          {/* Text side */}
          <div>
            <SectionReveal>
              <div className="gold-line mb-6" />
              <span className="text-xs tracking-[0.3em] uppercase text-accent-gold font-body">
                Our Story
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mt-6 mb-8">
                A Legacy of{' '}
                <em className="gold-gradient-text italic">Culinary</em>{' '}
                Mastery
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-text-muted text-base leading-relaxed mb-6 font-body font-light">
                Born from a passion for transforming the finest ingredients into 
                unforgettable experiences, Aurum has been redefining fine dining since 2012. 
                Our philosophy is simple: every plate should be a masterpiece, every moment 
                should be extraordinary.
              </p>
              <p className="text-text-muted text-base leading-relaxed mb-12 font-body font-light">
                Under the guidance of Executive Chef Alessandra Moretti, our kitchen 
                blends classical techniques with bold, modern innovation — creating a 
                culinary narrative that speaks to both heritage and the avant-garde.
              </p>
            </SectionReveal>

            {/* Stats */}
            <SectionReveal delay={0.3}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-3xl sm:text-4xl gold-gradient-text mb-2">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-text-dim text-xs tracking-[0.1em] uppercase font-body">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
