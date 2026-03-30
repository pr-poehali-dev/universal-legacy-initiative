import PageLayout from '@/components/PageLayout';

const photos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Wild_rose_Rosa_canina.jpg/440px-Wild_rose_Rosa_canina.jpg',
    caption: '"Гөлзар вә чәмәнзар" — чәчәкләр дөньясы',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Chamomile%40original_size.jpg/440px-Chamomile%40original_size.jpg',
    caption: 'Татарстан үсемлекләре',
  },
];

const plants = [
  { name: 'Итүт (паслён)', desc: 'Дарулык үсемлек, авырулардан дәвалауда кулланыла' },
  { name: 'Нефрит үләне', desc: 'Бавыр авырулары дәвасы буларак тасвирланган' },
  { name: 'Гөлмәкәр (ромашка)', desc: 'Халык медицинасында киң кулланылган' },
  { name: 'Зирә', desc: 'Аш-су пешерүдә һәм дәвалауда куллану ысуллары' },
  { name: 'Татлы тамыр (солодка)', desc: 'Тамак авырулары дәвасы буларак' },
];

export default function Biolog() {
  return (
    <PageLayout title="БИОЛОГ" subtitle="Үсемлекләр дөньясын өйрәнүче">

      {/* Фотогалерея */}
      <div className="reveal-section opacity-0 grid grid-cols-2 gap-4 mb-10">
        {photos.map((p, i) => (
          <div key={i} className="flex flex-col">
            <div className="overflow-hidden rounded-lg border border-border/60" style={{ aspectRatio: '4/3' }}>
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/0a2010/4ade80?text=Үсемлек'; }} />
            </div>
            <p className="photo-caption">{p.caption}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6 reveal-section opacity-0">
        <p className="text-foreground/80 leading-relaxed">
          Насыйриның <strong className="text-primary">"Гөлзар вә чәмәнзар"</strong> ("Чәчәклек һәм чирәмлек") хезмәте — татар тарихындагы беренче ботаника энциклопедиясе. Ул монда меңнән артык үсемлекне тасвирлаган.
        </p>

        <div className="fact-box p-5 rounded-r-lg">
          <p className="text-foreground/85 font-medium leading-relaxed">
            "Зирагать гыйльме" ("Игенчелек фәне") хезмәтендә Насыйри татар игенчеләренә гыйльми нигездә ярдәм итеп, аларга яңа агрономик белемнәр тәкъдим итте.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl text-foreground" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          Тасвирланган үсемлекләр
        </h2>
        <div className="gold-line max-w-28 mb-5" />

        <div className="grid gap-3">
          {plants.map((p, i) => (
            <div key={i} className="section-card p-4 flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: 'hsl(152 55% 40%)' }} />
              <div>
                <p className="text-foreground font-semibold text-sm">{p.name}</p>
                <p className="text-muted-foreground text-sm mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="quote-block p-5 rounded-r-lg mt-4">
          <p className="text-foreground/75 italic leading-relaxed">
            Насыйри үсемлекләрне халык теленнән табиб теленә тәрҗемә иткән — ул халык дарулык белеме белән фән арасындагы күперне салган.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
