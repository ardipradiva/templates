import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedCursor from './components/AnimatedCursor';

// Lazy load below-fold sections for faster initial load
const BrandStory = lazy(() => import('./components/BrandStory'));
const SignatureMenu = lazy(() => import('./components/SignatureMenu'));
const Experience = lazy(() => import('./components/Experience'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ReservationCTA = lazy(() => import('./components/ReservationCTA'));
const Footer = lazy(() => import('./components/Footer'));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 border-2 border-accent-gold/30 border-t-accent-gold rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="noise-overlay">
      <AnimatedCursor />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <BrandStory />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SignatureMenu />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ReservationCTA />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
