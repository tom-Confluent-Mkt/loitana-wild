import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const imgs = {
  hero: '/images/1%20(4).jpeg',
  stone: '/images/1%20(3).jpeg',
  detail: '/images/1%20(6).jpeg',
  trekker: '/images/1%20(5).jpeg',
  river: '/images/1%20(15).jpeg',
  sunset: '/images/1%20(11).jpeg',
}

const features = [
  {
    icon: 'restaurant',
    title: 'Bespoke Gastronomy',
    desc: 'Full board includes all meals tailored to your preference, from bush breakfasts to candlelit terrace dinners.',
    items: ['Private Chef', 'Fine Wines & Spirits', 'Organic Produce'],
  },
  {
    icon: 'park',
    title: 'Private Expeditions',
    desc: 'Unlimited game drives and guided bush walks on your own schedule. No fixed times, no other tourists.',
    items: ['Custom 4x4 Vehicle', 'Master Tracker', 'Night Safaris'],
  },
  {
    icon: 'spa',
    title: 'Wild Wellness',
    desc: 'Full access to the infinity pool, gym facilities, and daily laundry service for a seamless retreat.',
    items: ['Infinity Pool', 'Outdoor Showers', 'Butler Service'],
  },
]

export default function TheResidence() {
  useReveal()

  return (
    <main>
      {/* Hero — Split Editorial */}
      <section className="relative min-h-[90vh] bg-background flex items-center overflow-hidden pt-12">
        <div className="max-w-[1720px] mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="md:col-span-6 lg:col-span-5 relative z-10 py-12 reveal">
            <span className="font-label uppercase tracking-[0.4em] text-[10px] text-primary mb-8 block font-bold">
              The Residence
            </span>
            <h1 className="font-headline text-7xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tighter text-on-surface mb-10">
              The House <br /> <span className="italic">on the</span> Rock
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-lg leading-relaxed italic mb-12">
              An architectural marvel sculpted into the ancient granite of the Lolokwe escarpment, offering absolute
              seclusion in the heart of Northern Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <div className="flex flex-col">
                <span className="font-headline text-5xl font-bold text-primary mb-1">4,000</span>
                <span className="font-label uppercase text-[9px] tracking-[0.2em] font-bold text-on-surface-variant">
                  Hectares of Wilderness
                </span>
              </div>
              <div className="h-10 w-px bg-outline-variant hidden sm:block" />
              <div className="flex flex-col">
                <span className="font-headline text-3xl italic text-on-surface mb-1">Exclusive Tenure</span>
                <span className="font-label uppercase text-[9px] tracking-[0.2em] font-bold text-on-surface-variant">
                  The Entire Estate is Yours
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-6 lg:col-span-7 relative reveal-scale">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/3] w-full overflow-hidden md:rounded-xl editorial-shadow -mx-8 md:mx-0">
              <img src={imgs.hero} alt="The authentic House on the Rock exterior" className="w-full h-full object-cover" />
              <div className="absolute bottom-12 -left-6 bg-surface p-10 hidden lg:block rounded-xl editorial-shadow border border-outline-variant/10">
                <p className="font-headline text-xl italic text-primary leading-tight">
                  "A sanctuary where the architecture <br /> bows to the landscape."
                </p>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Gallery Grid — Asymmetric Bento
          Mobile: each image gets an explicit aspect ratio so it isn't height-collapsed.
          Desktop: the grid has a fixed height (1200px) so aspect-auto takes over. */}
      <section className="py-16 md:py-32 px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 md:h-[1200px] -mx-8 md:mx-0">
          {/* Large image */}
          <div className="md:col-span-8 overflow-hidden md:rounded-xl aspect-[4/3] md:aspect-auto reveal-scale">
            <img
              src={imgs.stone}
              alt="Stone facade and terrace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          {/* Right column */}
          <div className="md:col-span-4 grid grid-rows-1 md:grid-rows-2 gap-2 md:gap-8">
            <div className="overflow-hidden md:rounded-xl aspect-[4/3] md:aspect-auto reveal-scale" style={{ transitionDelay: '80ms' }}>
              <img
                src={imgs.detail}
                alt="Terrace with mountain panorama"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            <div className="bg-surface-container-low p-8 md:p-12 flex flex-col justify-center md:rounded-xl reveal" style={{ transitionDelay: '120ms' }}>
              <h3 className="font-headline text-3xl md:text-4xl mb-4 md:mb-6 italic">Uninterrupted Horizon</h3>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
                Every room is designed to vanish into the landscape, with floor-to-ceiling glass that frames the
                migration paths below.
              </p>
            </div>
          </div>
          {/* Bottom row */}
          <div className="md:col-span-4 overflow-hidden md:rounded-xl aspect-[4/3] md:aspect-auto reveal-scale" style={{ transitionDelay: '100ms' }}>
            <img src={imgs.trekker} alt="House environment detail" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-8 overflow-hidden md:rounded-xl aspect-[4/3] md:aspect-auto reveal-scale" style={{ transitionDelay: '150ms' }}>
            <img src={imgs.hero} alt="Wide view of the house on the rock" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Total Privacy */}
      <section className="bg-surface-container-low py-24 md:py-40 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="md:w-1/2 order-2 md:order-1 reveal-scale">
            <div className="relative editorial-shadow overflow-hidden md:rounded-xl -mx-8 md:mx-0">
              <img
                src={imgs.river}
                alt="Wide river view of the conservancy"
                className="w-full aspect-[4/3] md:aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-surface/95 backdrop-blur-md p-6 md:p-8 max-w-xs border border-outline-variant/20 rounded-xl">
                <span className="font-headline text-4xl md:text-5xl block font-bold text-primary mb-2">4,000</span>
                <span className="font-label uppercase text-[10px] tracking-[0.3em] font-bold">Hectares of Wilderness</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 reveal">
            <h2 className="font-headline text-5xl md:text-7xl mb-8 md:mb-10 leading-[0.95] tracking-tighter">
              Total Privacy. <br /> No Compromise.
            </h2>
            <p className="font-body text-xl text-on-surface-variant mb-10 md:mb-12 leading-relaxed italic">
              Loitana Wild is not a hotel; it is your private estate. When you book the House on the Rock, you are the
              only guests on the entire 4,000-hectare conservancy.
            </p>
            <div className="space-y-8 md:space-y-10">
              {[
                {
                  icon: 'security',
                  title: 'Exclusive Tenure',
                  desc: 'Your stay includes the entire staff, a private guide, and a dedicated chef solely for your party.',
                },
                {
                  icon: 'solar_power',
                  title: 'Off-Grid Intelligence',
                  desc: 'Experience 100% solar-powered luxury. Authentic comfort that leaves zero footprint on the land.',
                },
              ].map((item, i) => (
                <div key={item.icon} className="flex gap-6 md:gap-8 items-start reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="bg-primary/10 text-primary w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0 rounded-xl">
                    <span className="material-symbols-outlined text-2xl md:text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl md:text-2xl mb-2 font-semibold">{item.title}</h4>
                    <p className="text-base text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Included In Your Stay */}
      <section className="py-24 md:py-40 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center reveal">
            <h2 className="font-headline text-5xl md:text-6xl mb-6 tracking-tighter italic">Included in Your Stay</h2>
            <div className="h-0.5 w-32 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {features.map((f, i) => (
              <div
                key={f.icon}
                className="p-8 md:p-12 border border-outline-variant/30 hover:border-primary/40 transition-all group bg-surface-container-lowest rounded-xl reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="material-symbols-outlined text-5xl text-primary/30 group-hover:text-primary transition-colors mb-8 md:mb-10 block">
                  {f.icon}
                </span>
                <h3 className="font-headline text-3xl mb-4 md:mb-5 italic">{f.title}</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6 md:mb-8">{f.desc}</p>
                <ul className="text-[11px] space-y-3 font-label uppercase tracking-[0.2em] text-primary font-bold">
                  {f.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 md:py-48 px-8 flex justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={imgs.sunset} alt="Sunset trekking in the savannah" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="reveal font-headline text-6xl md:text-8xl text-white mb-10 leading-[0.9] tracking-tighter">
            Secure Your Sanctuary
          </h2>
          <p className="reveal font-body text-xl md:text-2xl text-white/90 mb-10 md:mb-14 italic" style={{ transitionDelay: '100ms' }}>
            Experience the true soul of Kenya in absolute solitude. Limited bookings available per season.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 md:gap-8 justify-center" style={{ transitionDelay: '200ms' }}>
            <Link
              to="/inquiry"
              className="bg-white text-primary px-10 md:px-12 py-5 rounded-xl font-label font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-primary-fixed transition-colors shadow-xl"
            >
              Check Availability
            </Link>
            <button className="border border-white/40 backdrop-blur-md text-white px-10 md:px-12 py-5 rounded-xl font-label font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-white/10 transition-colors">
              View Floorplans
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
