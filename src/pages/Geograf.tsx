import PageLayout from '@/components/PageLayout';

const photos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kazan_map_1895.jpg/440px-Kazan_map_1895.jpg',
    caption: 'Казан картасы, XIX гасыр',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Volga_river_map.jpg/440px-Volga_river_map.jpg',
    caption: 'Идел елгасы картасы',
  },
];

const geoFacts = [
  'Россиянең төп географик объектларын татарчага тәрҗемә иткән',
  'Казан губернасының табигый байлыклары турында язма калдырган',
  'Татар балалары өчен беренче география дәреслеген иҗат иткән',
  'Дөнья илләре исемлекләрен татар теленә тәрҗемә иткән',
  'Идел буе халыкларының яшәү рәвешен тасвирлаган',
];

export default function Geograf() {
  return (
    <PageLayout title="ГЕОГРАФ" subtitle="Картаны сүз белән ясаучы">

      {/* Фотогалерея */}
      <div className="reveal-section opacity-0 grid grid-cols-2 gap-4 mb-10">
        {photos.map((p, i) => (
          <div key={i} className="flex flex-col">
            <div className="overflow-hidden rounded-lg border border-border/60" style={{ aspectRatio: '4/3' }}>
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/1a2a1a/4ade80?text=Карта'; }} />
            </div>
            <p className="photo-caption">{p.caption}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6 reveal-section opacity-0">
        <p className="text-foreground/80 leading-relaxed">
          Каюм Насыйри — татар балаларына дөньяны ачып биргән географ. Ул беренче татар географиясе дәреслеген иҗат итеп, яшь буынга туган илнең табигатен, шәһәрләрен, елгаларын аңлатты.
        </p>

        <div className="fact-box p-5 rounded-r-lg">
          <p className="text-foreground/85 font-medium leading-relaxed">
            Насыйри дөнья картасын татарча аңлатырга тырышты. Ул география терминнарын татар теленә тәрҗемә итеп, фәнни телнең нигезен салды.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl text-foreground mt-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          Географик хезмәтләре
        </h2>
        <div className="gold-line max-w-28 mb-5" />

        <ul className="space-y-3">
          {geoFacts.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground/80 text-sm md:text-base">
              <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'hsl(200 70% 55%)' }} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="quote-block p-5 rounded-r-lg mt-6">
          <p className="text-foreground/75 italic leading-relaxed">
            Насыйри үзенең география дәреслекләрендә татар балаларына гына түгел, ә бөтен Идел буе халкына яңа дөнья ачты.
          </p>
        </div>

        <p className="text-foreground/80 leading-relaxed">
          Аның хезмәтләре аркасында татар балалары беренче тапкыр дөнья океаннары, материклар, тауларның исемнәрен туган теллдә укый алды. Бу — мәгариф тарихында аеруча мөһим адым иде.
        </p>
      </div>
    </PageLayout>
  );
}
