import PageLayout from '@/components/PageLayout';

const photos = [
  {
    src: 'https://cdn.poehali.dev/files/4bfa03a4-20be-4ea4-9904-cdafd91e4576.png',
    caption: '',
  },
  {
    src: 'https://cdn.poehali.dev/files/2b61e9ca-8b25-46f3-be9d-8c3b14e2064a.jpg',
    caption: 'Бакый Урманче ясаган К. Насыйри скульптура образы',
  },
  {
    src: 'https://cdn.poehali.dev/files/4b6d77a3-3f6b-4b91-9963-f29cf8b70508.png',
    caption: 'Каюм Насыйри музеендагы скульптура',
  },
  {
    src: 'https://cdn.poehali.dev/files/f3a127b5-9657-4f41-9562-e37acbc31912.jpg',
    caption: 'Каюм Насыйри яшәгән йорт',
  },
];

export default function Mengelek() {
  return (
    <PageLayout title="КАЮМ НАСЫЙРИ ИСЕМЕ МӘҢГЕЛЕК" subtitle="Бөек мәгърифәтченең мирасы">

      <div className="space-y-8 reveal-section opacity-0">

        <div className="text-center py-6">
          <p className="text-foreground font-bold text-lg md:text-xl leading-relaxed"
            style={{
              background: 'linear-gradient(135deg, hsl(15 85% 62%), hsl(200 70% 55%), hsl(152 55% 45%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Каюм Насыйри – энциклопедист галим. Аның эшчәнлеге – милләткә фидакарьләрчә хезмәт итүнең бөек үрнәге.
          </p>
        </div>

        <div className="gold-line" />

        <div className="grid grid-cols-2 gap-4">
          {photos.map((p, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="overflow-hidden rounded-lg border border-border/60" style={{ aspectRatio: '3/4' }}>
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {p.caption && (
                <p className="text-center text-muted-foreground text-xs leading-snug">{p.caption}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
