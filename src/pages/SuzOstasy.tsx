import PageLayout from '@/components/PageLayout';

const photos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kayum_Nasyri.jpg/440px-Kayum_Nasyri.jpg',
    caption: 'Каюм Насыйри, галим-мәгърифәтче',
    fallback: 'https://cdn.poehali.dev/files/4bfa03a4-20be-4ea4-9904-cdafd91e4576.png',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kazan_kremlin_2010.jpg/440px-Kazan_kremlin_2010.jpg',
    caption: 'Казан кирмәне — тарихи мирас',
    fallback: 'https://placehold.co/400x300/0a1a2a/60a5fa?text=Казан',
  },
];

const quotes = [
  {
    text: 'Белемсез кеше — яктысыз лампа кебек.',
    note: 'Насыйри афоризмы',
  },
  {
    text: 'Тел — халыкның рухы, мирасы, килечәге.',
    note: 'Тел турында',
  },
  {
    text: 'Балаларга белем бир — илгә кирәкле кеше яса.',
    note: 'Педагогика турында',
  },
  {
    text: 'Укымаган кешенең күзе ачык булса да, ул сукыр кебек.',
    note: 'Мәгариф турында',
  },
  {
    text: 'Хезмәт кылган кеше генә үзенең тормышын камилләштерә ала.',
    note: 'Хезмәт турында',
  },
  {
    text: 'Халыкны сөю — халык өчен эшләүдән башлана.',
    note: 'Ватанпәрварлык турында',
  },
];

export default function SuzOstasy() {
  return (
    <PageLayout title="СУЗ ОСТАСЫ" subtitle="Каюм Насыйри афоризмнары һәм фикерләре">

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

      <div className="space-y-5 reveal-section opacity-0">
        <p className="text-foreground/80 leading-relaxed mb-6">
          Каюм Насыйри — сүзнең асыл кодрәтен белгән остаз. Аның афоризмнары, фикерләре гасырлар аша килеп безгә ирешкән хикмәт хәзинәсе.
        </p>

        <div className="grid gap-4">
          {quotes.map((q, i) => (
            <div key={i} className="quote-block p-5 rounded-r-lg">
              <p className="text-foreground text-base md:text-lg italic font-medium leading-relaxed mb-2">
                «{q.text}»
              </p>
              <p className="text-muted-foreground text-xs tracking-wider uppercase">{q.note}</p>
            </div>
          ))}
        </div>

        <div className="fact-box p-5 rounded-r-lg mt-6">
          <p className="text-foreground/85 font-medium leading-relaxed">
            <strong className="text-primary">"Фәвакиһелҗөләса фил әдәбият"</strong> — Насыйриның иң мәшһүр хезмәтләреннән берсе. Бу татар халык мәкальләре, мәзәкләре, хикәятләрен туплаган беренче татар энциклопедиясе.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
