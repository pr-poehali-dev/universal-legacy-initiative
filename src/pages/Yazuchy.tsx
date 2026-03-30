import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Icon from '@/components/ui/icon';

const photos = [
  {
    src: 'https://cdn.poehali.dev/files/4384cd9d-8a49-4fe7-b027-08ff484b9473.jpg',
    caption: '"Әбүгалисина кыйссасы", 1898',
  },
  {
    src: 'https://cdn.poehali.dev/files/20c345f8-a82b-4edb-92fc-28a6681a9595.jpg',
    caption: '"Әкиятләр" — К. Насыйри, 1954',
  },
  {
    src: 'https://cdn.poehali.dev/files/4aaf5462-417b-4df2-9405-65c4d99fa15e.jpg',
    caption: '"Китаб-әт-тәрбия" — Тәрбия китабы',
  },
];

export default function Yazuchy() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <PageLayout title="ЯЗУЧЫ" subtitle="Каюм Насыйри — татар әдәбияты классигы">

      {/* Фотогалерея в один ряд */}
      <div className="reveal-section opacity-0 grid grid-cols-3 gap-3 mb-10">
        {photos.map((p, i) => (
          <div key={i} className="flex flex-col cursor-pointer" onClick={() => setLightbox(i)}>
            <div className="overflow-hidden rounded-lg border border-border/60 relative group" style={{ aspectRatio: '3/4' }}>
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
          <div className="relative max-w-xl w-full" onClick={e => e.stopPropagation()}>
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

      <div className="space-y-5 reveal-section opacity-0">
        <p className="section-body">
          Каюм Насыйриның татар әдәбиятына керткән өлеше шактый зур. Аның иҗаты татар халкының рухи мирасының аерылгысыз бер өлешенә әйләнде.
        </p>

        <div className="fact-box p-5 rounded-r-lg">
          <p className="section-body">
            Әдип — "Әбүгалисина кыйссасы", "Кырык вәзир", "Әхлак рисаләсе", "Тәрбич китабы" кебек мәшһүр әсәрләрнең авторы.
          </p>
        </div>

        <p className="section-body">
          Каюм Насыйри үз әсәрләрендә гореф-гадәтләр, традицияләр, әхлак, иман, гаилә мөнәсәбәтләре, бала тәрбиясе мәсьәләләрен яктырта. Уңай әхлакый сыйфатларны галим укучы өчен үрнәк итеп куя, ә кешенең рухи үсешенә комачаулый торган сыйфатларны тәнкыйтьләп фаш итә.
        </p>

        <p className="section-body">
          Татар укучысына борыңгы Шәрык галиме Ибн Синаны таныштырган беренче татар прозасының үрнәге — "Әбүгалисина кыйссасы". Насыйри бу хезмәтендә нафис стиль, тирән философик эчтәлек белән укучыны мәгърифәт юлына чакыра. Борыңгы Шәрык хикәяләренең татарча яңартылган тупланмасы "Кырык вәзир"дә Насыйри халыкка аңлаешлы тел белән дөнья әдәбиятының иң матур үрнәкләрен тәкъдим итте.
        </p>

        <div className="quote-block p-5 rounded-r-lg">
          <p className="section-body italic">
            Әсәрләрнең язылганнынан соң ике гасырга якын вакыт узуына карамастан, аларның эстетик әһәмияте әле дә үз кыйммәтен югалтмый.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}