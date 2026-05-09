import { Link } from 'react-router-dom';

export default function OurStory() {
  return (
    <main className="pt-xl pb-xl">
      {/* Hero Section */}
      <section className="relative px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto text-center mt-xl md:mt-0">
        <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.2em] mb-md block">Our Heritage</span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-md">
          A Tale of <span className="italic text-tertiary">Passion & Flavor</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        
        <div className="w-full h-[300px] md:h-[600px] rounded-[2rem] overflow-hidden soft-shadow relative">
           <img 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200" 
          />
        </div>
      </section>

      {/* Chapter 1: The Beginning */}
      <section className="py-xl mt-md">
        <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-xl items-center">
            <div className="md:w-1/2">
              <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest mb-sm block">Chapter I</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">How It All Started</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-tertiary/10 rounded-full translate-x-4 translate-y-4 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea8?auto=format&fit=crop&q=80&w=800" 
                alt="Chef cooking"
                className="rounded-[2rem] soft-shadow relative z-10 w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Philosophy */}
      <section className="py-xl bg-surface-container-low my-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row-reverse gap-xl items-center">
            <div className="md:w-1/2">
              <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest mb-sm block">Chapter II</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Our Culinary Philosophy</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <ul className="space-y-sm mt-lg">
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-tertiary">spa</span>
                  <span className="font-body-md text-on-surface">Lorem ipsum dolor sit amet consectetur.</span>
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-tertiary">local_fire_department</span>
                  <span className="font-body-md text-on-surface">Excepteur sint occaecat cupidatat non proident.</span>
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-tertiary">favorite</span>
                  <span className="font-body-md text-on-surface">Sunt in culpa qui officia deserunt mollit.</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative">
               <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800" 
                alt="Plated food"
                className="rounded-[2rem] soft-shadow relative z-10 w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="py-xl mb-xl text-center max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <span className="material-symbols-outlined text-[48px] text-tertiary mb-md">auto_awesome</span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Looking Forward</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-xl leading-relaxed">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
        <Link to="/menu" className="bg-tertiary text-on-tertiary px-xl py-md rounded-full font-label-caps text-label-caps uppercase hover:opacity-90 transition-all soft-shadow btn-hover-squish inline-block">
          Explore Our Menu
        </Link>
      </section>
    </main>
  );
}
