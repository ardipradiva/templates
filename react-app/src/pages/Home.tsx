import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="pt-xl">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">
        <div className="lg:col-span-6 z-10">
          <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.2em] mb-md block">High-End Culinary Art</span>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-md leading-[1.1]">
            Where Gastronomy <br /> <span className="italic text-tertiary">Meets Playfulness.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            Indulge in a sensory journey crafted with whimsical precision. Fine dining reimagined for the joyful soul.
          </p>
          <div className="flex flex-wrap gap-md">
            <Link to="/menu" className="bg-tertiary text-on-tertiary px-xl py-md rounded-full font-label-caps text-label-caps uppercase hover:opacity-90 transition-all soft-shadow btn-hover-squish inline-block">
              View The Menu
            </Link>
            <Link to="/reservations" className="border border-tertiary text-tertiary px-xl py-md rounded-full font-label-caps text-label-caps uppercase hover:bg-tertiary/5 transition-all btn-hover-squish inline-block">
              Book Today
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Organic Shaped Image Container */}
            <div className="absolute inset-0 bg-secondary-container rounded-[40%_60%_70%_30%/40%_50%_60%_40%] rotate-6"></div>
            <img alt="Exquisite Gourmet Dish" className="relative z-10 w-full h-full object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%] soft-shadow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp2cqHeJ_7E_KYkKbS3XU8sOyy3QCF8QwCEPKJqrJvSObCd_7604GYgHutffBDXxX1sonVUpk89MH6YeIt1jOz0HsRZA_P6jhapWT--KAE-VvWztRAF_sjxpW0k2I6WuVME_cRvB48xLImf413OOq8xJl3FdIn6mXOpnyRGXSgvWfdaGxxXyAhL7M24CBePgEVgRbyugqgA25G0AxoGtTbsWeOa2tKXY8u6pp8ShfxC_7t6aSWfYiTEhLgd1Xs7xZt2ZoLd26d3w" />
            {/* Whimsical Illustration Decor */}
            <div className="absolute -top-10 -right-10 hidden md:block">
              <span className="material-symbols-outlined text-[64px] text-tertiary/20 rotate-12">restaurant</span>
            </div>
            <div className="absolute -bottom-10 -left-10 hidden md:block">
              <span className="material-symbols-outlined text-[80px] text-tertiary/20 -rotate-12">local_florist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Teaser */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="order-2 md:order-1">
            <img alt="Interior Atmosphere" className="rounded-xl soft-shadow w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJqOkC_9Qh1aAzYbDLNSp0e14V7NHO4qstnK4Xb7gdvfbvEQurWfes0dGnLRIzyxnNg0xiluVfhFGKmwvbmhzOZn7dqX9YdMqW75t-wJbSq9qy9yqxwm0RULCXqaleVtzJeswEhbUFNKLocWJWwszyy21GLltVyUW_T3C8beCpRXNNgnXRMiGO2sZN6vlQOcGMbFMhAhJSD8N244MZb22APDAYeqzXLODjd1BnuiGeWcXgEfopsu_yvp-sMCbDZ0TuzbksgSlFg" />
          </div>
          <div className="order-1 md:order-2">
            <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest mb-md block">Behind the Curtain</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Our Story: A Recipe for Joy</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">
              Born from a dream of blending Michelin-starred technique with the unbridled imagination of childhood, L'Artiste Kitchen is more than a restaurant—it's a canvas. We believe that fine dining shouldn't be stiff; it should sing.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg leading-relaxed italic">
              "We treat every plate as a poem and every guest as an old friend returning home."
            </p>
            <Link className="inline-flex items-center gap-xs text-tertiary font-bold font-body-md group" to="/our-story">
              Discover Our Philosophy
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Chef's Specials (Bento Grid Style) */}
      <section className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-xl">
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-sm">Chef's Specials</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mx-auto">Seasonal ingredients curated with a touch of magic.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md lg:grid-rows-2 lg:h-[700px]">
          {/* Large Highlight Item */}
          <div className="md:col-span-2 lg:row-span-2 bg-white rounded-xl overflow-hidden soft-shadow relative group">
            <img alt="Signature Salad" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwwzZ2noITp_K5GbwYeBIm1Fgd1fYXRAUqyZnuvtKtBtThp4kL2BHWcRZIsLVRASdC26G84onNQPeRFQ1x3ICDWCTAA0uqE7bd2L9iH7qTGp-QJ8Na0GRBCdBR6r3QmSQJFiMg1wUY-wsBOVlRcbJt7ic9Qt06jVCBRbquabTFityvZsP1P6KJXSr4_vmShE0-fmzj18L_8afspIIiB73-_GZKh0bEnkMNPw_7spc7V0eBN5xtXDydrRGG16SFdW4-_M2OvACFgw" />
            <div className="absolute bottom-0 left-0 right-0 p-lg bg-gradient-to-t from-black/60 to-transparent text-white">
              <span className="bg-tertiary-fixed text-on-tertiary-fixed px-sm py-xs rounded-full font-label-caps text-label-caps uppercase mb-sm inline-block">Seasonal Pick</span>
              <h3 className="font-headline-md text-headline-md">The Enchanted Garden Salad</h3>
              <p className="font-body-sm text-body-sm opacity-90">Micro-greens, crystallized honey, and elderflower vinaigrette.</p>
            </div>
          </div>
          {/* Small Item 1 */}
          <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between soft-shadow relative overflow-hidden group">
            <div>
              <div className="flex justify-between items-start mb-sm">
                <h3 className="font-headline-md text-headline-md text-on-surface">Cloud Risotto</h3>
                <span className="font-body-md text-body-md text-tertiary">$32</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Truffle foam, wild mushrooms, and 24-month aged parmesan.</p>
            </div>
            <div className="mt-md relative h-32">
              <img alt="Risotto" className="w-full h-full object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqs7jnKchLn4YVWBCp0ip3KbGSGvDgB1Fagtv-JTD-UrgbcXkR0T3HnB_q-EzN1Kz96ulbBlLHXOsXbgmI-t8yJswlOS23psca7EF3r99Ob-gmlw1OdlcK65mFPEzy4S8n0c80COhoyt1MUuEpSRm4pCSxWQNbOQTuT8GtUKqGd6134DdXsd4HI5qM0N1BxP6sBCUpQ1Q9zPGwYFwpfcnW-Ty4p5AXAmLHqOPR_jHXAHJA6kPnEBrJG4bFDZhyPYpWds5KuTO8hw" />
            </div>
          </div>
          {/* Small Item 2 */}
          <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between soft-shadow relative overflow-hidden group">
            <div>
              <div className="flex justify-between items-start mb-sm">
                <h3 className="font-headline-md text-headline-md text-on-surface">The Sun-Drenched Tart</h3>
                <span className="font-body-md text-body-md text-tertiary">$18</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Lemon curd, basil crystals, and shortbread crumb.</p>
            </div>
            <div className="mt-md flex justify-end">
              <span className="material-symbols-outlined text-[80px] text-tertiary/10 group-hover:rotate-45 transition-transform duration-500">cake</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xl mb-xl">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center bg-tertiary rounded-[3rem] p-xl md:p-[80px] relative overflow-hidden soft-shadow">
            {/* Whimsical background shapes */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-xl"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="material-symbols-outlined text-[48px] text-white/90 mb-md">auto_awesome</span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white mb-md leading-tight">
                Experience the Magic
              </h2>
              <div className="h-[2px] w-16 bg-white/50 mx-auto mb-lg"></div>
              <p className="font-body-lg text-body-lg text-white/90 mb-xl mx-auto leading-relaxed">
                Tables fill up quickly for our nightly performances. Reserve your journey today and discover the art of hospitality.
              </p>
              <Link to="/reservations" className="bg-white text-tertiary px-xl py-lg rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container transition-all soft-shadow btn-hover-squish inline-block">
                Book Your Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
