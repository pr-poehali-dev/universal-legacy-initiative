import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const PORTRAIT_URL = 'https://cdn.poehali.dev/files/4bfa03a4-20be-4ea4-9904-cdafd91e4576.png';

const sections = [
  { id: 'yazuchy', label: 'Язучы', icon: 'BookOpen', path: '/yazuchy', grad: 'linear-gradient(135deg, hsl(152 55% 30%), hsl(152 55% 50%))' },
  { id: 'geograf', label: 'Географ', icon: 'Map', path: '/geograf', grad: 'linear-gradient(135deg, hsl(200 70% 35%), hsl(200 70% 60%))' },
  { id: 'biolog', label: 'Биолог', icon: 'Leaf', path: '/biolog', grad: 'linear-gradient(135deg, hsl(120 50% 25%), hsl(152 55% 48%))' },
  { id: 'ashsu', label: 'Аш-су остасы', icon: 'UtensilsCrossed', path: '/ashsu', grad: 'linear-gradient(135deg, hsl(15 85% 40%), hsl(35 90% 55%))' },
  { id: 'telgalime', label: 'Тел галиме', icon: 'Languages', path: '/telgalime', grad: 'linear-gradient(135deg, hsl(260 55% 35%), hsl(200 70% 55%))' },
  { id: 'suzostasy', label: 'Суз остасы', icon: 'Quote', path: '/suzostasy', grad: 'linear-gradient(135deg, hsl(15 85% 45%), hsl(15 85% 65%))' },
  { id: 'mengelek', label: 'Исеме мәңгелек', icon: 'Star', path: '/mengelek', grad: 'linear-gradient(135deg, hsl(40 80% 35%), hsl(15 85% 55%), hsl(152 55% 40%))' },
];

const sciences = [
  'Лексикография (сүзлекләр: "Лөгать китабы", "Ләһҗәи татари")',
  'Фонетика һәм грамматика ("Кавагыйд китабет", "Әнмүзәҗ")',
  'Тарих, этнография, фольклор',
  'Табигать фәннәре ("Зирагать гыйльме", "Гөлзар вә чәмәнзар")',
  'Әдәбият ("Фәвакиһелҗөләса фил әдәбият" — беренче татар энциклопедиясе)',
  'Педагогика (арифметика, геометрия, география дәреслекләре)',
  '"Казан календаре" еллык календарен нәшер иткән (1871–1897)',
];

