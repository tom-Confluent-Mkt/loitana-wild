import { useState } from 'react'
import { Link } from 'react-router-dom'

const featureImg =
  'https://lh3.googleusercontent.com/aida/ADBb0uirHVL7yAIlyXdUlAHVJj0a3mOuzY73u5GeQThZuCYd8_CiFmKw-9nel3L8lCEpr_ZW8zvEgP6s84erGeVAByEQKRssrvni6HxNubHQc5Y02qSUnh7o_A3Mi1CIZoFE3LjxneFVdHVL95fJoIpm-TQc26Dw6AjSEpa7ZPKA-c3YYztkrbhBmknSTGc0shekyWuxRV3gMSuGt5IC7mkSSfpj8EbeKMUE_Yg1FATGaeEfTW-LNkPr1AFrJo3pbaSJXR36yTUSOtov2g'

const catalog = [
  {
    category: 'Culinary Excellence',
    filterKey: 'Culinary',
    icon: 'restaurant',
    title: 'Private Chef & Custom Catering',
    desc: 'A dedicated culinary artisan at your disposal. Includes bespoke menus, dietary tailoring, and all meal service from sunrise bush breakfasts to 5-course dinners.',
    price: '$150',
    unit: 'Daily Supplement',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uiuO29ADVTyAO1hMpDJ41okUHaHMyMDTirip4JSvhfuRoc0OUbINrB0dHJyT0O0W1hG0txNW2uWVkqFlC6q0UO8uMEQBZNVuqa5Yl9CfawN9uW-syNyNkXZ_7M9aAce4_dAsxJP1ix2Wsvle5DhBWHvYK_2QA3DAC6sziQWpEC4kxMT1Xhc5YWvbHlSw__LLA2-mvDimzTzLIuj0B5My5AEWcYmFEUpP2OKc4OEpZjWX3YA0pPZxNSsz2PxMzzOt9PyefDfuNZKDQ',
    aspect: 'aspect-[4/3]',
    bg: 'bg-surface-container-low',
  },
  {
    category: 'Exploration',
    filterKey: 'Exploration',
    icon: 'hiking',
    title: 'Bespoke Walking Safaris',
    desc: 'Venture where vehicles cannot. Track the silent movements of the wild on foot with our expert naturalists. Focus on botany, tracking, and micro-ecosystems.',
    price: '$120',
    unit: 'Per Person',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uigqxrCtSp2lUg0YvAYH6_V_Ei8kfLkyhRwqKffOjnG1EoN0kwyREbp10qTML7inZrYZ2UXwEFGMGRAtx_A8llJ5u5aWyL0CqInl-mM0rwHWeL-20cHzPLk_p7xyZxg8N1gGpe4Elrlmjbdn4FO7M3ksxt2lq5rcu8MPWPcVmfJczzPXGCXbzyQrNDsWULNwdq7MGtU_gTfrh-IVsQPhw7fmlmLICB2IfS8cMor4KvD9OLij8q92PNY45UIAk3W8eqGKP9F5Mc6MQ',
    aspect: 'aspect-square',
    bg: 'bg-surface-container-high',
  },
  {
    category: 'Nocturnal Exploration',
    filterKey: 'Exploration',
    icon: 'visibility',
    title: 'Predator Tracking & Night Drives',
    desc: 'Witness the savannah come alive after dark. Using infrared technology and expert tracking, observe the elusive nocturnal predators of the conservancy.',
    price: '$180',
    unit: 'Per Vehicle',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0ujtXLVr4z8trnv0G46cb_BfD8TrLiaL9doVMnUX4_ZaRq1db-enTzJyTC6iTi-c9BfUZ0tnEbOAFu3S5EI1zn6DxMOU_JrQVoGRuV1CxukqJ2z-XKof-OkylQMHPwqt75EG7xR_q1hie8y9vMBMV-pc-oQcLItQIVuGEtdoU8QQhCtvqPXjKths90Z4J0sFbntlX8QA-p22La5-HSdVKito9FyKrov-VpMcTRt0HtJBXk-S9lCgldebbIJbbCVYgVcuow0QvosevA',
    aspect: 'aspect-square',
    bg: 'bg-primary',
    dark: true,
  },
  {
    category: 'Community',
    filterKey: 'Community',
    icon: 'groups',
    title: 'Maasai Cultural Immersion',
    desc: 'Meaningful engagement with the local community. Learn traditional crafts, oral histories, and pastoral traditions. 50% of fees go directly to the village fund.',
    price: '$60',
    unit: 'Donation Basis',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uiAlP0owS4wkwdVF0vstokwJ-0Mq3gxpUm_X6ETWbgT-lsBWEZereUP561w1Mgizz6CVcuuhJTtZlat0UXyCCfqG_VUEtoz976RLCF3pX61m6ts986Tsn0QGRNeWxFu-KHPPIWJ27fw9wjRAmibXBXVoOkr-__-mBQRtXKv1359p2bo7u3ifeFQkkYUct7qo5d3--8S7gCfBhqUFVqBIUtXJW5nj-nL1CNd6lKN_957pyWPGCC7wk_dOM_GMqqqPYBvLuEsrmL6fA',
    aspect: 'aspect-[3/4]',
    bg: 'bg-surface-container-high',
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
  },
  {
    category: 'Culinary',
    filterKey: 'Culinary',
    icon: 'water_drop',
    title: 'Dawn River Breakfast',
    desc: 'A fully catered breakfast setup on the sandy banks of the Loitana river. Fresh juices, campfire coffee, and hot dishes prepared on site as the sun rises.',
    price: '$85',
    unit: 'Per Guest',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uiT68b6cAQnfFIJENucNpp6sJGouOmdfinP6qTjiQ_lHEF2Rb_TYrsSUyRN2LlnNbW4bUngYHTJ1aF6HA4U2RxdaQMe2fjqie65LEra1Ni_i1fqyG6vR76ytF4i28exouvuv20SC5PX0X_Km9gSaMYZQfLLMgJ2bQYa7HGuHJlcs3W6iW8DzYv9mpQJdFCLjUVY-MiuUl2wfpZXRLIy7V8gwXGHJ1Vxo0aRu1rqD27PieMYLHA0KRHimwZ9XLmxxcgaZJcewAVU',
    aspect: 'aspect-[16/9]',
    bg: 'bg-surface-container-low',
  },
]

