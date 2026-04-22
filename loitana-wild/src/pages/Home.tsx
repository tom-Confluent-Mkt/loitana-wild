import { Link } from 'react-router-dom'

const heroImg =
  'https://lh3.googleusercontent.com/aida/ADBb0uguzLLTsFHpByAyShaSunZNflJ1ia_9wk8AhtiwiwEvfGUz5eo33kxULnf4zABvwKyZWnyAD7873W6pMX0T2VVEn2dMdS656oEqth3Qg4ylKxb12RbFtSiULo6sJ7-8E_xNTNdKtMkJynZ3rExg1begvRyFvW1oeZG1Sa-WhQQOJwrprqynfpHrOU154vbyh_9M2CXgVd2U1ShmSuz0Pxq3TBwaw7UbMWjvfNT7DL0FVrp-fzZCTrDJaTNtAdt1n1-AUDhYoNav_g'
const sanctuaryImg =
  'https://lh3.googleusercontent.com/aida/ADBb0uiuO29ADVTyAO1hMpDJ41okUHaHMyMDTirip4JSvhfuRoc0OUbINrB0dHJyT0O0W1hG0txNW2uWVkqFlC6q0UO8uMEQBZNVuqa5Yl9CfawN9uW-syNyNkXZ_7M9aAce4_dAsxJP1ix2Wsvle5DhBWHvYK_2QA3DAC6sziQWpEC4kxMT1Xhc5YWvbHlSw__LLA2-mvDimzTzLIuj0B5My5AEWcYmFEUpP2OKc4OEpZjWX3YA0pPZxNSsz2PxMzzOt9PyefDfuNZKDQ'
const ctaImg =
  'https://lh3.googleusercontent.com/aida/ADBb0uiAlP0owS4wkwdVF0vstokwJ-0Mq3gxpUm_X6ETWbgT-lsBWEZereUP561w1Mgizz6CVcuuhJTtZlat0UXyCCfqG_VUEtoz976RLCF3pX61m6ts986Tsn0QGRNeWxFu-KHPPIWJ27fw9wjRAmibXBXVoOkr-__-mBQRtXKv1359p2bo7u3ifeFQkkYUct7qo5d3--8S7gCfBhqUFVqBIUtXJW5nj-nL1CNd6lKN_957pyWPGCC7wk_dOM_GMqqqPYBvLuEsrmL6fA'

const episodes = [
  {
    id: '01',
    title: 'Twilight Migration',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0ujrRQkF7Y9McKI7aTr6lsKw4N_CrooM5IxqsIs03krLzI1u0yGVkn_EJG8A13xRaolwIHXssJNqwbAU_3-MGBz1vOfuB3mwL2_8XDomfeN0EwJ71UjPX-SHEaCfeYD8xBmVkCN4TpighIsFE5PDbPOlEVBmly4Rxc7VtFQW05nTdmbocv0diQdkEixdSfVloWvr1dLY0QtqyjkcuH3x9zvJirBhHt6qTSd0g4HWxwdo-L8uEFF5whsY1fxYz5WEfgb-dn8bfhhTnQ',
    alt: 'The cottage nestled in nature',
  },
  {
    id: '02',
    title: 'Cultural Roots',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uhrVEufMdFgxJ6OXrNjuYxiPx5WLwMNfxCorS5a03uHqexeFVOune9lZw8hjk2wxFuyh2NrWXrLJnkjQSJmMuMBZOs3NABJnFVXgtkthOGaxQvKqEoH9s5NPZz6MG72pft19qPrzpqX53d6u25vyI_-5kjnkp-z5F6G8tWBpbHjbqWny6utsSxsWSWmKAm1adyOn0GQrXQ4LBQFbIgEhCedBgXKdsgjc0TwLD2j9tiJgXYNuRH9yNWYc5K2nu5FUSzydlmqFa0D6g',
    alt: 'View of the house exterior',
  },
  {
    id: '03',
    title: 'Predator Hour',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0ujFlqVecv-glzOx3yi7O2VHtEttnKUn837vjofaF8Y0pehh2C_yUNJ9eZr50smkcLW3vui3SVLctw78K8EPvaoUeLTFWGG-2EmOrJU4COXN6zRNr7JXAhWjhacPAYY9Uo3yXxbhMYS1rtuTLp_Kh8nLTNAnWvaAqsRCH7K36zPErZNbx_OrzojZm8bkzNDZxrtwOG6XekcVqQVQTvSU6V0QD2QtDeDaxJMYsdu9p94TSKJiJiuc5MT-oaSthKA3yoReV94OLt5PdQ',
    alt: 'Cottage at golden hour',
  },
  {
    id: '04',
    title: 'Nocturnal Silence',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uirHVL7yAIlyXdUlAHVJj0a3mOuzY73u5GeQThZuCYd8_CiFmKw-9nel3L8lCEpr_ZW8zvEgP6s84erGeVAByEQKRssrvni6HxNubHQc5Y02qSUnh7o_A3Mi1CIZoFE3LjxneFVdHVL95fJoIpm-TQc26Dw6AjSEpa7ZPKA-c3YYztkrbhBmknSTGc0shekyWuxRV3gMSuGt5IC7mkSSfpj8EbeKMUE_Yg1FATGaeEfTW-LNkPr1AFrJo3pbaSJXR36yTUSOtov2g',
    alt: 'The river valley vista',
  },
  {
    id: '05',
    title: 'The First Light',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0ujtXLVr4z8trnv0G46cb_BfD8TrLiaL9doVMnUX4_ZaRq1db-enTzJyTC6iTi-c9BfUZ0tnEbOAFu3S5EI1zn6DxMOU_JrQVoGRuV1CxukqJ2z-XKof-OkylQMHPwqt75EG7xR_q1hie8y9vMBMV-pc-oQcLItQIVuGEtdoU8QQhCtvqPXjKths90Z4J0sFbntlX8QA-p22La5-HSdVKito9FyKrov-VpMcTRt0HtJBXk-S9lCgldebbIJbbCVYgVcuow0QvosevA',
    alt: 'Wild animal tracks',
  },
]

