import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full mt-auto">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="flex flex-col items-center md:items-start">
          <div className="font-headline-md text-headline-md text-on-surface mb-xs">L'Artiste Kitchen</div>
          <p className="font-body-sm text-body-sm text-on-surface-variant opacity-90">© 2024 L'Artiste Kitchen. Crafted with Whimsy.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-lg">
          <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors uppercase" to="#">Privacy Policy</Link>
          <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors uppercase" to="#">Terms of Service</Link>
          <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors uppercase" to="#">Sustainability</Link>
          <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors uppercase" to="#">Careers</Link>
        </div>
        <div className="flex gap-md">
          <Link className="w-10 h-10 rounded-full bg-on-surface/5 flex items-center justify-center text-on-surface-variant hover:bg-tertiary hover:text-on-tertiary transition-all" to="#">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </Link>
          <Link className="w-10 h-10 rounded-full bg-on-surface/5 flex items-center justify-center text-on-surface-variant hover:bg-tertiary hover:text-on-tertiary transition-all" to="#">
            <span className="material-symbols-outlined text-[20px]">star</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
