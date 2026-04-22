import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const featureImg = '/images/1%20(15).jpeg'

const catalog = [
  {
    category: 'Culinary Excellence',
    filterKey: 'Culinary',
    icon: 'restaurant',
    title: 'Private Chef & Custom Catering',
    desc: 'A dedicated culinary artisan at your disposal. Includes bespoke menus, dietary tailoring, and all meal service from sunrise bush breakfasts to 5-course dinners.',
    price: '$150',
    unit: 'Daily Supplement',
    img: '/images/1%20(6).jpeg',
    aspect: 'aspect-[4/3]',
    bg: 'bg-surface-container-low',
    radius: 'rounded-3xl',
  },
  {
    category: 'Exploration',
    filterKey: 'Exploration',
    icon: 'hiking',
    title: 'Bespoke Walking Safaris',
    desc: 'Venture where vehicles cannot. Track the silent movements of the wild on foot with our expert naturalists. Focus on botany, tracking, and micro-ecosystems.',
    price: '$120',
    unit: 'Per Person',
    img: '/images/1%20(11).jpeg',
    aspect: 'aspect-square',
    bg: 'bg-surface-container-high',
    radius: 'rounded-2xl',
  },
  {
    category: 'Nocturnal Exploration',
    filterKey: 'Exploration',
    icon: 'visibility',
    title: 'Predator Tracking & Night Drives',
    desc: 'Witness the savannah come alive after dark. Using infrared technology and expert tracking, observe the elusive nocturnal predators of the conservancy.',
    price: '$180',
    unit: 'Per Vehicle',
    img: '/images/1%20(14).jpeg',
    aspect: 'aspect-square',
    bg: 'bg-primary',
    dark: true,
    radius: 'rounded-3xl',
  },
  {
    category: 'Community',
    filterKey: 'Community',
    icon: 'groups',
    title: 'Maasai Cultural Immersion',
    desc: 'Meaningful engagement with the local community. Learn traditional crafts, oral histories, and pastoral traditions. 50% of fees go directly to the village fund.',
    price: '$60',
    unit: 'Donation Basis',
    img: '/images/1%20(10).jpeg',
    aspect: 'aspect-[3/4]',
    bg: 'bg-surface-container-high',
    radius: 'rounded-2xl',
  },
  {
    category: 'Wellness',
    filterKey: 'Wellness',
    icon: 'sunny',
    title: 'Sunset Peak Meditation',
    desc: 'A guided silence atop the Loitana ridge. Witness the 360-degree horizon as the sun sets, accompanied by light refreshments and the sounds of the cooling bush.',
    price: '$45',
    unit: 'Per Guest',
    img: featureImg,
    aspect: 'aspect-[4/3]',
    bg: 'bg-surface-container-low',
    radius: 'rounded-3xl',
  },
  {
    category: 'Culinary',
    filterKey: 'Culinary',
    icon: 'water_drop',
    title: 'Dawn River Breakfast',
    desc: 'A fully catered breakfast setup on the sandy banks of the Loitana river. Fresh juices, campfire coffee, and hot dishes prepared on site as the sun rises.',
    price: '$85',
    unit: 'Per Guest',
    img: '/images/1%20(12).jpeg',
    aspect: 'aspect-[16/9]',
    bg: 'bg-surface-container-low',
    radius: 'rounded-2xl',
  },
]

const filters = ['All', 'Culinary', 'Exploration', 'Community', 'Wellness']

