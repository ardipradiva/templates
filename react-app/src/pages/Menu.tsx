import { useState } from 'react';
import { Link } from 'react-router-dom';

// Prototype data
const MENU_ITEMS = [
  { 
    id: 1, 
    name: "The Enchanted Garden Salad", 
    description: "Micro-greens, crystallized honey, and elderflower vinaigrette.", 
    price: 24, 
    category: "Starters", 
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwwzZ2noITp_K5GbwYeBIm1Fgd1fYXRAUqyZnuvtKtBtThp4kL2BHWcRZIsLVRASdC26G84onNQPeRFQ1x3ICDWCTAA0uqE7bd2L9iH7qTGp-QJ8Na0GRBCdBR6r3QmSQJFiMg1wUY-wsBOVlRcbJt7ic9Qt06jVCBRbquabTFityvZsP1P6KJXSr4_vmShE0-fmzj18L_8afspIIiB73-_GZKh0bEnkMNPw_7spc7V0eBN5xtXDydrRGG16SFdW4-_M2OvACFgw" 
  },
  { 
    id: 2, 
    name: "Cloud Risotto", 
    description: "Truffle foam, wild mushrooms, and 24-month aged parmesan.", 
    price: 32, 
    category: "Starters", 
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqs7jnKchLn4YVWBCp0ip3KbGSGvDgB1Fagtv-JTD-UrgbcXkR0T3HnB_q-EzN1Kz96ulbBlLHXOsXbgmI-t8yJswlOS23psca7EF3r99Ob-gmlw1OdlcK65mFPEzy4S8n0c80COhoyt1MUuEpSRm4pCSxWQNbOQTuT8GtUKqGd6134DdXsd4HI5qM0N1BxP6sBCUpQ1Q9zPGwYFwpfcnW-Ty4p5AXAmLHqOPR_jHXAHJA6kPnEBrJG4bFDZhyPYpWds5KuTO8hw" 
  },
  { 
    id: 3, 
    name: "Wagyu Canvas", 
    description: "A5 Wagyu beef, charcoal reduction, beetroot paint, and smoked salt.", 
    price: 95, 
    category: "Mains", 
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    name: "Forest Floor Duck", 
    description: "Dry-aged duck breast, pine needle ash, and blackberry jus.", 
    price: 54, 
    category: "Mains", 
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 5, 
    name: "Golden Harvest", 
    description: "Saffron-infused cauliflower steak, almond cream, and pomegranate jewels.", 
    price: 42, 
    category: "Mains", 
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 6, 
    name: "The Sun-Drenched Tart", 
    description: "Lemon curd, basil crystals, and shortbread crumb.", 
    price: 18, 
    category: "Desserts", 
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 7, 
    name: "Midnight Galaxy", 
    description: "Dark chocolate dome, starfruit glaze, and popping candy.", 
    price: 22, 
    category: "Desserts", 
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 8, 
    name: "Whimsical Elixir", 
    description: "Butterfly pea tea, lemongrass, and edible gold flakes.", 
    price: 16, 
    category: "Drinks", 
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800" 
  }
];

const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"];

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-xl pb-xl min-h-screen bg-surface">
      {/* Header */}
      <section className="relative px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto text-center mt-xl md:mt-0">
        <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.2em] mb-md block">Our Offerings</span>
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-md">
          A Symphony of <span className="italic text-tertiary">Flavors</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore our seasonal tasting menus and signature dishes. Discover the culinary magic crafted for your senses.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Controls: Search and Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-lg mb-xl bg-surface-container-low p-md rounded-2xl soft-shadow">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-sm w-full md:w-auto">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-lg py-sm rounded-full font-label-caps text-label-caps uppercase transition-all duration-300 border ${
                  activeCategory === category 
                    ? "bg-tertiary border-tertiary text-on-tertiary soft-shadow" 
                    : "bg-transparent border-surface-dim text-on-surface-variant hover:border-tertiary hover:text-tertiary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              type="text" 
              placeholder="Search our menu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-surface-dim rounded-full py-sm pl-xl pr-md font-body-md text-on-surface focus:outline-none focus:border-tertiary transition-colors soft-shadow"
            />
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-[1.5rem] overflow-hidden soft-shadow flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-sm right-sm bg-surface/90 backdrop-blur-sm px-sm py-xs rounded-full z-10">
                    <span className="font-label-caps text-[10px] uppercase text-tertiary tracking-wider">{item.category}</span>
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-md flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-sm gap-sm">
                    <h3 className="font-headline-md text-[20px] text-on-surface leading-tight">{item.name}</h3>
                    <span className="font-body-md text-body-md text-tertiary font-bold">${item.price}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md flex-grow">
                    {item.description}
                  </p>
                  <button className="w-full mt-auto py-sm border border-tertiary text-tertiary rounded-full font-label-caps text-label-caps uppercase hover:bg-tertiary hover:text-on-tertiary transition-colors">
                    Add to order
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-xl bg-surface-container-low rounded-2xl">
            <span className="material-symbols-outlined text-[64px] text-on-surface-variant/50 mb-md">search_off</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">No dishes found</h3>
            <p className="font-body-md text-on-surface-variant">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
              className="mt-md text-tertiary font-bold underline hover:no-underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-xl mt-xl">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center bg-tertiary rounded-[2rem] py-xl relative overflow-hidden soft-shadow">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>
          <h2 className="font-headline-lg text-headline-lg text-on-tertiary mb-md relative z-10">Prefer to dine in?</h2>
          <p className="font-body-md text-body-md text-white/90 mb-lg mx-auto relative z-10">
            Experience the magic firsthand at our physical location.
          </p>
          <Link to="/reservations" className="bg-white text-tertiary px-xl py-md rounded-full font-label-caps text-label-caps uppercase hover:bg-surface-container transition-all soft-shadow btn-hover-squish inline-block relative z-10">
            Book A Table
          </Link>
        </div>
      </section>
    </main>
  );
}
