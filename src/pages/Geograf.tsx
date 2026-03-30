import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Icon from '@/components/ui/icon';

const photos = [
  {
    src: 'https://cdn.poehali.dev/files/4aaf5462-417b-4df2-9405-65c4d99fa15e.jpg',
    caption: 'Казан губернасының географик картасы, 1873',
  },
  {
    src: 'https://cdn.poehali.dev/files/56e64cff-74f6-4098-a56f-072cae398cd9.png',
    caption: 'Мәчетләрнең кыйбла юнәлешен күрсәткән карта',
  },
  {
    src: 'https://cdn.poehali.dev/files/e99c29aa-f696-4e52-9c24-d90ddac5a948.jpeg',
    caption: 'Насыйри картографик хезмәтеннән',
  },
];

export default function Geograf() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <PageLayout title="ГЕОГРАФ" subtitle="Казан губернасының беренче картасы авторы">

      {/* Фотогалерея в один ряд */}
      <div className="reveal-section opacity-0 grid grid-cols-3 gap-3 mb-10">
        {photos.map((p, i) => (
          <div key={i} className="flex flex-col cursor-pointer" onClick={() => setLightbox(i)}>
            <div className="overflow-hidden rounded-lg border border-border/60 relative group" style={{ aspectRatio: '4/3' }}>
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all flex items-center justify-center">
                <Icon name="ZoomIn" size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
              </div>
            </div>
            <p className="photo-caption">{p.caption}</p>
          </div>
        ))}
      </div>

      {/* Лайтбокс */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-10 right-0 text-white/70 hover:text-white" onClick={() => setLightbox(null)}>
              <Icon name="X" size={28} />
            </button>
            <div className="flex items-center gap-3">
              <button className="text-white/70 hover:text-white flex-shrink-0"
                onClick={() => setLightbox((lightbox - 1 + photos.length) % photos.length)}>
                <Icon name="ChevronLeft" size={32} />
              </button>
              <div className="flex-1">
                <img src={photos[lightbox].src} alt={photos[lightbox].caption} className="w-full rounded-lg max-h-[75vh] object-contain" />
                <p className="text-white/60 text-sm text-center mt-3">{photos[lightbox].caption}</p>
              </div>
              <button className="text-white/70 hover:text-white flex-shrink-0"
                onClick={() => setLightbox((lightbox + 1) % photos.length)}>
                <Icon name="ChevronRight" size={32} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6 reveal-section opacity-0 text-center">
        <h2 className="text-xl md:text-2xl font-semibold leading-relaxed" style={{ color: 'hsl(200 70% 65%)' }}>
          Каюм Насыйри – Казан губернасының беренче картасы, Россия мәчетләрендә кыйбланы төгәл билгеләү картасы һ.б. дистәләгән карталар авторы
        </h2>

        <div className="gold-line max-w-40 mx-auto" />

        <p className="text-foreground/80 leading-relaxed">
          Каюм Насыйри – казанышлары Россия фәнни җәмәгатьчелеге тарафыннан танылган беренче татар этнографы һәм географы. Казан губернасының тәүге географик картасында ул мөселман мәчетләренең төп урыны – михрабның төгәл билгеләнешен ачыклауны максат итеп куйган.
        </p>

        <div className="fact-box p-5 rounded-r-lg text-left">
          <p className="text-foreground/85 font-medium leading-relaxed">
            Каюм Насыйри әлеге картасында Евразия кыйтгасының шактый өлеше өчен, шулай ук Көнбатышта Санкт-Петербургтан алып Көнчыгышта Көньяк Кытай диңгезе озынлыгына кадәр мәчетләрнең кыйблага дөрес юнәлешен күрсәтә.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
