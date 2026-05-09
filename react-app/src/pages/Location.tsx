import { Link } from 'react-router-dom';

export default function Location() {
  return (
    <main className="pt-xl pb-xl">
      <section className="relative px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto text-center mt-xl md:mt-0">
        <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.2em] mb-md block">Find Us</span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-md">
          Our <span className="italic text-tertiary">Location</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">
          Nestled in the heart of Flavor Town, our whimsical kitchen awaits your arrival.
        </p>
        
        {/* Map Placeholder Image */}
        <div className="w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden soft-shadow relative">
           <img 
            alt="Map showing L'Artiste Kitchen location" 
            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-16 h-16 bg-tertiary text-on-tertiary rounded-full flex items-center justify-center soft-shadow animate-bounce">
              <span className="material-symbols-outlined text-[32px]">location_on</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl">
        <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-xl">
          
          {/* Location Details */}
          <div className="bg-surface-container-low p-xl rounded-[2rem] soft-shadow">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">L'Artiste Kitchen</h2>
            
            <div className="space-y-lg">
              <div className="flex items-start gap-md">
                <span className="material-symbols-outlined text-[32px] text-tertiary mt-xs">map</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Address</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    123 Whimsical Way<br />
                    Flavor Town, CA 90210<br />
                    United States
                  </p>
                  <a href="#" className="inline-block mt-sm font-label-caps text-label-caps text-tertiary uppercase hover:underline">Get Directions</a>
                </div>
              </div>

              <div className="flex items-start gap-md">
                <span className="material-symbols-outlined text-[32px] text-tertiary mt-xs">schedule</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Hours of Operation</h3>
                  <ul className="font-body-md text-body-md text-on-surface-variant space-y-xs">
                    <li><span className="inline-block w-[100px]">Mon:</span> <span>Closed</span></li>
                    <li><span className="inline-block w-[100px]">Tue - Thu:</span> <span>5:00 PM - 10:00 PM</span></li>
                    <li><span className="inline-block w-[100px]">Fri - Sat:</span> <span>5:00 PM - 11:00 PM</span></li>
                    <li><span className="inline-block w-[100px]">Sun:</span> <span>4:00 PM - 9:00 PM</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-md">
                <span className="material-symbols-outlined text-[32px] text-tertiary mt-xs">contact_support</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Contact Us</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Phone: (555) 123-4567<br />
                    Email: hello@artistekitchen.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exterior Image & Parking */}
          <div className="flex flex-col gap-xl">
            <div className="w-full h-64 md:h-80 rounded-[2rem] overflow-hidden soft-shadow relative">
              <img 
                alt="Restaurant Exterior" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800" 
              />
            </div>
            
            <div className="bg-tertiary/10 border border-tertiary/20 p-xl rounded-[2rem] soft-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm relative z-10 flex items-center gap-sm">
                <span className="material-symbols-outlined text-tertiary">local_parking</span>
                Parking Information
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant relative z-10 leading-relaxed">
                Complimentary valet parking is available starting at 4:30 PM. Alternatively, ample street parking can be found along Whimsical Way and adjacent avenues.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-xl mb-xl text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">We Can't Wait to Host You</h2>
        <Link to="/reservations" className="bg-tertiary text-on-tertiary px-xl py-md rounded-full font-label-caps text-label-caps uppercase hover:opacity-90 transition-all soft-shadow btn-hover-squish inline-block">
          Book Your Table
        </Link>
      </section>
    </main>
  );
}
