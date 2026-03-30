import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Icon from '@/components/ui/icon';

const photos = [
  {
    src: 'https://cdn.poehali.dev/files/4bfa03a4-20be-4ea4-9904-cdafd91e4576.png',
    caption: 'Каюм Насыйри',
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
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <PageLayout title="КАЮМ НАСЫЙРИНЫҢ ИСЕМЕ МӘҢГЕЛЕК" subtitle="Бөек мәгърифәтченең мирасы">

      <div className="space-y-8 reveal-section opacity-0">

        <div className="text-center py-4">
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
              <div
                className="overflow-hidden rounded-lg border border-border/60 relative group cursor-pointer"
                style={{ aspectRatio: '3/4' }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <Icon name="ZoomIn" size={22} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                </div>
              </div>
              <p className="text-center text-muted-foreground text-xs leading-snug">{p.caption}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Лайтбокс */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <Icon name="X" size={32} />
            </button>
            <div className="flex items-center gap-3">
              <button
                className="text-white/70 hover:text-white flex-shrink-0 transition-colors"
                onClick={() => setLightbox((lightbox - 1 + photos.length) % photos.length)}
              >
                <Icon name="ChevronLeft" size={40} />
              </button>
              <div className="flex-1 flex flex-col items-center">
                <img
                  src={photos[lightbox].src}
                  alt={photos[lightbox].caption}
                  className="w-full rounded-xl max-h-[80vh] object-contain"
                />
                <p className="text-white/70 text-sm text-center mt-3">{photos[lightbox].caption}</p>
                <p className="text-white/30 text-xs mt-1">{lightbox + 1} / {photos.length}</p>
              </div>
              <button
                className="text-white/70 hover:text-white flex-shrink-0 transition-colors"
                onClick={() => setLightbox((lightbox + 1) % photos.length)}
              >
                <Icon name="ChevronRight" size={40} />
              </button>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