const filters = ['All', 'Culinary', 'Exploration', 'Community', 'Wellness']

export default function TailorYourStay() {
  const [activeFilter, setActiveFilter] = useState('All')
  const visible = catalog.filter(
    (item) => activeFilter === 'All' || item.filterKey === activeFilter,
  )

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <header className="relative w-full pt-20 pb-16 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="font-label uppercase tracking-widest text-primary font-bold text-sm mb-4 block">
              Personalized Luxury
            </span>
            <h1 className="font-headline text-6xl md:text-8xl tracking-tight leading-[0.9] mb-8">
              Adventures <br />
              <span className="italic text-on-surface-variant">on Your Terms</span>
            </h1>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-on-surface-variant text-lg leading-relaxed border-l-2 border-outline-variant pl-6">
              We believe in the luxury of choice. Our base rates provide the canvas of your stay—affordable, serene,
              and deeply comfortable. From there, you paint your own journey with our curated bespoke upgrades.
            </p>
          </div>
        </div>
      </header>

      {/* Feature Image */}
      <section className="w-full mb-32">
        <div className="h-[614px] w-full bg-surface-container-low overflow-hidden">
          <img
            src={featureImg}
            alt="Scenic view of a rocky riverbed winding through the Loitana hills"
            className="w-full h-full object-cover grayscale-[0.2]"
          />
        </div>
      </section>

      {/* The Bespoke Catalog */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="relative mb-20">
          <div className="absolute -top-10 -left-6 text-[8rem] font-headline text-primary/5 select-none leading-none z-0">
            Menu
          </div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="max-w-xl">
              <h2 className="font-headline text-5xl tracking-tight mb-2">The Bespoke Catalog</h2>
              <p className="text-on-surface-variant font-headline italic text-xl">
                Curated experiences to deepen your connection with the wild.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 border text-xs font-bold uppercase tracking-widest transition-colors font-label ${
                    activeFilter === filter
                      ? 'bg-primary text-on-primary border-primary'
                      : 'border-outline-variant hover:bg-primary hover:text-on-primary hover:border-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {visible.map((item) => (
            <div
              key={item.title}
              className={`gallery-item group relative ${item.bg} rounded-lg overflow-hidden ${
                item.dark ? '' : 'border border-outline-variant/30'
              } transition-all duration-500 hover:shadow-2xl mb-8 break-inside-avoid`}
            >
              <div className={`${item.aspect} overflow-hidden`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full h-full object-cover ${
                    item.dark ? 'opacity-60 group-hover:opacity-100' : 'grayscale-[0.3] group-hover:grayscale-0'
                  } group-hover:scale-105 transition-all duration-700`}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                      item.dark ? 'text-on-primary/60' : 'text-primary'
                    }`}
                  >
                    {item.category}
                  </span>
                  <span
                    className={`material-symbols-outlined ${
                      item.dark ? 'text-on-primary/40' : 'text-outline-variant'
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
                      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline font-label ${
                        item.dark ? 'text-on-primary' : 'text-primary'
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
      <section className="bg-surface-container-low py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 text-[12rem] font-headline text-primary/5 select-none leading-none">
              Stay
            </div>
            <h2 className="font-headline text-5xl mb-8 relative z-10">
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
                    <span className="w-8 h-[1px] bg-primary" />
                    <span className="font-label uppercase tracking-widest text-xs">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-surface-variant mt-12 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0uiuO29ADVTyAO1hMpDJ41okUHaHMyMDTirip4JSvhfuRoc0OUbINrB0dHJyT0O0W1hG0txNW2uWVkqFlC6q0UO8uMEQBZNVuqa5Yl9CfawN9uW-syNyNkXZ_7M9aAce4_dAsxJP1ix2Wsvle5DhBWHvYK_2QA3DAC6sziQWpEC4kxMT1Xhc5YWvbHlSw__LLA2-mvDimzTzLIuj0B5My5AEWcYmFEUpP2OKc4OEpZjWX3YA0pPZxNSsz2PxMzzOt9PyefDfuNZKDQ"
                alt="Interior view"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
            <div className="aspect-[3/4] bg-surface-variant rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0ugaFtsByZ8vnRqrh4tNx1A81F4pycbW04NCCylKVf5bNjD2IWJKEfAzabUPQv_LRyH7Lhbf7s4CMwH6fEG6S1jelyyT1zskiX8Y94QQ1fp8A-FIP72HxQWsTfnIMxNwyj1seRlnTHsxMOogjgwdT4RSqqzhuWhfavHx655iflUo7DPtte2kQ4rQmRy9VtTKQYghFlU2oPx_-cRUHKIf4dysLwKL3Hdr56cFx3I1BTkIW_m8FsGJc6cNU5oljsoxqYjkATe7OEt85w"
                alt="View from terrace"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center max-w-3xl mx-auto px-8">
        <h2 className="font-headline text-5xl mb-6">Ready to craft your journey?</h2>
        <p className="text-on-surface-variant mb-12 text-lg">
          Connect with our concierge team to build a custom itinerary that reflects your rhythm and curiosity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/inquiry"
            className="bg-primary text-on-primary px-10 py-4 font-headline text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Your Plan
          </Link>
          <button className="border border-primary text-primary px-10 py-4 font-headline text-xl font-bold rounded-lg hover:bg-primary/5 transition-colors">
            Download Rate Sheet
          </button>
        </div>
      </section>
    </main>
  )
}
