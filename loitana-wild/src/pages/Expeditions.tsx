import { Link } from 'react-router-dom'

const expeditions = [
  {
    icon: 'explore',
    title: 'Predator Tracking',
    desc: 'Follow the apex predators of the Mara on foot and by vehicle. Lions, leopards, and cheetahs in their undisturbed territory.',
    tag: 'Full Day',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uigqxrCtSp2lUg0YvAYH6_V_Ei8kfLkyhRwqKffOjnG1EoN0kwyREbp10qTML7inZrYZ2UXwEFGMGRAtx_A8llJ5u5aWyL0CqInl-mM0rwHWeL-20cHzPLk_p7xyZxg8N1gGpe4Elrlmjbdn4FO7M3ksxt2lq5rcu8MPWPcVmfJczzPXGCXbzyQrNDsWULNwdq7MGtU_gTfrh-IVsQPhw7fmlmLICB2IfS8cMor4KvD9OLij8q92PNY45UIAk3W8eqGKP9F5Mc6MQ',
  },
  {
    icon: 'flight_takeoff',
    title: 'Helicopter Rift Survey',
    desc: 'A private aerial survey of the Great Rift Valley escarpment. Witness the scale of the landscape from 2,000 feet.',
    tag: 'Half Day',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uiAlP0owS4wkwdVF0vstokwJ-0Mq3gxpUm_X6ETWbgT-lsBWEZereUP561w1Mgizz6CVcuuhJTtZlat0UXyCCfqG_VUEtoz976RLCF3pX61m6ts986Tsn0QGRNeWxFu-KHPPIWJ27fw9wjRAmibXBXVoOkr-__-mBQRtXKv1359p2bo7u3ifeFQkkYUct7qo5d3--8S7gCfBhqUFVqBIUtXJW5nj-nL1CNd6lKN_957pyWPGCC7wk_dOM_GMqqqPYBvLuEsrmL6fA',
  },
  {
    icon: 'bedtime',
    title: 'Night Drive & Star Walk',
    desc: 'After dark, the conservancy transforms. Track nocturnal predators, then lay beneath an untouched Kenyan sky.',
    tag: 'Evening',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0ujtXLVr4z8trnv0G46cb_BfD8TrLiaL9doVMnUX4_ZaRq1db-enTzJyTC6iTi-c9BfUZ0tnEbOAFu3S5EI1zn6DxMOU_JrQVoGRuV1CxukqJ2z-XKof-OkylQMHPwqt75EG7xR_q1hie8y9vMBMV-pc-oQcLItQIVuGEtdoU8QQhCtvqPXjKths90Z4J0sFbntlX8QA-p22La5-HSdVKito9FyKrov-VpMcTRt0HtJBXk-S9lCgldebbIJbbCVYgVcuow0QvosevA',
  },
  {
    icon: 'park',
    title: 'Bush Walk & Botanical Trail',
    desc: 'Cover terrain no vehicle can reach. A master tracker guides you through the micro-ecosystems of the Loitana ridge.',
    tag: 'Morning',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uhrVEufMdFgxJ6OXrNjuYxiPx5WLwMNfxCorS5a03uHqexeFVOune9lZw8hjk2wxFuyh2NrWXrLJnkjQSJmMuMBZOs3NABJnFVXgtkthOGaxQvKqEoH9s5NPZz6MG72pft19qPrzpqX53d6u25vyI_-5kjnkp-z5F6G8tWBpbHjbqWny6utsSxsWSWmKAm1adyOn0GQrXQ4LBQFbIgEhCedBgXKdsgjc0TwLD2j9tiJgXYNuRH9yNWYc5K2nu5FUSzydlmqFa0D6g',
  },
  {
    icon: 'groups',
    title: 'Maasai Community Walk',
    desc: 'Venture into the Loitana community. Learn fire-making, oral history, and the pastoral rhythms of the Mara.',
    tag: 'Full Day',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uiuO29ADVTyAO1hMpDJ41okUHaHMyMDTirip4JSvhfuRoc0OUbINrB0dHJyT0O0W1hG0txNW2uWVkqFlC6q0UO8uMEQBZNVuqa5Yl9CfawN9uW-syNyNkXZ_7M9aAce4_dAsxJP1ix2Wsvle5DhBWHvYK_2QA3DAC6sziQWpEC4kxMT1Xhc5YWvbHlSw__LLA2-mvDimzTzLIuj0B5My5AEWcYmFEUpP2OKc4OEpZjWX3YA0pPZxNSsz2PxMzzOt9PyefDfuNZKDQ',
  },
  {
    icon: 'photo_camera',
    title: 'Photography Safari',
    desc: 'A dedicated photographic vehicle and guide, timed to the golden hours. Prime positions, no other vehicles, no rush.',
    tag: 'Sunrise / Sunset',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uirHVL7yAIlyXdUlAHVJj0a3mOuzY73u5GeQThZuCYd8_CiFmKw-9nel3L8lCEpr_ZW8zvEgP6s84erGeVAByEQKRssrvni6HxNubHQc5Y02qSUnh7o_A3Mi1CIZoFE3LjxneFVdHVL95fJoIpm-TQc26Dw6AjSEpa7ZPKA-c3YYztkrbhBmknSTGc0shekyWuxRV3gMSuGt5IC7mkSSfpj8EbeKMUE_Yg1FATGaeEfTW-LNkPr1AFrJo3pbaSJXR36yTUSOtov2g',
  },
]

export default function Expeditions() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida/ADBb0uigqxrCtSp2lUg0YvAYH6_V_Ei8kfLkyhRwqKffOjnG1EoN0kwyREbp10qTML7inZrYZ2UXwEFGMGRAtx_A8llJ5u5aWyL0CqInl-mM0rwHWeL-20cHzPLk_p7xyZxg8N1gGpe4Elrlmjbdn4FO7M3ksxt2lq5rcu8MPWPcVmfJczzPXGCXbzyQrNDsWULNwdq7MGtU_gTfrh-IVsQPhw7fmlmLICB2IfS8cMor4KvD9OLij8q92PNY45UIAk3W8eqGKP9F5Mc6MQ')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 px-8 md:px-20 pb-20 max-w-[1920px] w-full mx-auto">
          <span className="font-label uppercase tracking-[0.4em] text-[10px] text-white/70 mb-6 block font-bold">
            Private Expeditions
          </span>
          <h1 className="font-headline text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter mb-6">
            The Wild <br />
            <span className="italic">on Your Terms</span>
          </h1>
          <p className="text-white/80 text-xl max-w-xl font-light leading-relaxed">
            Every expedition at Loitana Wild is private by design. No shared vehicles, no fixed schedules—just you, an
            expert guide, and 4,000 hectares of untouched Africa.
          </p>
        </div>
      </section>

      {/* Expedition Grid */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-headline text-5xl mb-4 tracking-tight">Choose Your Adventure</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Select from our curated menu, or work with our team to design something entirely your own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expeditions.map((exp) => (
              <div
                key={exp.title}
                className="group bg-surface-container-lowest overflow-hidden rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-500 hover:shadow-xl"
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

      {/* Philosophy Strip */}
      <section className="bg-primary py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl text-on-primary mb-6 leading-tight">
              Every expedition is exclusive. <br />
              <span className="italic">No exceptions.</span>
            </h2>
            <p className="text-on-primary/80 text-lg leading-relaxed">
              We operate a strict one-party policy across the entire conservancy. When you venture out, every track you
              follow belongs only to you.
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
