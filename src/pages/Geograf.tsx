import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Icon from '@/components/ui/icon';

const photos = [
  {
    src: 'https://cdn.poehali.dev/files/56e64cff-74f6-4098-a56f-072cae398cd9.png',
    caption: 'Мәчетләрнең кыйбла юнәлешен күрсәткән карта',
  },
];

export default function Geograf() {
  const [open, setOpen] = useState(false);

  return (
    <PageLayout title="ГЕОГРАФ" subtitle="Казан губернасының беренче картасы авторы">

      <div
        className="reveal-section opacity-0 cursor-pointer overflow-hidden rounded-xl border border-border/50 relative group mb-10"
        style={{ aspectRatio: '16/9' }}
        onClick={() => setOpen(true)}
      >
        <img
          src={photos[0].src}
          alt={photos[0].caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all flex items-center justify-center">
          <Icon name="ZoomIn" size={32} className="opacity-0 group-hover:opacity-100 transition-opacity text-white drop-shadow" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 py-3 px-4 text-white/80 text-sm font-medium"
          style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
          {photos[0].caption}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center" onClick={() => setOpen(false)}>
          <button className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors" onClick={() => setOpen(false)}>
            <Icon name="X" size={32} />
          </button>
          <div className="px-6 w-full max-w-5xl" onClick={e => e.stopPropagation()}>
            <img src={photos[0].src} alt={photos[0].caption} className="max-h-[85vh] max-w-full mx-auto rounded-xl object-contain" />
            <p className="text-white/60 text-sm text-center mt-4">{photos[0].caption}</p>
          </div>
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