const bentoItems = [
  {
    colSpan: 'md:col-span-8',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uhrVEufMdFgxJ6OXrNjuYxiPx5WLwMNfxCorS5a03uHqexeFVOune9lZw8hjk2wxFuyh2NrWXrLJnkjQSJmMuMBZOs3NABJnFVXgtkthOGaxQvKqEoH9s5NPZz6MG72pft19qPrzpqX53d6u25vyI_-5kjnkp-z5F6G8tWBpbHjbqWny6utsSxsWSWmKAm1adyOn0GQrXQ4LBQFbIgEhCedBgXKdsgjc0TwLD2j9tiJgXYNuRH9yNWYc5K2nu5FUSzydlmqFa0D6g',
    alt: 'Expeditions across the land',
    title: 'Expeditions',
    desc: 'Private tracking, night drives, and helicopter surveys over the Rift.',
  },
  {
    colSpan: 'md:col-span-4',
    img: sanctuaryImg,
    alt: 'The stone house architecture',
    title: 'The House',
    desc: 'Architectural mastery blending stone, canvas, and cedar.',
  },
  {
    colSpan: 'md:col-span-4',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0ujtXLVr4z8trnv0G46cb_BfD8TrLiaL9doVMnUX4_ZaRq1db-enTzJyTC6iTi-c9BfUZ0tnEbOAFu3S5EI1zn6DxMOU_JrQVoGRuV1CxukqJ2z-XKof-OkylQMHPwqt75EG7xR_q1hie8y9vMBMV-pc-oQcLItQIVuGEtdoU8QQhCtvqPXjKths90Z4J0sFbntlX8QA-p22La5-HSdVKito9FyKrov-VpMcTRt0HtJBXk-S9lCgldebbIJbbCVYgVcuow0QvosevA',
    alt: 'Deep roots in the community',
    title: 'Community',
    desc: 'Roots that run deep within the Loitana conservation fabric.',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Maasai person on a path in the savannah" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 w-full px-8 md:px-20">
          <div className="max-w-4xl">
            <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase rounded">
              The Exclusive Frontier
            </span>
            <h1 className="text-6xl md:text-8xl font-headline text-white leading-[1.05] tracking-tight mb-8">
              Loitana Wild: 4,000 Hectares. One Guest.{' '}
              <span className="italic">You.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-6">
              <Link
                to="/the-residence"
                className="bg-primary text-on-primary px-10 py-5 text-sm uppercase tracking-widest font-bold rounded hover:bg-opacity-90 transition-colors active:scale-95 font-label text-center"
              >
                Begin Your Journey
              </Link>
              <Link
                to="/the-residence"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 text-sm uppercase tracking-widest font-bold rounded hover:bg-white/20 transition-colors active:scale-95 font-label text-center"
              >
                Explore the Outcrop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Your Private Sanctuary */}
      <section className="py-24 md:py-40 px-8 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src={sanctuaryImg}
                alt="Traditional stone cottage architecture"
                className="w-full aspect-[4/5] object-cover shadow-2xl rounded-xl"
              />
              <div className="absolute -bottom-10 -right-10 hidden lg:block bg-surface-container-low p-8 max-w-xs shadow-xl rounded-xl border border-outline-variant/10">
                <p className="font-headline text-2xl italic text-primary">
                  "The only silence is the rhythm of the wild."
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-headline leading-tight text-on-surface">
              Your Private Sanctuary
            </h2>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed">
              At Loitana Wild, we have dismantled the hotel model. We offer 4,000 hectares of pristine Kenyan
              wilderness, and we only ever host one party at a time.
            </p>
            <p className="text-on-surface-variant leading-loose">
              Whether you are a solo adventurer, a couple seeking solitude, or a family reconnecting, the entire estate
              is yours. No shared dining rooms, no communal pools, no schedules but your own. This is true
              exclusivity—rugged luxury at the edge of the world.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-headline text-primary">4,000</span>
                <span className="text-xs uppercase tracking-widest text-outline">Hectares of Freedom</span>
              </div>
              <div>
                <span className="block text-3xl font-headline text-primary">100%</span>
                <span className="text-xs uppercase tracking-widest text-outline">Solar Powered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visions of the Wild */}
      <section className="py-24 px-8 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4 italic">Visions of the Wild</h2>
            <p className="text-on-surface-variant font-light max-w-2xl mx-auto">
              Experience the pulse of the conservancy through the lens of those who call it home. Rare moments,
              captured in the heart of the savannah.
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
            {episodes.map((ep) => (
              <div
                key={ep.id}
                className="flex-none w-64 md:w-72 aspect-[9/16] relative group cursor-pointer snap-start overflow-hidden rounded-xl"
              >
                <img
                  src={ep.img}
                  alt={ep.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined text-white text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-8 left-6 right-6">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 mb-2 font-label">
                    Episode {ep.id}
                  </p>
                  <h4 className="text-xl font-headline text-white leading-tight">{ep.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience (Bento) */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-headline mb-4 text-on-surface">The Experience</h2>
              <p className="text-on-surface-variant">A curated existence between the sky and the red earth.</p>
            </div>
            <a
              href="#"
              className="text-primary font-bold border-b border-primary/30 hover:border-primary pb-1 transition-all uppercase tracking-widest text-xs font-label"
            >
              View Full Gallery
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            {bentoItems.map((item) => (
              <div
                key={item.title}
                className={`${item.colSpan} bg-surface-container-lowest relative overflow-hidden group rounded-xl`}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-3xl font-headline mb-2">{item.title}</h3>
                  <p className="text-white/80 max-w-md font-light">{item.desc}</p>
                </div>
              </div>
            ))}
            {/* Bespoke Living Card */}
            <div className="md:col-span-8 bg-primary-container flex items-center p-12 relative overflow-hidden rounded-xl">
              <div className="relative z-10">
                <h3 className="text-on-primary-container text-4xl font-headline mb-6">Bespoke Living</h3>
                <p className="text-on-primary-container/80 text-lg max-w-md leading-relaxed mb-8">
                  Every meal is a conversation with our chef. Every journey is designed around your curiosity. This is
                  the art of the tailor-made stay.
                </p>
                <Link
                  to="/tailor-your-stay"
                  className="inline-block bg-primary text-on-primary px-8 py-4 uppercase text-xs font-bold tracking-widest rounded shadow-sm hover:opacity-90 transition-all font-label"
                >
                  Tailor Your Menu
                </Link>
              </div>
              <span
                className="material-symbols-outlined absolute -right-10 -bottom-10 text-[20rem] text-primary/10 pointer-events-none"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 md:py-40 px-8 bg-surface">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-headline mb-12 text-on-surface">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-4 md:px-0 rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
            {/* Base Price */}
            <div className="bg-surface-container p-12 md:p-16 text-left flex flex-col justify-between">
              <div>
                <span className="inline-block border border-primary/20 px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-widest text-primary rounded-sm">
                  Foundation
                </span>
                <h3 className="text-3xl font-headline mb-6 text-on-surface">Affordable Luxury Base</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  The house, the land, and the staff are yours at a transparent base rate. Start your story from a
                  place of grounded comfort.
                </p>
              </div>
              <div className="pt-8 border-t border-outline-variant/10">
                <span className="block text-sm text-outline mb-1 font-label">Starting from</span>
                <span className="text-4xl font-headline text-primary">
                  $450{' '}
                  <span className="text-lg text-on-surface-variant font-body italic">/ night</span>
                </span>
              </div>
            </div>
            {/* Bespoke */}
            <div className="bg-primary text-on-primary p-12 md:p-16 text-left flex flex-col justify-between">
              <div>
                <span className="inline-block border border-on-primary/20 px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                  The Add-Ons
                </span>
                <h3 className="text-3xl font-headline mb-6 text-white">Bespoke Services</h3>
                <ul className="space-y-4 text-white/90">
                  {[
                    { icon: 'restaurant', label: 'Private Chef & Full Board Catering' },
                    { icon: 'explore', label: 'Expert Wildlife Guides & Expeditions' },
                    { icon: 'flight_takeoff', label: 'Helicopter Transfers & Safari Logistics' },
                  ].map((item) => (
                    <li key={item.icon} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm">{item.icon}</span>
                      <span className="font-light">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  to="/tailor-your-stay"
                  className="block w-full bg-white text-primary px-8 py-5 text-sm uppercase tracking-widest font-bold rounded hover:bg-surface-variant transition-colors font-label text-center"
                >
                  Build Your Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative py-48 md:py-64 bg-cover bg-center overflow-hidden flex items-center"
        style={{ backgroundImage: `url('${ctaImg}')` }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-5xl md:text-7xl font-headline mb-8 max-w-4xl italic text-white">
              Your 4,000 hectares are waiting.
            </h2>
            <p className="text-xl max-w-2xl mb-12 text-white/90">
              Disconnect from the noise. Reconnect with the rhythm of the African wild in total privacy.
            </p>
            <Link
              to="/inquiry"
              className="group flex items-center gap-4 bg-primary text-on-primary px-12 py-6 text-lg font-headline rounded-xl transition-all hover:pr-14 active:scale-95 shadow-lg"
            >
              Request Availability
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
