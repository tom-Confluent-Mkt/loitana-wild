import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const expeditions = [
  {
    icon: 'explore',
    title: 'Predator Tracking',
    desc: 'Follow the apex predators of the conservancy on foot and by vehicle. Lions, leopards, African wild dogs (striped wolves), and more in their undisturbed territory.',
    tag: 'Full Day',
    img: '/images/1%20(14).jpeg',
  },
  {
    icon: 'flight_takeoff',
    title: 'Helicopter Aerial Survey',
    desc: 'A private aerial survey over the Samburu plains and the Ewaso Nyiro river. Witness the scale of the Kirisia–Laikipia corridor from above.',
    tag: 'Half Day',
    img: '/images/1%20(13).jpeg',
  },
  {
    icon: 'visibility',
    title: 'Elephant Blind',
    desc: 'As evening falls, make your way to the elephant blind and watch the abundant wildlife gather at the waterhole for their evening drink. An exhilarating, close encounter.',
    tag: 'Evening',
    img: '/images/1%20(9).jpeg',
  },
  {
    icon: 'park',
    title: 'Bush Walk & Ewaso Nyiro',
    desc: 'Hike deep into the conservancy to the Ewaso Nyiro river. Spend a night or two in the bush camp, learning to read animal tracks and immersed in the sounds of the wilderness.',
    tag: 'Multi-Day',
    img: '/images/1%20(11).jpeg',
  },
  {
    icon: 'groups',
    title: 'Samburu Community Walk',
    desc: 'Venture into the Nkoteiya community. As the original guardians of this land, the Samburu share oral histories, pastoral traditions, and their deep knowledge of the landscape.',
    tag: 'Full Day',
    img: '/images/1%20(8).jpeg',
  },
  {
    icon: 'star',
    title: 'Stargazing',
    desc: 'When night blankets the valley, lie back and let the constellations tell their stories — from the Southern Cross to the brush stroke of the Milky Way overhead.',
    tag: 'Night',
    img: '/images/1%20(12).jpeg',
  },
]

export default function Expeditions() {
  useReveal()
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: `url('/images/1%20(7).jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 px-8 md:px-20 pb-20 max-w-[1920px] w-full mx-auto">
          <span className="font-label uppercase tracking-[0.4em] text-[10px] text-white/70 mb-6 block font-bold">
            Private Expeditions
          </span>
          <h1 className="reveal font-headline text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter mb-6">
            The Wild <br />
            <span className="italic">on Your Terms</span>
          </h1>
          <p className="reveal text-white/80 text-xl max-w-xl font-light leading-relaxed" style={{ transitionDelay: '100ms' }}>
            Every expedition at Loitana Wild is private by design. No shared vehicles, no fixed schedules—just you, an
            expert guide, and 5,300 acres of untouched Africa.
          </p>
        </div>
      </section>

      {/* Expedition Grid */}
      <section className="py-32 px-0 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-0">
          <div className="mb-20">
            <h2 className="reveal font-headline text-5xl mb-4 tracking-tight">Choose Your Adventure</h2>
            <p className="reveal text-on-surface-variant text-lg max-w-2xl" style={{ transitionDelay: '80ms' }}>
              Select from our curated menu, or work with our team to design something entirely your own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-8">
            {expeditions.map((exp, i) => (
              <div
                key={exp.title}
                className="group bg-surface-container-lowest overflow-hidden md:rounded-xl border-b border-outline-variant/20 md:border hover:border-primary/30 transition-all duration-500 hover:shadow-xl reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary font-label">
                      {exp.tag}
                    </span>
                    <span className="material-symbols-outlined text-outline-variant/60">{exp.icon}</span>
                  </div>
                  <h3 className="font-headline text-2xl mb-3 group-hover:italic transition-all">{exp.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Activities */}
      <section className="py-12 px-8 bg-surface-container-low border-y border-outline-variant/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary font-bold shrink-0">Also available</span>
          <div className="flex flex-wrap gap-3">
            {['Game Drives', 'Manyata Village Visits', 'Local Market Shopping', 'Helicopter Tours'].map((item) => (
              <span key={item} className="font-label text-xs uppercase tracking-widest border border-outline-variant/40 px-4 py-2 rounded-full text-on-surface-variant">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="bg-primary py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl text-on-primary mb-6 leading-tight">
              Every expedition is exclusive. <br />
              <span className="italic">No exceptions.</span>
            </h2>
            <p className="text-on-primary/80 text-lg leading-relaxed">
              We operate a strict one-party policy across the entire 5,300-acre conservancy. When you venture out, every
              track you follow belongs only to you.
            </p>
          </div>
          <Link
            to="/inquiry"
            className="shrink-0 bg-white text-primary px-10 py-5 rounded font-label font-bold uppercase tracking-widest text-xs hover:bg-primary-fixed transition-colors shadow-lg"
          >
            Plan Your Expedition
          </Link>
        </div>
      </section>
    </main>
  )
}
