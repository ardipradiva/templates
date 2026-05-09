export default function Reservations() {
  return (
    <main className="pt-xl pb-xl">
      <section className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop py-xl mt-xl md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-l bg-white rounded-[2rem] overflow-hidden soft-shadow">
          
          {/* Info Side */}
          <div className="bg-surface-container-low p-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-tertiary/5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-tertiary/5 rounded-full translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest mb-md block">Join Us</span>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-md">Reserve Your Experience</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mb-xl leading-relaxed">
                Step into a world of culinary wonder. We accommodate parties of up to 6 guests. For larger parties or private events, please contact us directly.
              </p>
              
              <div className="space-y-md">
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-tertiary">location_on</span>
                  <div>
                    <h4 className="font-body-sm font-bold text-on-surface">Address</h4>
                    <p className="font-body-sm text-on-surface-variant">123 Whimsical Way, Flavor Town, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-tertiary">schedule</span>
                  <div>
                    <h4 className="font-body-sm font-bold text-on-surface">Hours</h4>
                    <p className="font-body-sm text-on-surface-variant">Tuesday - Sunday: 5:00 PM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-tertiary">call</span>
                  <div>
                    <h4 className="font-body-sm font-bold text-on-surface">Contact</h4>
                    <p className="font-body-sm text-on-surface-variant">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-xl flex flex-col justify-center">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-lg">Book a Table</h2>
            <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label htmlFor="date" className="font-label-caps text-label-caps text-on-surface-variant uppercase">Date</label>
                  <input type="date" id="date" className="border border-surface-dim rounded-lg px-sm py-sm font-body-md text-on-surface focus:outline-none focus:border-tertiary transition-colors bg-white" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label htmlFor="time" className="font-label-caps text-label-caps text-on-surface-variant uppercase">Time</label>
                  <select id="time" className="border border-surface-dim rounded-lg px-sm py-sm font-body-md text-on-surface focus:outline-none focus:border-tertiary transition-colors bg-white">
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label htmlFor="guests" className="font-label-caps text-label-caps text-on-surface-variant uppercase">Guests</label>
                  <select id="guests" className="border border-surface-dim rounded-lg px-sm py-sm font-body-md text-on-surface focus:outline-none focus:border-tertiary transition-colors bg-white">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5 People</option>
                    <option>6 People</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xs">
                  <label htmlFor="name" className="font-label-caps text-label-caps text-on-surface-variant uppercase">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="border border-surface-dim rounded-lg px-sm py-sm font-body-md text-on-surface focus:outline-none focus:border-tertiary transition-colors bg-white" />
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <label htmlFor="email" className="font-label-caps text-label-caps text-on-surface-variant uppercase">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" className="border border-surface-dim rounded-lg px-sm py-sm font-body-md text-on-surface focus:outline-none focus:border-tertiary transition-colors bg-white" />
              </div>

              <div className="flex flex-col gap-xs mb-lg">
                <label htmlFor="notes" className="font-label-caps text-label-caps text-on-surface-variant uppercase">Special Requests (Optional)</label>
                <textarea id="notes" rows={3} placeholder="Allergies, celebrations, etc." className="border border-surface-dim rounded-lg px-sm py-sm font-body-md text-on-surface focus:outline-none focus:border-tertiary transition-colors resize-none bg-white"></textarea>
              </div>

              <button type="submit" className="w-full bg-tertiary text-on-tertiary py-md rounded-full font-label-caps text-label-caps uppercase hover:opacity-90 transition-all soft-shadow btn-hover-squish mt-md">
                Confirm Reservation
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
