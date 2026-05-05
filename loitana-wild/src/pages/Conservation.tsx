import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const heroImg = '/images/sunset-mountains.jpg'

const wildlife = [
  'Elephants',
  'African Wild Dogs (Striped Wolves)',
  'Greater Kudu',
  'Leopard',
  'Lions',
  'Baboons',
  "Von der Decken's Hornbills",
  'Vulturine Guineafowl',
  'Pygmy Falcon',
]

const impact = [
  { icon: 'shield', title: 'Ranger Programs', desc: 'A dedicated team of community rangers protects the conservancy and its wildlife around the clock.' },
  { icon: 'grass', title: 'Sustainable Grazing', desc: 'Carefully managed rotational grazing plans preserve the land while supporting the pastoral way of life.' },
  { icon: 'groups', title: "Women's Groups", desc: "Community women's groups are supported through conservation revenues, building economic independence." },
  { icon: 'school', title: 'Education Initiatives', desc: 'Local children learn about conservation and their cultural heritage through programmes funded by the conservancy.' },
]

export default function Conservation() {
  useReveal()

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Sunset over the Samburu highlands and Ewaso Nyiro river" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 px-8 md:px-20 pb-20 max-w-[1920px] w-full mx-auto">
          <span className="font-label uppercase tracking-[0.4em] text-[10px] text-white/70 mb-6 block font-bold reveal">
            Conservation
          </span>
          <h1 className="reveal font-headline text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter mb-6" style={{ transitionDelay: '80ms' }}>
            The Story of <br />
            <span className="italic">Nkoteiya</span>
          </h1>
          <p className="reveal text-white/80 text-xl max-w-xl font-light leading-relaxed" style={{ transitionDelay: '160ms' }}>
            Pronounced <em>N-ko-tay-a</em> — a 5,300-acre sanctuary born from the belief that the future of wildlife
            and the well-being of local communities are deeply intertwined.
          </p>
        </div>
      </section>

      {/* About Nkoteiya */}
      <section className="py-24 md:py-40 px-8 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5 reveal">
            <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold block mb-6">The Conservancy</span>
            <h2 className="font-headline text-5xl md:text-6xl tracking-tighter leading-[0.95] mb-8">
              A Community-Led <br /><span className="italic">Conservation Model</span>
            </h2>
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { num: '5,300', label: 'Acres of protected habitat' },
                { num: '43,000', label: 'Acre community-owned ranch' },
              ].map((s) => (
                <div key={s.label}>
                  <span className="block font-headline text-4xl text-primary">{s.num}</span>
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 reveal" style={{ transitionDelay: '100ms' }}>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed">
              Situated within a 43,000-acre community-owned group ranch in Kenya, the Nkoteiya Conservancy represents
              a bold and hopeful chapter in the Samburu people's long relationship with this land.
            </p>
            <p className="text-on-surface-variant leading-loose">
              For generations, Samburu pastoralists have lived in balance with the wildlife that shares these hills and
              valleys. As pressures from climate change, overgrazing, and land fragmentation mounted, community leaders
              came together to chart a new path — one that would protect their cultural heritage while securing a
              sustainable future.
            </p>
            <p className="text-on-surface-variant leading-loose">
              Established in partnership with conservation groups including the{' '}
              <strong className="text-on-surface">Northern Rangelands Trust (NRT)</strong>, 5,300 acres of prime
              wildlife habitat was set aside as a dedicated conservation area. Today it is a safe haven for threatened
              species and a living classroom where traditional knowledge and modern conservation meet.
            </p>
          </div>
        </div>
      </section>

      {/* Wildlife */}
      <section className="py-24 md:py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold block mb-4">Wildlife</span>
            <h2 className="font-headline text-5xl tracking-tighter mb-4">The Kirisia–Laikipia Corridor</h2>
            <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
              The conservancy forms part of the vital Kirisia–Laikipia wildlife migration corridor — a lifeline for
              northern Kenya's biodiversity, where animals move freely between Samburu and Laikipia.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 reveal" style={{ transitionDelay: '100ms' }}>
            {wildlife.map((animal) => (
              <span
                key={animal}
                className="px-5 py-2.5 bg-background border border-outline-variant/30 rounded-full font-label text-xs uppercase tracking-widest text-on-surface-variant hover:border-primary/40 hover:text-primary transition-colors"
              >
                {animal}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-24 md:py-40 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold block mb-4">Community Impact</span>
            <h2 className="font-headline text-5xl tracking-tighter mb-4">
              Conservation that <span className="italic">gives back</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
              Every visit directly supports the Nkoteiya community. The conservancy is not just a refuge for wildlife —
              it is a model for coexistence, where the story of people and nature continues to unfold.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {impact.map((item, i) => (
              <div
                key={item.title}
                className="p-8 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:border-primary/30 transition-all reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-6 block">{item.icon}</span>
                <h3 className="font-headline text-2xl mb-3 italic">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Fees */}
      <section className="py-24 px-8 bg-primary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl reveal">
            <span className="font-label uppercase tracking-[0.3em] text-[10px] text-on-primary/70 font-bold block mb-6">Conservation Fees</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-primary mb-6 leading-tight">
              KES 2,000 per person, <span className="italic">per day.</span>
            </h2>
            <p className="text-on-primary/80 text-lg leading-relaxed">
              Whether you are a foreigner or a local, young or old, conservation fees are the same for all. These fees
              directly fund ranger programmes, sustainable grazing plans, women's groups, and education initiatives
              within the Nkoteiya community.
            </p>
          </div>
          <Link
            to="/inquiry"
            className="shrink-0 bg-white text-primary px-10 py-5 rounded font-label font-bold uppercase tracking-widest text-xs hover:bg-primary-fixed transition-colors shadow-lg"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </main>
  )
}
