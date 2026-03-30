import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const PORTRAIT_URL = 'https://cdn.poehali.dev/files/4bfa03a4-20be-4ea4-9904-cdafd91e4576.png';

const navSections = [
  { id: 'yazuchy',   label: 'Язучы',        icon: 'BookOpen',        path: '/yazuchy' },
  { id: 'geograf',   label: 'Географ',       icon: 'Map',             path: '/geograf' },
  { id: 'biolog',    label: 'Биолог',        icon: 'Leaf',            path: '/biolog' },
  { id: 'ashsu',     label: 'Аш-су остасы', icon: 'UtensilsCrossed', path: '/ashsu' },
  { id: 'telgalime', label: 'Тел галиме',    icon: 'Languages',       path: '/telgalime' },
  { id: 'suzostasy', label: 'Суз остасы',    icon: 'Quote',           path: '/suzostasy' },
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

type PhotoItem = { src: string; caption: string };

export default function Index() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ photos: PhotoItem[]; idx: number } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate-in'); }),
      { threshold: 0.06 }
    );
    bodyRef.current?.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openLightbox = (photos: PhotoItem[], idx: number) => setLightbox({ photos, idx });
  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => lightbox && setLightbox({ ...lightbox, idx: (lightbox.idx - 1 + lightbox.photos.length) % lightbox.photos.length });
  const nextPhoto = () => lightbox && setLightbox({ ...lightbox, idx: (lightbox.idx + 1) % lightbox.photos.length });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background" ref={bodyRef}>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
        <div className="max-w-full mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-black tracking-widest flex-shrink-0"
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
            <div className="hidden md:flex items-center gap-1">
              {navSections.map(s => (
                <button
                  key={s.id}
                  onClick={() => navigate(s.path)}
                  className="section-nav-btn px-3 py-1.5 rounded text-xs font-semibold text-muted-foreground"
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Mobile burger */}
            <button className="md:hidden text-foreground p-1" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="md:hidden pb-3 flex flex-col gap-1 border-t border-border/40 pt-2 mt-1">
              {navSections.map(s => (
                <button
                  key={s.id}
                  onClick={() => { navigate(s.path); setMenuOpen(false); }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-left"
                >
                  <Icon name={s.icon} size={16} style={{ color: 'hsl(152 55% 45%)' }} />
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
          <p className="max-w-4xl mx-auto text-lg md:text-xl font-semibold leading-relaxed mb-8" style={{ color: 'hsl(var(--foreground) / 0.9)' }}>
            Гомере буе халыкка фидакарьләрчә хезмәт итеп, милләт мәнфәгатьләрен үзенең яшәү кыйбласы дип билгеләгән Каюм Насыйри дөньяда 77 ел яшәп вафат булган. Аның ярты гасырдан артык гомере дәрвишләрчә милләткә хезмәт итүгә багышланган.
          </p>
        </div>

        {/* Видео */}
        <div className="w-full max-w-4xl reveal-section opacity-0 mb-10">
          <div className="relative rounded-xl overflow-hidden border border-border/60" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://drive.google.com/file/d/1gvSNY0J0R3XYS-d4-KbL15SmvBdJlb_g/preview"
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              title="Каюм Насыйри турында видео"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto reveal-section opacity-0 mb-6">
          <p className="text-lg md:text-xl font-bold leading-relaxed text-center" style={{ color: 'hsl(var(--foreground))' }}>
            Каюм Насыйри тел гыйлеме, әдәбият, фольклор, тарих, педагогика һәм дидактика, география, биология, химия, медицина кебек фәннәрдә татар халкы һәм Казан губернасы өчен новатор була. Әдипнең гаять күпкырлы эшчәнлеге төп ике зур тармакка бүленә: гыйльми-мәгърифәтчелек һәм әдәби-тәрҗемәчелек юнәлешләре.
          </p>
        </div>

        {/* Ватаным Татарстан блок */}
        <div className="max-w-4xl mx-auto reveal-section opacity-0 mb-12 fact-box p-5 rounded-r-lg text-left">
          <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'hsl(var(--foreground) / 0.85)' }}>
            "Ватаным Татарстан" газетасы оештырган "Каюм бабай дәресе" конкурсының «Каюм Насыйри эзләреннән» номинациясенә укытучылар һәм тәрбиячеләр, Каюм Насыйри хезмәтләрен файдаланып, билгеле бер чара уздырырга һәм ул чарадан видеоязма әзерләргә тиеш иде. Бу юнәлештә иҗат эшләре арасында «Адымнар – белемгә һәм бердәмлеккә юл» күптелле мәгариф комплексы укытучылары Рамил Ханнанов һәм Нариман Фәхрисламов – җиңүчеләрнең берсе.
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
        <div className="w-full max-w-4xl mx-auto reveal-section opacity-0 mb-16 text-left">
          <h2 className="text-2xl md:text-3xl text-foreground mb-5 text-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Түбәндәге фәннәр буенча хезмәтләр авторы:
          </h2>
          <div className="gold-line max-w-40 mx-auto mb-6" />
          <ul className="space-y-3">
            {sciences.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-base md:text-lg font-medium" style={{ color: 'hsl(var(--foreground) / 0.85)' }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: 'hsl(152 55% 40%)' }} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── МЕНЮ РАЗДЕЛОВ — стильные карточки без цвета ── */}
        <div className="w-full max-w-5xl mx-auto reveal-section opacity-0 pb-6 px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {navSections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="section-menu-card flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(152 55% 40% / 0.12)' }}>
                  <Icon name={s.icon} size={18} style={{ color: 'hsl(152 55% 50%)' }} />
                </div>
                <div>
                  <span className="text-sm font-bold block" style={{ color: 'hsl(var(--foreground))' }}>{s.label}</span>
                  <span className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>0{i + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ РАЗДЕЛЫ — по порядку ══ */}
      <SectionYazuchy onPhoto={openLightbox} />
      <SectionGeograf onPhoto={openLightbox} />
      <SectionBiolog onPhoto={openLightbox} />
      <SectionAshSu onPhoto={openLightbox} />
      <SectionTelGalime onPhoto={openLightbox} />
      <SectionSuzOstasy />

      {/* Кнопка страницы Мәңгелек */}
      <section className="py-16 px-4 text-center border-t border-border/30">
        <div className="max-w-xl mx-auto reveal-section opacity-0">
          <div className="gold-line mb-8" />
          <button
            onClick={() => navigate('/mengelek')}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
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

      {/* ── ГЛОБАЛЬНЫЙ ЛАЙТБОКС ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Закрыть */}
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <Icon name="X" size={32} />
          </button>

          {/* Счётчик */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/40 text-sm font-medium">
            {lightbox.idx + 1} / {lightbox.photos.length}
          </div>

          {/* Стрелка влево */}
          <button
            className="absolute left-3 md:left-8 text-white/50 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            <Icon name="ChevronLeft" size={44} />
          </button>

          {/* Фото */}
          <div
            className="flex flex-col items-center px-16 md:px-24 w-full max-w-5xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.photos[lightbox.idx].src}
              alt={lightbox.photos[lightbox.idx].caption}
              className="max-h-[82vh] max-w-full rounded-xl object-contain"
              style={{ boxShadow: '0 8px 60px rgba(0,0,0,0.7)' }}
            />
            {lightbox.photos[lightbox.idx].caption && (
              <p className="text-white/60 text-sm text-center mt-4 max-w-md leading-snug">
                {lightbox.photos[lightbox.idx].caption}
              </p>
            )}
          </div>

          {/* Стрелка вправо */}
          <button
            className="absolute right-3 md:right-8 text-white/50 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            <Icon name="ChevronRight" size={44} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ══ Типы ══ */
type OnPhoto = (photos: PhotoItem[], idx: number) => void;

/* ══ Вспомогательный компонент фотосетки ══ */
function PhotoGrid({ photos, cols, ratio, onPhoto }: {
  photos: PhotoItem[];
  cols: number;
  ratio?: string;
  onPhoto: OnPhoto;
}) {
  return (
    <div className="grid gap-3 mb-10" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {photos.map((p, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div
            className="cursor-pointer overflow-hidden rounded-xl border border-border/50 relative group"
            style={ratio ? { aspectRatio: ratio } : undefined}
            onClick={() => onPhoto(photos, i)}
          >
            <img
              src={p.src}
              alt={p.caption}
              className={ratio ? 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' : 'w-full h-auto block group-hover:scale-105 transition-transform duration-500'}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
              <Icon name="ZoomIn" size={22} className="opacity-0 group-hover:opacity-100 transition-opacity text-white drop-shadow" />
            </div>
          </div>
          {p.caption && (
            <p className="text-center text-muted-foreground text-xs italic leading-snug">{p.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ══ ЗАГОЛОВОК РАЗДЕЛА ══ */
function SectionHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(152 55% 40% / 0.12)' }}>
          <Icon name={icon} size={20} style={{ color: 'hsl(152 55% 50%)' }} />
        </div>
        <h2 className="gradient-title font-black" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.2rem' }}>
          {title}
        </h2>
      </div>
      <div className="gold-line max-w-32 mx-auto" />
    </div>
  );
}

/* ══ Инлайн-секции ══ */

const yazuchyPhotos: PhotoItem[] = [
  { src: 'https://cdn.poehali.dev/files/4384cd9d-8a49-4fe7-b027-08ff484b9473.jpg', caption: '"Әбүгалисина кыйссасы", 1898' },
  { src: 'https://cdn.poehali.dev/files/20c345f8-a82b-4edb-92fc-28a6681a9595.jpg', caption: '"Әкиятләр" — К. Насыйри, 1954' },
  { src: 'https://cdn.poehali.dev/files/4aaf5462-417b-4df2-9405-65c4d99fa15e.jpg', caption: '"Китаб-әт-тәрбия" — Тәрбия китабы' },
];

function SectionYazuchy({ onPhoto }: { onPhoto: OnPhoto }) {
  return (
    <section id="yazuchy" className="border-t border-border/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon="BookOpen" title="Язучы" />
        <PhotoGrid photos={yazuchyPhotos} cols={3} ratio="3/4" onPhoto={onPhoto} />
        <div className="space-y-4 text-center">
          <p className="section-body">Каюм Насыйриның татар әдәбиятына керткән өлеше шактый зур. Аның иҗаты татар халкының рухи мирасының аерылгысыз бер өлешенә әйләнде.</p>
          <p className="section-body">Әдип — "Әбүгалисина кыйссасы", "Кырык вәзир", "Әхлак рисаләсе", "Тәрбич китабы" кебек мәшһүр әсәрләрнең авторы.</p>
          <p className="section-body">Каюм Насыйри үз әсәрләрендә гореф-гадәтләр, традицияләр, әхлак, иман, гаилә мөнәсәбәтләре, бала тәрбиясе мәсьәләләрен яктырта. Уңай әхлакый сыйфатларны галим укучы өчен үрнәк итеп куя.</p>
          <p className="section-body">Борыңгы Шәрык хикәяләренең татарча яңартылган тупланмасы булган "Кырык вәзир"дә Насыйри аны халыкка аңлаешлы тел белән биреп, татар укучысына дөнья әдәбиятының иң матур үрнәкләрен таныштырды.</p>
          <p className="section-body">Әсәрләрнең язылганнынан соң ике гасырга якын вакыт узуына карамастан, аларның эстетик әһәмияте әле дә үз кыйммәтен югалтмый.</p>
        </div>
      </div>
    </section>
  );
}

const geografPhotos: PhotoItem[] = [
  { src: 'https://cdn.poehali.dev/files/56e64cff-74f6-4098-a56f-072cae398cd9.png', caption: '' },
  { src: 'https://cdn.poehali.dev/files/a66903fc-b12a-48a2-87e9-06347a8de615.jpeg', caption: '' },
];

function SectionGeograf({ onPhoto }: { onPhoto: OnPhoto }) {
  return (
    <section id="geograf" className="border-t border-border/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon="Map" title="Географ" />
        <PhotoGrid photos={geografPhotos} cols={2} ratio="4/3" onPhoto={onPhoto} />
        <div className="space-y-4 text-center">
          <p className="section-body">Каюм Насыйри – Казан губернасының беренче картасы, Россия мәчетләрендә кыйбланы төгәл билгеләү картасы һ.б. дистәләгән карталар авторы.</p>
          <p className="section-body">Казан губернасының тәүге географик картасында ул мөселман мәчетләренең төп урыны – михрабның төгәл билгеләнешен ачыклауны максат итеп куйган.</p>
          <p className="section-body">Насыйри картасында Евразия кыйтгасының шактый өлеше өчен — Санкт-Петербургтан Көньяк Кытай диңгезенә кадәр — мәчетләрнең кыйблага дөрес юнәлешен күрсәтә.</p>
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
    <section id="biolog" className="border-t border-border/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon="Leaf" title="Биолог" />
        <PhotoGrid photos={biologPhotos} cols={2} ratio="4/3" onPhoto={onPhoto} />
        <div className="space-y-4 text-center">
          <p className="section-body">Каюм Насыйри дарулар кулланмаган. Ул гомер буе дару үләннәре җыйган, шулар белән үзе дә, башкаларны да дәвалаган.</p>
          <p className="section-body">Үзенең тәҗрибәсен "Гөлзар вә чаманзар" ("Чәчәкләр һәм үләннәр") китабында тасвирлаган. Бу китабында галим Россия территориясында үскән 192 үсемлекнең үзлекләрен, 155 авыруны һәм аларны үләннәр ярдәмендә дәвалау ысулларын тасвирлаган.</p>
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
    <section id="ashsu" className="border-t border-border/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon="UtensilsCrossed" title="Аш-су остасы" />
        <div className="max-w-sm mx-auto mb-10">
          <PhotoGrid photos={ashsuPhotos} cols={1} ratio="4/3" onPhoto={onPhoto} />
        </div>
        <div className="space-y-4 text-center">
          <p className="section-body">Каюм Насыйри татар ашлары буенча да кыйммәтле эшләр язган. Ул традицион татар ашларының рецептларын җыйган, аларның әзерләү ысулларын детальльләп тасвирлаган.</p>
          <p className="section-body">Алма күпертмәсе: Ун алманы юка гына тура. Камыр яса: биш йомырка, ике кашык май, ике кашык шикәр, бер стакан каймак, он сал. Табада майда кыздыр, өстенә алма куй. Мөрәбба белән аша.</p>
        </div>
      </div>
    </section>
  );
}

const telgalimePhotos: PhotoItem[] = [
  { src: 'https://cdn.poehali.dev/files/e735455e-6874-4c2d-bfa2-0957aef5610f.jpeg', caption: '' },
  { src: 'https://cdn.poehali.dev/files/04e43680-1d61-4876-aa41-8616e1d136ce.png', caption: '' },
  { src: 'https://cdn.poehali.dev/files/e7a75894-8763-4c07-9e15-a8a5e4c9d65b.jpeg', caption: '' },
  { src: 'https://cdn.poehali.dev/files/cee76dbe-a4d5-461c-a563-3883742edff0.jpeg', caption: '' },
];

function SectionTelGalime({ onPhoto }: { onPhoto: OnPhoto }) {
  return (
    <section id="telgalime" className="border-t border-border/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon="Languages" title="Тел галиме" />
        <PhotoGrid photos={telgalimePhotos} cols={4} ratio="3/4" onPhoto={onPhoto} />
        <div className="space-y-4 text-center">
          <p className="section-body">«Татар теле ул – урам теле, ломовойлар теле», дигән карашлар яшәгән заманда Насыйри халкыбызның туган телен яклап чыга: «Без – татарлар, телебез – татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел».</p>
          <p className="section-body">Ул татар лексикографиясенең нигезен салучы — "Лөгать китабы" һәм "Ләһҗәи татари" сүзлекләренең авторы.</p>
        </div>
      </div>
    </section>
  );
}

function SectionSuzOstasy() {
  return (
    <section id="suzostasy" className="border-t border-border/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon="Quote" title="Суз остасы" />
        <div className="space-y-4 text-center">
          <p className="section-body italic">«Без — татарлар, телебез — татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел ул»</p>
          <p className="section-body italic">«Дөньяда баһадир шул кешедер ки, — нәфесен җиңәр»</p>
          <p className="section-body italic">«Халыкка икмәк-тоз күрсәтмәгән кешенең үлгәч тә исемен телгә алмаслар»</p>
        </div>
      </div>
    </section>
  );
}