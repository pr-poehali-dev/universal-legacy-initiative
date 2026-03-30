import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const PORTRAIT_URL = 'https://cdn.poehali.dev/files/4bfa03a4-20be-4ea4-9904-cdafd91e4576.png';

const sections = [
  { id: 'yazuchy', label: 'Язучы', icon: 'BookOpen', path: '/yazuchy', desc: 'Татар әдәбияты классигы' },
  { id: 'geograf', label: 'Географ', icon: 'Map', path: '/geograf', desc: 'Казан губернасы картасы авторы' },
  { id: 'biolog', label: 'Биолог', icon: 'Leaf', path: '/biolog', desc: '192 үсемлекне тасвирлаган' },
  { id: 'ashsu', label: 'Аш-су остасы', icon: 'UtensilsCrossed', path: '/ashsu', desc: 'Татар ашлары рецептлары' },
  { id: 'telgalime', label: 'Тел галиме', icon: 'Languages', path: '/telgalime', desc: 'Татар лексикографиясенең атасы' },
  { id: 'suzostasy', label: 'Суз остасы', icon: 'Quote', path: '/suzostasy', desc: 'Канатлы цитаталар' },
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
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate-in'); }),
      { threshold: 0.08 }
    );
    bodyRef.current?.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
            <div className="hidden md:flex items-center gap-1">
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
        {/* Портрет */}
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

        {/* Текст после видео */}
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

        {/* Карточки разделов */}
        <div className="w-full max-w-4xl mx-auto reveal-section opacity-0 pb-6">
          <h2 className="text-2xl md:text-3xl text-foreground mb-8 text-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Разделларны өйрән
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => navigate(s.path)}
                className="section-card p-5 flex flex-col items-center gap-3 cursor-pointer text-center"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'hsl(152 55% 40% / 0.12)' }}>
                  <Icon name={s.icon} size={22} style={{ color: 'hsl(152 55% 45%)' }} />
                </div>
                <span className="text-foreground font-semibold text-sm">{s.label}</span>
                <span className="text-muted-foreground text-xs">{s.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ РАЗДЕЛЫ (видны при скролле) ══ */}
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="border-t border-border/30 py-16 px-4">
          <div className="max-w-2xl mx-auto text-center reveal-section opacity-0">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'hsl(152 55% 40% / 0.12)' }}>
              <Icon name={s.icon} size={28} style={{ color: 'hsl(152 55% 45%)' }} />
            </div>
            <h2 className="gradient-title font-black mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
              {s.label}
            </h2>
            <p className="text-muted-foreground text-sm mb-6">{s.desc}</p>
            <div className="gold-line max-w-24 mx-auto mb-6" />
            <button
              onClick={() => navigate(s.path)}
              className="section-nav-btn px-6 py-2.5 rounded text-sm font-semibold"
              style={{ color: 'hsl(152 55% 45%)' }}
            >
              Тулырак укырга →
            </button>
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-6 text-center">
        <p className="text-muted-foreground text-sm">© 2026 — Татар әдәбиятын өйрәнү һәм үстерү проекты. Лилия Кәримова</p>
      </footer>
    </div>
  );
}