export default function Index() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ photos: { src: string; caption: string }[]; idx: number } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate-in'); }),
      { threshold: 0.08 }
    );
    bodyRef.current?.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openLightbox = (photos: { src: string; caption: string }[], idx: number) => setLightbox({ photos, idx });
  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => lightbox && setLightbox({ ...lightbox, idx: (lightbox.idx - 1 + lightbox.photos.length) % lightbox.photos.length });
  const nextPhoto = () => lightbox && setLightbox({ ...lightbox, idx: (lightbox.idx + 1) % lightbox.photos.length });

  return (
    <div className="min-h-screen bg-background" ref={bodyRef}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-black tracking-widest"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, hsl(15 85% 62%), hsl(200 70% 55%), hsl(152 55% 45%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              КАЮМ НАСЫЙРИ
            </button>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 flex-wrap justify-end max-w-[65%]">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => navigate(s.path)}
                  className="section-nav-btn px-3 py-1.5 rounded text-xs font-medium text-muted-foreground"
                >
                  {s.label}
                </button>
              ))}
            </div>
            {/* Mobile burger */}
            <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="md:hidden pb-3 flex flex-col gap-1">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => { navigate(s.path); setMenuOpen(false); }}
                  className="section-nav-btn px-3 py-2 rounded text-sm font-medium text-muted-foreground text-left"
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ═══ ГЕРОЙ ═══ */}
      <section className="hero-pattern pt-14 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8 reveal-section opacity-0">
          <div className="relative inline-block">
            <img
              src={PORTRAIT_URL}
              alt="Каюм Насыйри"
              className="w-44 h-44 md:w-56 md:h-56 object-cover rounded-full portrait-frame"
              style={{ objectPosition: 'center top' }}
            />
            <div className="absolute inset-0 rounded-full" style={{ boxShadow: 'inset 0 0 30px hsl(152 55% 40% / 0.15)' }} />
          </div>
        </div>

        <div className="reveal-section opacity-0">
          <p className="text-sm md:text-base tracking-[0.28em] font-bold mb-2" style={{ color: 'hsl(200 70% 65%)' }}>
            ҮЗ ХАЛКЫН ДАНЛАГАН ТАТАРЛАР:
          </p>
          <h1 className="gradient-title font-black leading-none mb-2"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
            КАЮМ НАСЫЙРИ
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-6">(1825–1902)</p>
          <div className="gold-line max-w-xs mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-foreground/85 text-base md:text-lg font-semibold leading-relaxed mb-8">
            Гомере буе халыкка фидакарьләрчә хезмәт итеп, милләт мәнфәгатьләрен үзенең яшәү кыйбласы дип билгеләгән Каюм Насыйри дөньяда 77 ел яшәп вафат булган. Аның ярты гасырдан артык гомере дәрвишләрчә милләткә хезмәт итүгә багышланган.
          </p>
        </div>

        {/* Видео */}
        <div className="w-full max-w-2xl reveal-section opacity-0 mb-10">
          <div className="relative rounded-xl overflow-hidden border border-border/60" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://drive.google.com/file/d/1gvSNY0J0R3XYS-d4-KbL15SmvBdJlb_g/preview"
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              title="Каюм Насыйри турында видео"
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto reveal-section opacity-0 mb-6">
          <p className="text-foreground font-bold text-base md:text-lg leading-relaxed text-center">
            Каюм Насыйри тел гыйлеме, әдәбият, фольклор, тарих, педагогика һәм дидактика, география, биология, химия, медицина кебек фәннәрдә татар халкы һәм Казан губернасы өчен новатор була. Әдипнең гаять күпкырлы эшчәнлеге төп ике зур тармакка бүленә: гыйльми-мәгърифәтчелек һәм әдәби-тәрҗемәчелек юнәлешләре.
          </p>
        </div>

        {/* Ватаным Татарстан блок */}
        <div className="max-w-2xl mx-auto reveal-section opacity-0 mb-12 fact-box p-5 rounded-r-lg text-left">
          <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-3">
            "Ватаным Татарстан" газетасы оештырган "Каюм бабай дәресе" конкурсының «Каюм Насыйри эзләреннән» номинациясенә укытучылар һәм тәрбиячеләр, Каюм Насыйри хезмәтләрен файдаланып, билгеле бер чара уздырырга һәм ул чарадан видеоязма әзерләргә тиеш иде. Бу юнәлештә җибәргән иҗат эшләре арасында «Адымнар – белемгә һәм бердәмлеккә юл» күптелле мәгариф комплексы укытучылары Рамил Ханнанов һәм Нариман Фәхрисламов – җиңүчеләрнең берсе. Әле видеоязманы сезгә дә тәкъдим итәбез.
          </p>
          <a
            href="https://vatantat.ru/news/kaium-babai-dasa-vt-ukytucylar-ham-tarbiiacelar-arasynda-uzdyrgan-baigega-iomgak-iasady-110417"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: 'hsl(152 55% 45%)' }}
          >
            <Icon name="ExternalLink" size={14} />
            Тулырак укырга
          </a>
        </div>

        {/* Науки */}
        <div className="w-full max-w-2xl mx-auto reveal-section opacity-0 mb-16 text-left">
          <h2 className="text-2xl md:text-3xl text-foreground mb-5 text-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Түбәндәге фәннәр буенча хезмәтләр авторы:
          </h2>
          <div className="gold-line max-w-40 mx-auto mb-6" />
          <ul className="space-y-3">
            {sciences.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80 text-sm md:text-base">
                <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'hsl(152 55% 40%)', marginTop: '6px' }} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Карточки разделов — ЦВЕТНЫЕ ГРАДИЕНТНЫЕ */}
        <div className="w-full max-w-4xl mx-auto reveal-section opacity-0 pb-6 px-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => { const el = document.getElementById(s.id); el?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                className="flex flex-col items-center gap-2 cursor-pointer text-center py-5 px-3 rounded-xl transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: s.grad, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <Icon name={s.icon} size={20} className="text-white" />
                </div>
                <span className="text-white font-semibold text-sm leading-tight">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ РАЗДЕЛЫ — контент виден сразу ══ */}
      <SectionYazuchy onPhoto={openLightbox} />
      <SectionGeograf onPhoto={openLightbox} />
      <SectionBiolog onPhoto={openLightbox} />
      <SectionAshSu onPhoto={openLightbox} />
      <SectionTelGalime onPhoto={openLightbox} />
      <SectionSuzOstasy />

      {/* Кнопка последней страницы */}
      <section className="py-16 px-4 text-center border-t border-border/30">
        <div className="max-w-xl mx-auto reveal-section opacity-0">
          <div className="gold-line mb-8" />
          <button
            onClick={() => navigate('/mengelek')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, hsl(152 55% 35%), hsl(200 70% 45%), hsl(15 85% 55%))',
              color: 'white',
              boxShadow: '0 4px 24px hsl(152 55% 40% / 0.3)',
            }}
          >
            <Icon name="Star" size={20} />
            Каюм Насыйриның исеме мәңгелек
            <Icon name="ArrowRight" size={20} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-6 text-center">
        <p className="text-muted-foreground text-sm">© 2026 — Татар әдәбиятын өйрәнү һәм үстерү проекты. Лилия Кәримова</p>
      </footer>

      {/* ГЛОБАЛЬНЫЙ ЛАЙТБОКС */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <Icon name="X" size={32} />
            </button>
            <div className="flex items-center gap-3">
              <button
                className="text-white/70 hover:text-white flex-shrink-0 transition-colors"
                onClick={prevPhoto}
              >
                <Icon name="ChevronLeft" size={40} />
              </button>
              <div className="flex-1 flex flex-col items-center">
                <img
                  src={lightbox.photos[lightbox.idx].src}
                  alt={lightbox.photos[lightbox.idx].caption}
                  className="w-full rounded-xl max-h-[80vh] object-contain"
                />
                {lightbox.photos[lightbox.idx].caption && (
                  <p className="text-white/60 text-sm text-center mt-3">
                    {lightbox.photos[lightbox.idx].caption}
                  </p>
                )}
                <p className="text-white/30 text-xs mt-1">
                  {lightbox.idx + 1} / {lightbox.photos.length}
                </p>
              </div>
              <button
                className="text-white/70 hover:text-white flex-shrink-0 transition-colors"
                onClick={nextPhoto}
              >
                <Icon name="ChevronRight" size={40} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ══ Типы ══ */
type PhotoItem = { src: string; caption: string };
type OnPhoto = (photos: PhotoItem[], idx: number) => void;

/* ══ Инлайн-секции для главной страницы ══ */

const yazuchyPhotos: PhotoItem[] = [
  { src: 'https://cdn.poehali.dev/files/4384cd9d-8a49-4fe7-b027-08ff484b9473.jpg', caption: '"Әбүгалисина кыйссасы", 1898' },
  { src: 'https://cdn.poehali.dev/files/20c345f8-a82b-4edb-92fc-28a6681a9595.jpg', caption: '"Әкиятләр" — К. Насыйри, 1954' },
  { src: 'https://cdn.poehali.dev/files/4aaf5462-417b-4df2-9405-65c4d99fa15e.jpg', caption: '"Китаб-әт-тәрбия" — Тәрбия китабы' },
];

function SectionYazuchy({ onPhoto }: { onPhoto: OnPhoto }) {
  return (
    <section id="yazuchy" className="border-t border-border/30 py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(152 55% 40% / 0.12)' }}>
            <Icon name="BookOpen" size={20} style={{ color: 'hsl(152 55% 45%)' }} />
          </div>
          <h2 className="gradient-title font-black" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem' }}>Язучы</h2>
        </div>
        <div className="gold-line max-w-24 mx-auto mb-6" />

        {/* Фото */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {yazuchyPhotos.map((p, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-lg border border-border/60 relative group"
              style={{ aspectRatio: '3/4' }}
              onClick={() => onPhoto(yazuchyPhotos, i)}
            >
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <Icon name="ZoomIn" size={22} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-foreground/80 text-sm md:text-base leading-relaxed text-center">
          <p>Каюм Насыйриның татар әдәбиятына керткән өлеше шактый зур. Аның иҗаты татар халкының рухи мирасының аерылгысыз бер өлешенә әйләнде.</p>
          <p>Әдип — "Әбүгалисина кыйссасы", "Кырык вәзир", "Әхлак рисаләсе", "Тәрбич китабы" кебек мәшһүр әсәрләрнең авторы.</p>
          <p>Каюм Насыйри үз әсәрләрендә гореф-гадәтләр, традицияләр, әхлак, иман, гаилә мөнәсәбәтләре, бала тәрбиясе мәсьәләләрен яктырта. Уңай әхлакый сыйфатларны галим укучы өчен үрнәк итеп куя.</p>
          <p>Борыңгы Шәрык хикәяләренең татарча яңартылган тупланмасы булган "Кырык вәзир"дә Насыйри аны халыкка аңлаешлы тел белән биреп, татар укучысына дөнья әдәбиятының иң матур үрнәкләрен таныштырды.</p>
          <p>Әсәрләрнең язылганнынан соң ике гасырга якын вакыт узуына карамастан, аларның эстетик әһәмияте әле дә үз кыйммәтен югалтмый.</p>
        </div>
      </div>
    </section>
  );
}

const geografPhotos: PhotoItem[] = [
  { src: 'https://cdn.poehali.dev/files/56e64cff-74f6-4098-a56f-072cae398cd9.png', caption: 'Мәчетләрнең кыйбла юнәлешен күрсәткән карта' },
  { src: 'https://cdn.poehali.dev/files/e99c29aa-f696-4e52-9c24-d90ddac5a948.jpeg', caption: 'Насыйри картографик хезмәтеннән' },
];

function SectionGeograf({ onPhoto }: { onPhoto: OnPhoto }) {
  return (
    <section id="geograf" className="border-t border-border/30 py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(200 70% 55% / 0.12)' }}>
            <Icon name="Map" size={20} style={{ color: 'hsl(200 70% 55%)' }} />
          </div>
          <h2 className="gradient-title font-black" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem' }}>Географ</h2>
        </div>
        <div className="gold-line max-w-24 mx-auto mb-6" />

        <div className="grid grid-cols-2 gap-4 mb-8">
          {geografPhotos.map((p, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-lg border border-border/60 relative group"
              style={{ aspectRatio: '4/3' }}
              onClick={() => onPhoto(geografPhotos, i)}
            >
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <Icon name="ZoomIn" size={22} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-foreground/80 text-sm md:text-base leading-relaxed text-center">
          <p>Каюм Насыйри – Казан губернасының беренче картасы, Россия мәчетләрендә кыйбланы төгәл билгеләү картасы һ.б. дистәләгән карталар авторы.</p>
          <p>Казан губернасының тәүге географик картасында ул мөселман мәчетләренең төп урыны – михрабның төгәл билгеләнешен ачыклауны максат итеп куйган.</p>
          <p>Насыйри картасында Евразия кыйтгасының шактый өлеше өчен — Санкт-Петербургтан Көньяк Кытай диңгезенә кадәр — мәчетләрнең кыйблага дөрес юнәлешен күрсәтә.</p>
        </div>
      </div>
    </section>
  );
}

const biologPhotos: PhotoItem[] = [
  { src: 'https://cdn.poehali.dev/files/a1b3dac3-2d74-4d20-924d-8e6403b5fa99.png', caption: '' },
  { src: 'https://cdn.poehali.dev/files/cb96834a-44b7-4eae-861d-64144948c65a.jpg', caption: '"Шифалы үләннәр" — К. Насыйри' },
];

function SectionBiolog({ onPhoto }: { onPhoto: OnPhoto }) {
  return (
    <section id="biolog" className="border-t border-border/30 py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(152 55% 40% / 0.12)' }}>
            <Icon name="Leaf" size={20} style={{ color: 'hsl(152 55% 45%)' }} />
          </div>
          <h2 className="gradient-title font-black" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem' }}>Биолог</h2>
        </div>
        <div className="gold-line max-w-24 mx-auto mb-6" />

        <div className="grid grid-cols-2 gap-4 mb-8">
          {biologPhotos.map((p, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-lg border border-border/60 relative group"
              style={{ aspectRatio: '4/3' }}
              onClick={() => onPhoto(biologPhotos, i)}
            >
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <Icon name="ZoomIn" size={22} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-foreground/80 text-sm md:text-base leading-relaxed text-center">
          <p>Каюм Насыйри дарулар кулланмаган. Ул гомер буе дару үләннәре җыйган, шулар белән үзе дә, башкаларны да дәвалаган.</p>
          <p>Үзенең тәҗрибәсен "Гөлзар вә чаманзар" ("Чәчәкләр һәм үләннәр") китабында тасвирлаган. Бу китабында галим Россия территориясында үскән 192 үсемлекнең үзлекләрен, 155 авыруны һәм аларны үләннәр ярдәмендә дәвалау ысулларын тасвирлаган.</p>
        </div>
      </div>
    </section>
  );
}

const ashsuPhotos: PhotoItem[] = [
  { src: 'https://cdn.poehali.dev/files/5aa59aa3-ec49-4261-980c-3d6c08d8ca4b.jpg', caption: 'Аш-су остасы китабы, 1912 ел' },
];

function SectionAshSu({ onPhoto }: { onPhoto: OnPhoto }) {
  return (
    <section id="ashsu" className="border-t border-border/30 py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(15 85% 62% / 0.12)' }}>
            <Icon name="UtensilsCrossed" size={20} style={{ color: 'hsl(15 85% 62%)' }} />
          </div>
          <h2 className="gradient-title font-black" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem' }}>Аш-су остасы</h2>
        </div>
        <div className="gold-line max-w-24 mx-auto mb-6" />

        <div
          className="cursor-pointer overflow-hidden rounded-xl border border-border/60 relative group mb-8 w-full max-w-lg mx-auto"
          style={{ aspectRatio: '4/3' }}
          onClick={() => onPhoto(ashsuPhotos, 0)}
        >
          <img src={ashsuPhotos[0].src} alt={ashsuPhotos[0].caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
            <Icon name="ZoomIn" size={28} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 py-2 px-3 text-center text-white/70 text-xs" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}>
            {ashsuPhotos[0].caption}
          </div>
        </div>

        <div className="space-y-3 text-foreground/80 text-sm md:text-base leading-relaxed text-center">
          <p>Каюм Насыйри татар ашлары буенча да кыйммәтле эшләр язган. Ул традицион татар ашларының рецептларын җыйган, аларның әзерләү ысулларын детальльләп тасвирлаган.</p>
          <p>Алма күпертмәсе: Ун алманы юка гына тура. Камыр яса: биш йомырка, ике кашык май, ике кашык шикәр, бер стакан каймак, он сал. Табада майда кыздыр, өстенә алма куй. Мөрәбба белән аша.</p>
        </div>
      </div>
    </section>
  );
}

const telgalimePhotos: PhotoItem[] = [
  { src: 'https://cdn.poehali.dev/files/e735455e-6874-4c2d-bfa2-0957aef5610f.jpeg', caption: 'Русско-татарский словарь, 1892' },
  { src: 'https://cdn.poehali.dev/files/04e43680-1d61-4876-aa41-8616e1d136ce.png', caption: 'Русская азбука, 1889' },
  { src: 'https://cdn.poehali.dev/files/e7a75894-8763-4c07-9e15-a8a5e4c9d65b.jpeg', caption: 'Грамматика кулъязмасы' },
  { src: 'https://cdn.poehali.dev/files/cee76dbe-a4d5-461c-a563-3883742edff0.jpeg', caption: 'Тел белеме хезмәте' },
];

function SectionTelGalime({ onPhoto }: { onPhoto: OnPhoto }) {
  return (
    <section id="telgalime" className="border-t border-border/30 py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(200 70% 55% / 0.12)' }}>
            <Icon name="Languages" size={20} style={{ color: 'hsl(200 70% 55%)' }} />
          </div>
          <h2 className="gradient-title font-black" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem' }}>Тел галиме</h2>
        </div>
        <div className="gold-line max-w-24 mx-auto mb-6" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {telgalimePhotos.map((p, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-lg border border-border/60 relative group"
              style={{ aspectRatio: '3/4' }}
              onClick={() => onPhoto(telgalimePhotos, i)}
            >
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <Icon name="ZoomIn" size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-foreground/80 text-sm md:text-base leading-relaxed text-center">
          <p>«Татар теле ул – урам теле, ломовойлар теле», дигән карашлар яшәгән заманда Насыйри халкыбызның туган телен яклап чыга: «Без – татарлар, телебез – татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел».</p>
          <p>Ул татар лексикографиясенең нигезен салучы — "Лөгать китабы" һәм "Ләһҗәи татари" сүзлекләренең авторы.</p>
        </div>
      </div>
    </section>
  );
}

function SectionSuzOstasy() {
  return (
    <section id="suzostasy" className="border-t border-border/30 py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(15 85% 62% / 0.12)' }}>
            <Icon name="Quote" size={20} style={{ color: 'hsl(15 85% 62%)' }} />
          </div>
          <h2 className="gradient-title font-black" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem' }}>Суз остасы</h2>
        </div>
        <div className="gold-line max-w-24 mx-auto mb-6" />
        <div className="space-y-3 text-foreground/80 text-sm md:text-base leading-relaxed text-center">
          <p className="italic">«Без - татарлар, телебез - татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел ул»</p>
          <p className="italic">«Дөньяда баһадир шул кешедер ки, — нәфесен җиңәр»</p>
          <p className="italic">«Халыкка икмәк-тоз күрсәтмәгән кешенең үлгәч тә исемен телгә алмаслар»</p>
        </div>
      </div>
    </section>
  );
}