export default function TailorYourStay() {
  useReveal()
  const [activeFilter, setActiveFilter] = useState('All')
  const visible = catalog.filter(
    (item) => activeFilter === 'All' || item.filterKey === activeFilter,
  )

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <header className="relative w-full pt-20 pb-16 px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative z-10">
          <div className="md:col-span-8">
            <span className="inline-flex items-center gap-2 font-label uppercase tracking-widest text-primary font-bold text-sm mb-6">
              <span className="w-6 h-px bg-primary" />
              Personalized Luxury
            </span>
            <h1 className="reveal font-headline text-6xl md:text-8xl tracking-tight leading-[0.9] mb-8">
              Adventures <br />
              <span className="italic text-on-surface-variant">on Your Terms</span>
            </h1>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-on-surface-variant text-lg leading-relaxed pl-6 border-l-2 border-tertiary/60">
              We believe in the luxury of choice. Our base rates provide the canvas of your stay—affordable, serene,
              and deeply comfortable. From there, you paint your own journey with our curated bespoke upgrades.
            </p>
          </div>
        </div>
      </header>

      {/* Feature Image — organic bottom edge */}
      <section className="w-full mb-32">
        <div className="overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem]">
          <img
            src={featureImg}
            alt="Scenic view of a rocky riverbed winding through the Loitana hills"
            className="w-full h-[50vh] md:h-[614px] object-cover grayscale-[0.15]"
          />
        </div>
      </section>

      {/* The Bespoke Catalog */}
      <section className="max-w-7xl mx-auto px-8 pb-32 relative">
        {/* Background blobs */}
        <div className="absolute top-0 -right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 -left-10 w-56 h-56 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mb-20">
          <div className="absolute -top-10 -left-6 text-[8rem] font-headline text-primary/5 select-none leading-none z-0">
            Menu
          </div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-xl">
              <h2 className="reveal font-headline text-5xl tracking-tight mb-2">The Bespoke Catalog</h2>
              <p className="text-on-surface-variant font-headline italic text-xl">
                Curated experiences to deepen your connection with the wild.
              </p>
            </div>
            {/* Pill-style filter buttons */}
            <div className="flex flex-wrap gap-2 pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 font-label ${
                    activeFilter === filter
                      ? 'bg-primary text-on-primary shadow-md scale-105'
                      : 'border border-outline-variant/60 hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {visible.map((item) => (
            <div
              key={item.title}
              className={`gallery-item group relative ${item.bg} ${item.radius ?? 'rounded-2xl'} overflow-hidden ${
                item.dark ? '' : 'border border-outline-variant/20'
              } transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 mb-6 break-inside-avoid`}
            >
              <div className={`${item.aspect} overflow-hidden`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full h-full object-cover ${
                    item.dark ? 'opacity-60 group-hover:opacity-100' : 'grayscale-[0.2] group-hover:grayscale-0'
                  } group-hover:scale-105 transition-all duration-700`}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                      item.dark
                        ? 'bg-white/10 text-on-primary/70'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {item.category}
                  </span>
                  <span
                    className={`material-symbols-outlined text-xl ${
                      item.dark ? 'text-on-primary/30' : 'text-outline-variant/60'
                    }`}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3
                  className={`font-headline text-3xl mb-4 group-hover:italic transition-all ${
                    item.dark ? 'text-on-primary' : ''
                  }`}
                >
                  {item.title}
                </h3>
                <div className="card-expand-content">
                  <p
                    className={`text-sm mb-6 leading-relaxed ${
                      item.dark ? 'text-on-primary/80' : 'text-on-surface-variant'
                    }`}
                  >
                    {item.desc}
                  </p>
                  <div
                    className={`flex justify-between items-center pt-4 border-t ${
                      item.dark ? 'border-on-primary/20' : 'border-outline-variant/30'
                    }`}
                  >
                    <span className={`font-bold ${item.dark ? 'text-on-primary' : 'text-primary'}`}>
                      {item.price}{' '}
                      <span
                        className={`text-[10px] uppercase ${item.dark ? 'text-on-primary/60' : 'text-outline'}`}
                      >
                        {item.unit}
                      </span>
                    </span>
                    <button
                      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 transition-all font-label ${
                        item.dark
                          ? 'text-on-primary border border-on-primary/30 hover:bg-white/10'
                          : 'text-primary border border-primary/30 hover:bg-primary/5'
                      }`}
                    >
                      Add to Stay{' '}
                      <span className="material-symbols-outlined text-sm">add_circle</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bespoke Philosophy */}
      <section className="bg-surface-container-low py-32 overflow-hidden relative">
        <div className="absolute top-20 right-20 w-48 h-48 bg-tertiary/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative">
            <div className="absolute -top-12 -left-12 text-[12rem] font-headline text-primary/5 select-none leading-none">
              Stay
            </div>
            <h2 className="reveal font-headline text-5xl mb-8 relative z-10">
              Bespoke means <br />
              <span className="italic">without compromise.</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              The Loitana Wild experience is built on a "Base + Tailor" model. We believe you shouldn't pay for what
              you don't use. Your base rate covers your exquisite lodging, basic amenities, and the profound silence of
              the bush. Everything else is an invitation to go deeper, customized precisely to your desires.
            </p>
            <div className="flex flex-col space-y-4">
              {['Solar Powered Infrastructure', 'Zero Plastic Waste Policy', 'Direct Community Benefit'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="font-label uppercase tracking-widest text-xs">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Organic image pair — stacked on mobile, side-by-side on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <div className="overflow-hidden shadow-xl rounded-[2rem] aspect-[4/3] sm:aspect-[3/4] sm:mt-10 reveal-scale">
              <img
                src="/images/1%20(5).jpeg"
                alt="Cottage perched on the cliff edge"
                className="w-full h-full object-cover grayscale-[0.15] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden shadow-xl rounded-[2rem] aspect-[4/3] sm:aspect-[3/4] reveal-scale" style={{ transitionDelay: '100ms' }}>
              <img
                src="/images/1%20(2).jpeg"
                alt="Thatched hut at golden sunset"
                className="w-full h-full object-cover grayscale-[0.15] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center max-w-3xl mx-auto px-8 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-tertiary/10 rounded-full blur-3xl" />
        </div>
        <h2 className="font-headline text-5xl mb-6 relative z-10">Ready to craft your journey?</h2>
        <p className="text-on-surface-variant mb-12 text-lg relative z-10">
          Connect with our concierge team to build a custom itinerary that reflects your rhythm and curiosity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <Link
            to="/inquiry"
            className="bg-primary text-on-primary px-10 py-4 font-headline text-xl font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Start Your Plan
          </Link>
          <button className="border border-primary/40 text-primary px-10 py-4 font-headline text-xl font-bold rounded-full hover:bg-primary/5 hover:border-primary transition-all">
            Download Rate Sheet
          </button>
        </div>
      </section>
    </main>
  )
}
