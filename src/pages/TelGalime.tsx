import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Icon from '@/components/ui/icon';

const photos = [
  {
    src: 'https://cdn.poehali.dev/files/e99c29aa-f696-4e52-9c24-d90ddac5a948.jpeg',
    caption: 'Насыйри хезмәтеннән',
  },
];

const dictionaries = [
  {
    title: '"Лөгать китабы"',
    year: '1878',
    desc: 'Беренче татар-рус сүзлеге. 3000дән артык сүз үз урынын тапкан.',
    color: 'hsl(152 55% 40%)',
  },
  {
    title: '"Ләһҗәи татари"',
    year: '1895',
    desc: 'Камилрәк татарча аңлатмалы сүзлек. Татар лексикографиясенең иң мөһим чыганакларыннан.',
    color: 'hsl(200 70% 55%)',
  },
  {
    title: '"Кавагыйд китабет"',
    year: '1860',
    desc: 'Татар грамматикасының беренче фәнни тасвирламасы.',
    color: 'hsl(15 85% 62%)',
  },
  {
    title: '"Әнмүзәҗ"',
    year: '1873',
    desc: 'Татар теле фонетикасына багышланган хезмәт.',
    color: 'hsl(152 55% 40%)',
  },
];

export default function TelGalime() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <PageLayout title="ТЕЛ ГАЛИМЕ" subtitle="Татар лексикографиясенең атасы">

      {/* Фото */}
      <div className="reveal-section opacity-0 flex justify-center mb-10">
        {photos.map((p, i) => (
          <div key={i} className="w-64 flex flex-col cursor-pointer" onClick={() => setLightbox(i)}>
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

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-10 right-0 text-white/70 hover:text-white" onClick={() => setLightbox(null)}>
              <Icon name="X" size={28} />
            </button>
            <img src={photos[lightbox].src} alt={photos[lightbox].caption} className="w-full rounded-lg max-h-[80vh] object-contain" />
            <p className="text-white/60 text-sm text-center mt-3">{photos[lightbox].caption}</p>
          </div>
        </div>
      )}

      <div className="space-y-6 reveal-section opacity-0 text-center">
        <div className="quote-block p-5 rounded-r-lg text-left">
          <p className="text-foreground/85 leading-relaxed">
            «Татар теле ул – урам теле, ломовойлар теле, әдәби гыйльми тел булырга сәләте юк аның», дигән карашлар яшәгән заманда, Каюм Насыйри халкыбызның туган телен ялкынлы чыгышлар белән яклап чыга:
          </p>
          <p className="text-foreground font-semibold mt-3 italic">
            «Ялган, яла бу! Без – татарлар, телебез – татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел. Бүтән телләрдән бер дә ким түгел, эшләмәгәнлек сәбәпле генә ул шулай артта калган»
          </p>
        </div>

        <p className="text-foreground/80 leading-relaxed">
          Татар теленең фән теле була алуын, моңа аның тулы хакы һәм мөмкинлекләре барлыгын исбат итә.
        </p>

        <div className="gold-line max-w-40 mx-auto" />

        <p className="text-foreground/80 leading-relaxed">
          Каюм Насыйри татар лексикографиясенең нигезен салучы. Ул — <strong className="text-primary">"Лөгать китабы"</strong> һәм <strong className="text-primary">"Ләһҗәи татари"</strong>ның авторы.
        </p>

        <div className="fact-box p-5 rounded-r-lg text-left">
          <p className="text-foreground/80 italic leading-relaxed">
            «Ләһҗәи татари» аңлатмалы сүзлегенә кереш сүзендә Каюм Насыйри болай яза: «Безнең телне моңарчы беркем дә фән теле буларак өйрәнмәгәнлектән, ул йокы хәлендә озак булган һәм артта калган. Мин, телебезгә утыз биш ел хезмәт итеп, бик аз нәтиҗәләргә ирештем. Күпме тырышсам, шулкадәр газаплар да күрдем. Үз милләтемне "татар" дип атадым — кайберәүләргә ошамады; телебезне "татар теле", дидем, шулай ук кабул итәргә теләмәделәр».
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl text-foreground mt-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          Төп хезмәтләр
        </h2>
        <div className="gold-line max-w-24 mx-auto mb-6" />

        <div className="grid gap-4 text-left">
          {dictionaries.map((d, i) => (
            <div key={i} className="section-card p-5" style={{ borderTopColor: d.color }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-foreground font-bold text-base" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                    {d.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mt-1 leading-relaxed">{d.desc}</p>
                </div>
                <span className="text-xs font-bold flex-shrink-0 px-2 py-1 rounded" style={{ background: `${d.color}20`, color: d.color }}>
                  {d.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
