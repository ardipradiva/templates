import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-md w-full max-w-7xl mx-auto">
        <Link to="/" className="font-headline-md text-headline-md text-tertiary">L'Artiste Kitchen</Link>
        <div className="hidden md:flex items-center gap-lg">
          <Link className="text-on-surface-variant hover:text-tertiary transition-colors duration-300 font-body-md text-body-md" to="/our-story">Our Story</Link>
          <Link className="text-on-surface-variant hover:text-tertiary transition-colors duration-300 font-body-md text-body-md" to="/menu">Menu</Link>
          <Link className="text-on-surface-variant hover:text-tertiary transition-colors duration-300 font-body-md text-body-md" to="/reservations">Reservations</Link>
          <Link className="text-on-surface-variant hover:text-tertiary transition-colors duration-300 font-body-md text-body-md" to="/location">Location</Link>
        </div>
        <Link to="/reservations" className="bg-tertiary text-on-tertiary px-lg py-sm rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-all btn-hover-squish">
          Book a Table
        </Link>
      </nav>
    </header>
  );
}
