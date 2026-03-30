import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Icon from '@/components/ui/icon';

const photos = [
  { src: 'https://cdn.poehali.dev/files/56e64cff-74f6-4098-a56f-072cae398cd9.png', caption: '' },
  { src: 'https://cdn.poehali.dev/files/a66903fc-b12a-48a2-87e9-06347a8de615.jpeg', caption: '' },
];

export default function Geograf() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <PageLayout title="ГЕОГРАФ" subtitle="Казан губернасының беренче картасы авторы">

      <div className="reveal-section opacity-0 grid grid-cols-2 gap-4 mb-10">
        {photos.map((p, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden rounded-xl border border-border/50 relative group"
            onClick={() => setLightbox(i)}
          >
            <img
              src={p.src}
              alt=""
              className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
              <Icon name="ZoomIn" size={28} className="opacity-0 group-hover:opacity-100 transition-opacity text-white drop-shadow" />
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors" onClick={() => setLightbox(null)}>
            <Icon name="X" size={32} />
          </button>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/40 text-sm">{lightbox + 1} / {photos.length}</div>
          <button className="absolute left-3 md:left-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}>
            <Icon name="ChevronLeft" size={44} />
          </button>
          <div className="px-16 md:px-24 w-full max-w-5xl" onClick={e => e.stopPropagation()}>
            <img src={photos[lightbox].src} alt="" className="max-h-[85vh] max-w-full mx-auto rounded-xl object-contain" />
          </div>
          <button className="absolute right-3 md:right-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}>
            <Icon name="ChevronRight" size={44} />
          </button>
        </div>
      )}

      <div className="space-y-5 reveal-section opacity-0 text-center">
        <h2 className="text-xl md:text-2xl font-bold leading-relaxed" style={{ color: 'hsl(200 70% 65%)' }}>
          Каюм Насыйри – Казан губернасының беренче картасы, Россия мәчетләрендә кыйбланы төгәл билгеләү картасы һ.б. дистәләгән карталар авторы
        </h2>
        <div className="gold-line max-w-40 mx-auto" />
        <p className="section-body">
          Каюм Насыйри – казанышлары Россия фәнни җәмәгатьчелеге тарафыннан танылган беренче татар этнографы һәм географы. Казан губернасының тәүге географик картасында ул мөселман мәчетләренең төп урыны – михрабның төгәл билгеләнешен ачыклауны максат итеп куйган.
        </p>
        <div className="fact-box p-5 rounded-r-lg text-left">
          <p className="section-body">
            Каюм Насыйри әлеге картасында Евразия кыйтгасының шактый өлеше өчен, шулай ук Көнбатышта Санкт-Петербургтан алып Көнчыгышта Көньяк Кытай диңгезе озынлыгына кадәр мәчетләрнең кыйблага дөрес юнәлешен күрсәтә.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
