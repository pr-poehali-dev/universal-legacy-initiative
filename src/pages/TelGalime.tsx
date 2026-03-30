import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Icon from '@/components/ui/icon';

const photos = [
  { src: 'https://cdn.poehali.dev/files/e735455e-6874-4c2d-bfa2-0957aef5610f.jpeg' },
  { src: 'https://cdn.poehali.dev/files/04e43680-1d61-4876-aa41-8616e1d136ce.png' },
  { src: 'https://cdn.poehali.dev/files/e7a75894-8763-4c07-9e15-a8a5e4c9d65b.jpeg' },
  { src: 'https://cdn.poehali.dev/files/cee76dbe-a4d5-461c-a563-3883742edff0.jpeg' },
];

export default function TelGalime() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <PageLayout title="ТЕЛ ГАЛИМЕ" subtitle="">

      <div className="reveal-section opacity-0 grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
        {photos.map((p, i) => (
          <div key={i} className="cursor-pointer" onClick={() => setLightbox(i)}>
            <div className="overflow-hidden rounded-lg border border-border/60 relative group" style={{ aspectRatio: '3/4' }}>
              <img src={p.src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all flex items-center justify-center">
                <Icon name="ZoomIn" size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-10 right-0 text-white/70 hover:text-white" onClick={() => setLightbox(null)}>
              <Icon name="X" size={28} />
            </button>
            <div className="flex items-center gap-3">
              <button className="text-white/70 hover:text-white flex-shrink-0"
                onClick={() => setLightbox((lightbox - 1 + photos.length) % photos.length)}>
                <Icon name="ChevronLeft" size={32} />
              </button>
              <div className="flex-1">
                <img src={photos[lightbox].src} alt="" className="w-full rounded-lg max-h-[75vh] object-contain" />
              </div>
              <button className="text-white/70 hover:text-white flex-shrink-0"
                onClick={() => setLightbox((lightbox + 1) % photos.length)}>
                <Icon name="ChevronRight" size={32} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-5 reveal-section opacity-0 text-center">
        <div className="quote-block p-5 rounded-r-lg text-left">
          <p className="text-foreground/85 leading-relaxed">
            «Татар теле ул – урам теле, ломовойлар теле, әдәби гыйльми тел булырга сәләте юк аның», дигән карашлар яшәгән заманда, Каюм Насыйри халкыбызның туган телен ялкынлы чыгышлар белән яклап чыга: «Ялган, яла бу! Без – татарлар, телебез – татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел. Бүтән телләрдән бер дә ким түгел, эшләмәгәнлек сәбәпле генә ул шулай артта калган». Татар теленең фән теле була алуын, моңа аның тулы хакы һәм мөмкинлекләре барлыгын исбат итә.
          </p>
        </div>

        <p className="text-foreground/80 leading-relaxed">
          Каюм Насыйри татар лексикографиясенең нигезен салучы. Ул — "Лөгать китабы" һәм "Ләһҗәи татари"ның авторы.
        </p>

        <div className="fact-box p-5 rounded-r-lg text-left">
          <p className="text-foreground/80 leading-relaxed">
            «Ләһҗәи татари» аңлатмалы сүзлегендә Каюм Насыйри болай яза: «Безнең телне моңарчы беркем дә фән теле буларак өйрәнмәгәнлектән, ул йокы хәлендә озак булган. Мин, телебезгә утыз биш ел хезмәт итеп, бик аз нәтиҗәләргә ирештем. Үз милләтемне "татар" дип атадым — кайберәүләргә ошамады; телебезне "татар теле", дидем, кабул итәргә
          теләмәделәр».
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
