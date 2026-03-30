import PageLayout from '@/components/PageLayout';

const photos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Old_tatar_dictionary.jpg/440px-Old_tatar_dictionary.jpg',
    caption: 'Иске татар сүзлеге',
    fallback: 'https://placehold.co/400x300/0a1a2a/60a5fa?text=Сүзлек',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Arabic_script_sample.svg/440px-Arabic_script_sample.svg.png',
    caption: 'Гарәп язуы — иске татар алфавиты нигезе',
    fallback: 'https://placehold.co/400x300/0a1a2a/60a5fa?text=Алфавит',
  },
];

const dictionaries = [
  {
    title: '"Лөгать китабы"',
    year: '1878',
    desc: 'Беренче татар-рус сүзлеге. 3000дән артык сүз үз урынын тапкан.',
    color: 'hsl(152 55% 40%)',
  },
  {
    title: '"Ләһҗәи татари"',
    year: '1895',
    desc: 'Камилрәк татарча аңлатмалы сүзлек. Татар лексикографиясенең иң мөһим чыганакларыннан.',
    color: 'hsl(200 70% 55%)',
  },
  {
    title: '"Кавагыйд китабет"',
    year: '1860',
    desc: 'Татар грамматикасының беренче фәнни тасвирламасы.',
    color: 'hsl(15 85% 62%)',
  },
  {
    title: '"Әнмүзәҗ"',
    year: '1873',
    desc: 'Татар теле фонетикасына багышланган хезмәт.',
    color: 'hsl(152 55% 40%)',
  },
];

export default function Suzleklar() {
  return (
    <PageLayout title="СҮЗЛЕКЛӘР ТӨЗҮЧЕ" subtitle="Татар лексикографиясенең атасы">

      {/* Фотогалерея */}
      <div className="reveal-section opacity-0 grid grid-cols-2 gap-4 mb-10">
        {photos.map((p, i) => (
          <div key={i} className="flex flex-col">
            <div className="overflow-hidden rounded-lg border border-border/60" style={{ aspectRatio: '4/3' }}>
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).src = p.fallback; }} />
            </div>
            <p className="photo-caption">{p.caption}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6 reveal-section opacity-0">
        <p className="text-foreground/80 leading-relaxed">
          Насыйри — татар лексикографиясенең нигез ташын салучы. Ул татар теленең сүз байлыгын беренче тапкыр фәнни яктан тикшерде, тәртипкә салды, язма рәвештә теркеде.
        </p>

        <h2 className="text-2xl md:text-3xl text-foreground" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          Төп хезмәтләр
        </h2>
        <div className="gold-line max-w-24 mb-6" />

        <div className="grid gap-4">
          {dictionaries.map((d, i) => (
            <div key={i} className="section-card p-5" style={{ borderTopColor: d.color }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-foreground font-bold text-base" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                    {d.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mt-1 leading-relaxed">{d.desc}</p>
                </div>
                <span className="text-xs font-bold flex-shrink-0 px-2 py-1 rounded" style={{ background: `${d.color}20`, color: d.color }}>
                  {d.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="quote-block p-5 rounded-r-lg mt-4">
          <p className="text-foreground/75 italic leading-relaxed">
            Насыйриның сүзлекләре аркасында татар теле — тарихи-мәдәни документлар тупланган фәнни хәзинәгә әйләнде.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
