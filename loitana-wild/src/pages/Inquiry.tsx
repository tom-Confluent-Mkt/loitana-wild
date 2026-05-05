import { type FormEvent } from 'react'
import { useReveal } from '../hooks/useReveal'

const riverImg = '/images/1%20(12).jpeg'
const tracksImg = '/images/1%20(14).jpeg'
const valleyImg = '/images/1%20(13).jpeg'

const testimonials = [
  {
    quote:
      "The silence here isn’t empty; it’s full of life. Waking up to the sunrise over the Mara was a spiritual experience we will never forget.",
    name: 'Elena & Marcus',
    origin: 'Stockholm, Sweden',
  },
  {
    quote:
      "Our guide didn’t just show us animals; he showed us the intricate dance of the ecosystem. Truly sustainable and deeply authentic.",
    name: 'Julian Thorne',
    origin: 'London, UK',
  },
  {
    quote:
      "Loitana Wild is where luxury meets the raw, unfiltered heart of Kenya. The organic dining under the stars was the highlight.",
    name: 'The Chen Family',
    origin: 'Singapore',
  },
]

const inputClass =
  'w-full bg-surface-container-highest border-none focus:ring-0 p-4 font-body text-on-surface-variant transition-all outline-none rounded-DEFAULT focus:bg-surface-container-low'

export default function Inquiry() {
  useReveal()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // form submission handled externally (Verso / backend)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Header */}
      <header
        className="relative w-full pt-20 pb-12 px-8 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(250, 250, 247, 0.85), rgba(250, 250, 247, 0.85)), url('${riverImg}')`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-2xl reveal">
            <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-6 block">
              Begin the adventure
            </span>
            <h1 className="font-headline text-[clamp(3.5rem,8vw,5.5rem)] leading-[0.9] tracking-tighter text-primary">
              Start Your <br />
              Kenyan Journey
            </h1>
          </div>
          <div className="hidden md:block pb-4">
            <p className="font-headline italic text-xl text-outline max-w-xs">
              "The savannah speaks in whispers to those who listen."
            </p>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <section className="px-8 pb-32 pt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-12 reveal">
            {/* Testimonials */}
            <div className="space-y-8">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-2 block">
                  Testimonials
                </span>
                <h2 className="font-headline text-4xl text-primary tracking-tight">Voices of the Wild</h2>
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-4">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="snap-start flex-shrink-0 w-full md:w-[85%] border-l border-outline-variant/30 pl-8 py-2"
                  >
                    <p className="font-headline italic text-2xl text-on-surface leading-snug">"{t.quote}"</p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
                        <span className="material-symbols-outlined text-sm">person</span>
                      </div>
                      <div>
                        <p className="font-label text-[10px] font-bold uppercase tracking-widest text-primary">
                          {t.name}
                        </p>
                        <p className="font-headline text-xs italic text-outline">{t.origin}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-surface-container-low p-8 md:p-16 rounded-xl">
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-outline" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-outline" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="hello@adventure.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-outline" htmlFor="dates">
                      Preferred Dates
                    </label>
                    <div className="relative">
                      <input
                        id="dates"
                        type="text"
                        placeholder="Select timeframe"
                        className={inputClass}
                      />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                        calendar_today
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-outline" htmlFor="guests">
                      Guest Count
                    </label>
                    <select id="guests" className={inputClass + ' appearance-none'}>
                      <option>1 Guest</option>
                      <option defaultValue="2 Guests">2 Guests</option>
                      <option>3 - 5 Guests</option>
                      <option>6+ (Private Group)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-outline" htmlFor="wild-request">
                    How do you want to wild?
                  </label>
                  <textarea
                    id="wild-request"
                    rows={5}
                    placeholder="Tell us about your dream additions: Hot air balloon sunrise, private guide, conservation workshop..."
                    className={inputClass + ' resize-none'}
                  />
                </div>
                <div className="pt-4 flex items-center gap-8">
                  <button
                    type="submit"
                    className="bg-primary text-on-primary px-12 py-5 rounded-DEFAULT font-label font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors duration-300"
                  >
                    Send Inquiry
                  </button>
                  <span className="hidden md:block font-body text-sm text-outline-variant max-w-[200px] leading-snug">
                    We aim to respond within 24 hours to begin your curation.
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-16 reveal" style={{ transitionDelay: '150ms' }}>
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden bg-surface-container-high rounded-lg">
                <img
                  src={riverImg}
                  alt="Scenic Kenyan river view"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 max-w-[240px] shadow-xl rounded-DEFAULT">
                <p className="font-headline text-2xl text-primary leading-tight">Private Expeditions</p>
                <p className="font-body text-sm text-outline mt-2">
                  Every stay at Loitana is uniquely crafted for your curiosities.
                </p>
              </div>
            </div>

            {/* Amenities Chips */}
            <div className="space-y-6 pt-8">
              <h3 className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                Included Amenities
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Solar Powered', 'Private Guide', 'Organic Dining', 'Airstrip Transfer'].map((chip) => (
                  <span
                    key={chip}
                    className="bg-secondary-container text-on-secondary-container px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="p-8 bg-surface-container-high border-l-4 border-primary rounded-DEFAULT">
              <h4 className="font-headline text-xl text-on-surface mb-2">Finding the Wild</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Located on the Samburu/Laikipia border, south of the Karisia Hills, Loitana Wild offers exclusive access
                to the Nkoteiya conservancy, far from the crowds. We provide private transfers from Nairobi or Wilson Airport.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={tracksImg} alt="Animal paw print in the sand" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={valleyImg} alt="People overlooking the valley" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
