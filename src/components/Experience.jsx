import { motion } from 'framer-motion';
import SectionReveal from './ui/SectionReveal';

import ambianceImg from '../assets/images/experience-ambiance.png';
import platingImg from '../assets/images/experience-plating.png';
import barImg from '../assets/images/experience-bar.png';

const experiences = [
  {
    title: 'Intimate Ambiance',
    description:
      'Sink into an atmosphere designed for connection — warm candlelight, rich textures, and a curated soundscape that sets the stage for unforgettable evenings.',
    image: ambianceImg,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: 'Artisan Plating',
    description:
      'Every dish is a canvas. Our culinary team meticulously composes each plate with seasonal ingredients, edible flowers, and artistic precision.',
    image: platingImg,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Craft Cocktails',
    description:
      'Our award-winning mixologists create bespoke cocktails that complement every course — from classic reinventions to daring new signatures.',
    image: barImg,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding overflow-hidden">
      <div className="w-full mx-auto">
        {/* Header */}
        <SectionReveal className="flex flex-col items-center text-center mb-8">
          <div className="gold-line-center mb-6" />
          <span className="text-xs tracking-[0.3em] uppercase text-accent-gold font-body">
            The Experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mt-6">
            More Than a{' '}
            <em className="gold-gradient-text italic">Meal</em>
          </h2>
        </SectionReveal>

        {/* Description Text Container */}
        <SectionReveal delay={0.1} className="flex justify-center h-15 mb-12">
          <p className="text-text-muted text-base max-w-lg text-center font-body font-light">
            Aurum is a multisensory journey — designed to captivate, inspire, and linger in your memory.
          </p>
        </SectionReveal>

        {/* Experience cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, i) => (
            <SectionReveal key={exp.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative rounded-2xl overflow-hidden h-[500px] cursor-pointer"
              >
                {/* Background image */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-accent-gold mb-5"
                    whileHover={{ rotate: 5 }}
                  >
                    {exp.icon}
                  </motion.div>

                  <div className="ml-6">
                    <h3 className="font-display text-2xl mb-3 group-hover:text-accent-gold-light transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-text-muted text-sm font-body font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Reveal line on hover */}
                  <motion.div
                    className="mt-5 overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: '40px' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                  >
                    <div className="h-[1px] bg-accent-gold/50" />
                  </motion.div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
