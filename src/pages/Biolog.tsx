import PageLayout from '@/components/PageLayout';

const photos = [
  {
    src: 'https://cdn.poehali.dev/files/a1b3dac3-2d74-4d20-924d-8e6403b5fa99.png',
    caption: '',
  },
  {
    src: 'https://cdn.poehali.dev/files/cb96834a-44b7-4eae-861d-64144948c65a.jpg',
    caption: '',
  },
];

export default function Biolog() {
  return (
    <PageLayout title="БИОЛОГ" subtitle="Үсемлекләр дөньясын өйрәнүче">

      <div className="reveal-section opacity-0 grid grid-cols-2 gap-4 mb-10">
        {photos.map((p, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-border/60" style={{ aspectRatio: '4/3' }}>
            <img src={p.src} alt="Биолог" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/0a2010/4ade80?text=Үсемлек'; }} />
          </div>
        ))}
      </div>

      <div className="space-y-6 reveal-section opacity-0 text-center">
        <p className="text-foreground/80 leading-relaxed">
          Каюм Насыйри дарулар кулланмаган. Ул гомер буе дару үләннәре җыйган, шулар белән үзе дә, башкаларны да дәвалаган. Үзенең тәҗрибәсен "Гөлзар вә чаманзар" ("Чәчәкләр һәм үләннәр") китабында тасвирлаган.
        </p>

        <div className="fact-box p-5 rounded-r-lg text-left">
          <p className="text-foreground/85 font-medium leading-relaxed">
            Бу китабында галим Россия территориясында үскән 192 үсемлекнең үзлекләрен, 155 авыруны һәм аларны үләннәр ярдәмендә дәвалау ысулларын җентекләп тасвирлаган.
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
