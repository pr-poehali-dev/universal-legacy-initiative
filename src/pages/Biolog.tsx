import PageLayout from '@/components/PageLayout';

const photos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Wild_rose_Rosa_canina.jpg/440px-Wild_rose_Rosa_canina.jpg',
    caption: 'Дару үсемлекләре',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Chamomile%40original_size.jpg/440px-Chamomile%40original_size.jpg',
    caption: 'Татарстан үсемлекләре',
  },
];

export default function Biolog() {
  return (
    <PageLayout title="БИОЛОГ" subtitle="Үсемлекләр дөньясын өйрәнүче">

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

      <div className="space-y-6 reveal-section opacity-0 text-center">
        <p className="text-foreground/80 leading-relaxed">
          Каюм Насыйри дарулар кулланмаган. Ул гомер буе дару үләннәре җыйган, шулар белән үзе дә, башкаларны да дәвалаган. Үзенең тәҗрибәсен <strong className="text-primary">"Гөлзар вә чаманзар"</strong> ("Чәчәкләр һәм үләннәр") китабында тасвирлаган.
        </p>

        <div className="fact-box p-5 rounded-r-lg text-left">
          <p className="text-foreground/85 font-medium leading-relaxed">
            Бу китабында галим Россия территориясында үскән <strong className="text-primary">192 үсемлекнең</strong> үзлекләрен, <strong className="text-primary">155 авыруны</strong> һәм аларны үләннәр ярдәмендә дәвалау ысулларын җентекләп тасвирлаган.
          </p>
        </div>

        <div className="quote-block p-5 rounded-r-lg text-left">
          <p className="text-foreground/75 italic leading-relaxed">
            Насыйри үсемлекләрне халык теленнән табиб теленә тәрҗемә иткән — ул халык дарулык белеме белән фән арасындагы күперне салган.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
