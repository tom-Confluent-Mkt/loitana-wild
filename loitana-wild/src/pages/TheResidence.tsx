import { Link } from 'react-router-dom'

const imgs = {
  hero: 'https://lh3.googleusercontent.com/aida/ADBb0ujrRQkF7Y9McKI7aTr6lsKw4N_CrooM5IxqsIs03krLzI1u0yGVkn_EJG8A13xRaolwIHXssJNqwbAU_3-MGBz1vOfuB3mwL2_8XDomfeN0EwJ71UjPX-SHEaCfeYD8xBmVkCN4TpighIsFE5PDbPOlEVBmly4Rxc7VtFQW05nTdmbocv0diQdkEixdSfVloWvr1dLY0QtqyjkcuH3x9zvJirBhHt6qTSd0g4HWxwdo-L8uEFF5whsY1fxYz5WEfgb-dn8bfhhTnQ',
  stone: 'https://lh3.googleusercontent.com/aida/ADBb0uiuO29ADVTyAO1hMpDJ41okUHaHMyMDTirip4JSvhfuRoc0OUbINrB0dHJyT0O0W1hG0txNW2uWVkqFlC6q0UO8uMEQBZNVuqa5Yl9CfawN9uW-syNyNkXZ_7M9aAce4_dAsxJP1ix2Wsvle5DhBWHvYK_2QA3DAC6sziQWpEC4kxMT1Xhc5YWvbHlSw__LLA2-mvDimzTzLIuj0B5My5AEWcYmFEUpP2OKc4OEpZjWX3YA0pPZxNSsz2PxMzzOt9PyefDfuNZKDQ',
  detail: 'https://lh3.googleusercontent.com/aida/ADBb0ujFlqVecv-glzOx3yi7O2VHtEttnKUn837vjofaF8Y0pehh2C_yUNJ9eZr50smkcLW3vui3SVLctw78K8EPvaoUeLTFWGG-2EmOrJU4COXN6zRNr7JXAhWjhacPAYY9Uo3yXxbhMYS1rtuTLp_Kh8nLTNAnWvaAqsRCH7K36zPErZNbx_OrzojZm8bkzNDZxrtwOG6XekcVqQVQTvSU6V0QD2QtDeDaxJMYsdu9p94TSKJiJiuc5MT-oaSthKA3yoReV94OLt5PdQ',
  trekker: 'https://lh3.googleusercontent.com/aida/ADBb0uhrVEufMdFgxJ6OXrNjuYxiPx5WLwMNfxCorS5a03uHqexeFVOune9lZw8hjk2wxFuyh2NrWXrLJnkjQSJmMuMBZOs3NABJnFVXgtkthOGaxQvKqEoH9s5NPZz6MG72pft19qPrzpqX53d6u25vyI_-5kjnkp-z5F6G8tWBpbHjbqWny6utsSxsWSWmKAm1adyOn0GQrXQ4LBQFbIgEhCedBgXKdsgjc0TwLD2j9tiJgXYNuRH9yNWYc5K2nu5FUSzydlmqFa0D6g',
  river: 'https://lh3.googleusercontent.com/aida/ADBb0uirHVL7yAIlyXdUlAHVJj0a3mOuzY73u5GeQThZuCYd8_CiFmKw-9nel3L8lCEpr_ZW8zvEgP6s84erGeVAByEQKRssrvni6HxNubHQc5Y02qSUnh7o_A3Mi1CIZoFE3LjxneFVdHVL95fJoIpm-TQc26Dw6AjSEpa7ZPKA-c3YYztkrbhBmknSTGc0shekyWuxRV3gMSuGt5IC7mkSSfpj8EbeKMUE_Yg1FATGaeEfTW-LNkPr1AFrJo3pbaSJXR36yTUSOtov2g',
  sunset: 'https://lh3.googleusercontent.com/aida/ADBb0uigqxrCtSp2lUg0YvAYH6_V_Ei8kfLkyhRwqKffOjnG1EoN0kwyREbp10qTML7inZrYZ2UXwEFGMGRAtx_A8llJ5u5aWyL0CqInl-mM0rwHWeL-20cHzPLk_p7xyZxg8N1gGpe4Elrlmjbdn4FO7M3ksxt2lq5rcu8MPWPcVmfJczzPXGCXbzyQrNDsWULNwdq7MGtU_gTfrh-IVsQPhw7fmlmLICB2IfS8cMor4KvD9OLij8q92PNY45UIAk3W8eqGKP9F5Mc6MQ',
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
  return (
    <main>
      {/* Hero — Split Editorial */}
      <section className="relative min-h-[90vh] bg-background flex items-center overflow-hidden pt-12">
        <div className="max-w-[1720px] mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="md:col-span-6 lg:col-span-5 relative z-10 py-12">
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
          <div className="md:col-span-6 lg:col-span-7 relative">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/3] w-full overflow-hidden rounded-xl editorial-shadow">
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

      {/* Gallery Grid — Asymmetric Bento */}
      <section className="py-32 px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[1200px]">
          <div className="md:col-span-8 overflow-hidden rounded-xl">
            <img
              src={imgs.stone}
              alt="Stone facade and terrace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out rounded-xl"
            />
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-8">
            <div className="overflow-hidden rounded-xl">
              <img
                src={imgs.detail}
                alt="Cottage details"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out rounded-xl"
              />
            </div>
            <div className="bg-surface-container-low p-12 flex flex-col justify-center rounded-xl">
              <h3 className="font-headline text-4xl mb-6 italic">Uninterrupted Horizon</h3>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                Every room is designed to vanish into the landscape, with floor-to-ceiling glass that frames the
                migration paths below.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 overflow-hidden rounded-xl">
            <img src={imgs.trekker} alt="House environment detail" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="md:col-span-8 overflow-hidden rounded-xl">
            <img src={imgs.hero} alt="Wide view of the house on the rock" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Total Privacy */}
      <section className="bg-surface-container-low py-40 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative editorial-shadow overflow-hidden rounded-xl">
              <img
                src={imgs.river}
                alt="Wide river view of the conservancy"
                className="w-full aspect-[4/5] object-cover rounded-xl"
              />
              <div className="absolute bottom-8 left-8 bg-surface/95 backdrop-blur-md p-8 max-w-xs border border-outline-variant/20 rounded-xl">
                <span className="font-headline text-5xl block font-bold text-primary mb-2">4,000</span>
                <span className="font-label uppercase text-[10px] tracking-[0.3em] font-bold">Hectares of Wilderness</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="font-headline text-6xl md:text-7xl mb-10 leading-[0.95] tracking-tighter">
              Total Privacy. <br /> No Compromise.
            </h2>
            <p className="font-body text-xl text-on-surface-variant mb-12 leading-relaxed italic">
              Loitana Wild is not a hotel; it is your private estate. When you book the House on the Rock, you are the
              only guests on the entire 4,000-hectare conservancy.
            </p>
            <div className="space-y-10">
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
              ].map((item) => (
                <div key={item.icon} className="flex gap-8 items-start">
                  <div className="bg-primary/10 text-primary w-14 h-14 flex items-center justify-center shrink-0 rounded-xl">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-2xl mb-2 font-semibold">{item.title}</h4>
                    <p className="text-base text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Included In Your Stay */}
      <section className="py-40 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="font-headline text-6xl mb-6 tracking-tighter italic">Included in Your Stay</h2>
            <div className="h-0.5 w-32 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((f) => (
              <div
                key={f.icon}
                className="p-12 border border-outline-variant/30 hover:border-primary/40 transition-all group bg-surface-container-lowest rounded-xl"
              >
                <span className="material-symbols-outlined text-5xl text-primary/30 group-hover:text-primary transition-colors mb-10 block">
                  {f.icon}
                </span>
                <h3 className="font-headline text-3xl mb-5 italic">{f.title}</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">{f.desc}</p>
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
      <section className="relative py-48 px-8 flex justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={imgs.sunset} alt="Sunset trekking in the savannah" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-headline text-7xl md:text-8xl text-white mb-10 leading-[0.9] tracking-tighter">
            Secure Your Sanctuary
          </h2>
          <p className="font-body text-2xl text-white/90 mb-14 italic">
            Experience the true soul of Kenya in absolute solitude. Limited bookings available per season.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/inquiry"
              className="bg-white text-primary px-12 py-5 rounded-xl font-label font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-primary-fixed transition-colors shadow-xl"
            >
              Check Availability
            </Link>
            <button className="border border-white/40 backdrop-blur-md text-white px-12 py-5 rounded-xl font-label font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-white/10 transition-colors">
              View Floorplans
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
