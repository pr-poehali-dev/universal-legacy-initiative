import { useEffect, useRef, useState } from 'react';
import { PhotoGallery } from '@/components/PhotoLightbox';

const PORTRAIT_URL = 'https://cdn.poehali.dev/projects/f0494d1c-d03d-4115-9113-c2c7e1c690f7/bucket/5f3603c7-1b4a-45ac-a32c-56ff806489a5.jpg';

// Фото по порядку из чата
const photo1 = 'https://cdn.poehali.dev/files/b2ef1398-b697-475d-8111-368e2558df8d.jpg';  // студент рабфака ~1923
const photo2 = 'https://cdn.poehali.dev/files/ee7c8168-dc3e-4f2c-bf34-186b2829bb81.jpg';  // шәкерт 1916
const photo3 = 'https://cdn.poehali.dev/files/daa8cca3-c64f-4968-847c-ad93985a4b62.jpg';  // уком бюросы 1925
const photo4 = 'https://cdn.poehali.dev/files/42c454e4-ebbf-4368-8b68-2576067662ad.jpg';  // әнисе белән 1926
const photo5 = 'https://cdn.poehali.dev/files/23053f19-07db-480e-8ecb-f81c6215831f.jpg';  // журналистлар 1934

const navItems = [
  { id: 'bash', label: 'Баш бит' },
  { id: 'tormysh', label: 'Тормыш юлы' },
  { id: 'shakhsi', label: 'Шәхси тормышы' },
  { id: 'sugush', label: 'Сугыш юлы' },
  { id: 'moabit', label: 'Моабит тәфтәрләре' },
  { id: 'jalilcheler', label: 'Җәлилчеләр' },
  { id: 'ijat', label: 'Иҗат' },
  { id: 'bugen', label: 'Бүгенге көн' },
];

const jalilchelerList = [
  { name: 'Муса Җәлил', role: 'Шагыйрь, оешма башлыгы' },
  { name: 'Гайнан Курмашев', role: 'Радиожурналист' },
  { name: 'Абдулла Алиш', role: 'Язучы' },
  { name: 'Фуат Сәйфелмөлеков', role: 'Юрист' },
  { name: 'Ахмед Симаев', role: 'Журналист' },
  { name: 'Зиннәт Хәсәнов', role: 'Укытучы' },
  { name: 'Гариф Шабаев', role: 'Икътисадчы' },
  { name: 'Солтан Алибаев', role: 'Укытучы' },
  { name: 'Ибраһим Алкин', role: 'Хәрби' },
  { name: 'Рәхим Саттаров', role: 'Хәрби' },
  { name: 'Дәмир Шалимов', role: 'Хәрби' },
];

export default function Index() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('bash');

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('animate-in');
        });
      },
      { threshold: 0.08 }
    );
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.target.id) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    const revealEls = bodyRef.current?.querySelectorAll('.reveal-section');
    const sectionEls = bodyRef.current?.querySelectorAll('section[id]');
    revealEls?.forEach((s) => revealObserver.observe(s));
    sectionEls?.forEach((s) => activeObserver.observe(s));
    return () => { revealObserver.disconnect(); activeObserver.disconnect(); };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background" ref={bodyRef}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Одна строка: логотип + навигация */}
          <div className="flex items-center gap-4 h-11 border-b border-border/30">
            <button
              onClick={() => scrollTo('bash')}
              className="text-primary flex-shrink-0"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.15rem', letterSpacing: '0.12em' }}
            >
              МУСА ҖӘЛИЛ
            </button>
            <span className="text-border">|</span>
            <span className="text-muted-foreground text-xs tracking-wider flex-shrink-0 hidden sm:block">1906 — 1944</span>
          </div>
          {/* Вторая строка — пункты меню, прокручиваемые */}
          <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide" style={{ height: '38px' }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`section-nav-btn px-3 py-1 rounded text-xs font-medium whitespace-nowrap flex-shrink-0 ${activeSection === item.id ? 'active' : 'text-muted-foreground'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══════════ БАШ БИТ ═══════════ */}
      <section id="bash" className="relative overflow-hidden" style={{ height: 'calc(100vh - 90px)', marginTop: '90px', background: 'hsl(220 15% 8%)' }}>

        {/* Фото — полный фон */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="https://cdn.poehali.dev/projects/f0494d1c-d03d-4115-9113-c2c7e1c690f7/bucket/7294a4d6-0a96-4bc0-975d-d1c77f79f309.jpg"
            alt="Муса Джалиль"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%) brightness(0.5)', objectPosition: 'right center', transform: 'scale(0.85)', transformOrigin: 'right center' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, hsl(220 15% 8%) 0%, hsl(220 15% 8% / 0.97) 18%, hsl(220 15% 8% / 0.85) 35%, hsl(220 15% 8% / 0.4) 55%, transparent 75%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(220 15% 8%) 0%, transparent 40%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsl(220 15% 8%) 0%, transparent 40%)' }} />
        </div>

        {/* Текст — строго по центру высоты */}
        <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 md:px-12 lg:px-20">
          <div className="max-w-lg">
            <h1 className="text-primary font-black" style={{ fontFamily: 'Bebas Neue, sans-serif', lineHeight: 1, textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
              <span className="block text-lg md:text-xl mb-3 tracking-[0.18em]">ҮЗ ХАЛКЫН ДАНЛАГАН ТАТАРЛАР:</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl">МУСА</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl">ҖӘЛИЛ</span>
            </h1>
            <div className="gold-line max-w-xs my-5" />
            <div className="flex items-center gap-3 mb-6 font-bold tracking-wider text-foreground" style={{ fontSize: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
              <span>15 февраль 1906</span>
              <span className="text-primary text-xl">—</span>
              <span>25 август 1944</span>
            </div>
            <blockquote className="quote-line pl-5 py-1 max-w-md mb-8">
              <p className="text-foreground/55 text-sm md:text-base italic leading-relaxed">
                Гомерем минем моңлы бер җыр иде,<br />
                Үлемем дә яңрар җыр булып
              </p>
            </blockquote>
            <div className="flex flex-wrap gap-2">
              {navItems.slice(1).map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="section-nav-btn px-3 py-1.5 rounded text-xs text-muted-foreground font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ТОРМЫШ ЮЛЫ ═══════════ */}
      <section id="tormysh" className="py-20 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-section opacity-0 mb-12">
            <p className="text-primary/50 text-xs tracking-[0.3em] uppercase mb-2">02</p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Тормыш юлы</h2>
            <div className="gold-line max-w-20" />
          </div>
          <div className="space-y-5 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>Муса Джалиль <strong className="text-foreground">1906 елның 15 февралендә</strong> Ырынбур губернасының Мостафа авылында дөньяга килә. Алты яшендә әтисе кечкенә Мусаны авыл мәктәбенә бирә. Бу мәктәптә әдип бер ел өчендә 4 еллык уку программасын үзләштерә.</p>
            <p>1914 елда "Хөсәениягә" шәкерт булып керә. Нәкъ шул елны беренче тапкыр Габдулла Тукай шигырьләрен уки. "Белек" китапханәсендә танылган язучы Шариф Камал белән таныша.</p>
          </div>

          <div className="my-8 reveal-section opacity-0">
            <PhotoGallery photos={[{ url: photo2, caption: 'Муса Джалиль — шәкерт. 1916 ел' }]} />
          </div>

          <div className="interesting-fact reveal-section opacity-0 mb-6">
            1915 елда Джалиль апасы Мәрьямгә бөек язучы булырга хыялланганы турында сөйли.
          </div>

          <div className="space-y-5 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>Тиздән яшь шагыйрь турында Оренбургның танылган язучысы Төхфәт Ченекәй ишетеп ала. Ул "Хөсәениягә" килеп, Мусаны эзләп таба, аңа классикаларны укырга бирә, спектакльләргә алып бара.</p>
            <p>11 яшендә ике пьеса иҗат итә — шуларның берсе («Злодей») Оренбург шәһәр театрында куела. 1919 елда «Кызыл Йолдыз» газетасында беренче рәсми мәкалә басыла. 1920 елның 17 февралендә комсомол сафларына керә.</p>
            <p>1921 елда Ырынбурда ачлык. Мусаның ике энесе үлде. Шагыйрь Оренбург хәрби-сәяси мәктәбендә курсант була.</p>
            <p>1922 елның ноябрендә Казанга килә, тиздән газета-журналларда басыла башлый. 1923 елда «Көрәш җырлары» жыентыгында шигырьләр циклы дөнья күрә. Казан Шәрык педагогика институты каршындагы рабфакка укырга керә.</p>
          </div>

          <div className="my-8 reveal-section opacity-0">
            <PhotoGallery photos={[
              { url: photo1, caption: 'Студент рабфака. 1923 ел' },
              { url: photo3, caption: 'Уком бюросы 1925 ел. Утыралар: Зайцев, Юдохин, Яковлев; басы торалар: Заикин, Джалиль, Сивожелезов' },
            ]} />
          </div>

          <div className="space-y-5 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>1926 елда РКП(Б) әгъзасы була. Бик күп яза: шигырьләр, поэмалар, балладалар, фельетоннар.</p>
            <p>1927 ел — МДУ этнология факультеты студенты, параллель — татар балалар журналы мөхәррире. Бераз соңрак ВЛКСМ Үзәк Комитетының татар-башкорт секциясе бюросы секретаре.</p>
          </div>

          <div className="my-8 reveal-section opacity-0">
            <PhotoGallery photos={[
              { url: photo4, caption: 'Муса әнисе Рәхимә һәм сеңлесе Хәдичә белән. 1926 ел' },
              { url: photo5, caption: 'М.Джалиль среди журналистов: З.Курмашев, Ю.Гайса, В.Садри, М.Джалиль. 10 декабря 1934 г.' },
            ]} />
          </div>

          <div className="space-y-5 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>Тулай торакта аның бүлмәдәше Варлам Шаламов була. «Студент Муса Жалилов» хикәясендә язды:</p>
            <blockquote className="quote-block px-6 py-4 rounded-r">
              <p className="italic text-muted-foreground text-sm leading-relaxed">
                «Муса Джалиль кыска буйлы, физик яктан бик сәламәт егет иде. Татар егете булганлыктан, ул аеруча ачык булуы белән аерылып торды. Аның бу гадәтен Мәскәү студентлары бигрәк тә үз итте.»
              </p>
            </blockquote>
            <p>1931 елда «Коммунист» газетасында әдәбият бүлеге мөдире. 1934 елда Мәскәү консерваториясе каршындагы Татар опера студиясенең әдәби бүлек мөдире була.</p>
          </div>


        </div>
      </section>

      {/* ═══════════ ШӘХСИ ТОРМЫШЫ ═══════════ */}
      <section id="shakhsi" className="py-20 px-4 border-t border-border" style={{ background: 'hsl(220 12% 10%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="reveal-section opacity-0 mb-12">
            <p className="text-primary/50 text-xs tracking-[0.3em] uppercase mb-2">03</p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Шәхси тормышы</h2>
            <div className="gold-line max-w-20" />
          </div>
          <div className="space-y-5 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>1929 елда Муса Мәскәүдә укыганда <strong className="text-foreground">Рәйсә Сәетгалиева</strong> белән таныша. 1931 елда никах кыялар. Рәйсә — аның тормышта таянычы, иҗатта рухландыручысы.</p>
            <p><strong className="text-foreground">1935 елда</strong> кызы <strong className="text-foreground">Чулпан</strong> туа. Шагыйрь аны бик ярата иде. Хәтта Моабит зинданында да кызы турында уйлый, аңа шигырьләр багышлый.</p>
          </div>
          <div className="my-8 reveal-section opacity-0">
            <blockquote className="quote-line pl-6 py-2 max-w-sm mx-auto">
              <p className="italic text-foreground/65 text-lg leading-relaxed" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                Чулпаным, балам минем,<br />Якты йолдызым минем.
              </p>
              <footer className="mt-2 text-primary text-xs font-medium">— Муса Джалиль</footer>
            </blockquote>
          </div>
          <div className="space-y-4 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>Муса иптәшлекне бик кадерли иде. Аның тирәсендә шагыйрьләр, язучылар, музыкантлар туплана: Хәсән Туфан, Гадел Кутуй, Фатих Кәрим.</p>
          </div>
        </div>
      </section>

      {/* ═══════════ СУГЫШ ═══════════ */}
      <section id="sugush" className="py-20 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-section opacity-0 mb-12">
            <p className="text-primary/50 text-xs tracking-[0.3em] uppercase mb-2">04</p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Сугыш юлы һәм әсирлек</h2>
            <div className="gold-line max-w-20" />
          </div>
          <div className="space-y-5 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>1941 елның июнендә Бөек Ватан сугышы башлана. Муса фронтка китүне сораган гариза бирә — ул сугышны якыннан күрергә, халкы өчен сугышырга тели. Журналистлар берлеге исеменнән фронтка корреспондент булып китә.</p>
            <p><strong className="text-foreground">1942 елның 26 июнендә</strong> Волхов фронтында чолганышуда авыр яраланып, аңсыз хәлдә тоткынлыкка алына.</p>
            <p>Тоткынлыкта «Идел-Урал легионы»на кереп яшерен оешма төзи. Максат — солдатларны фашизмга каршы күтәрелергә өндәү.</p>
            <p><strong className="text-foreground">1943 елда</strong> гестапо оешманы ачыклый. Муса Берлинның <strong className="text-foreground">Моабит</strong> төрмәсенә ябыла.</p>
          </div>
          <div className="mt-8 space-y-2.5 reveal-section opacity-0">
            {[
              { year: '1941', text: 'Фронтка корреспондент булып китү' },
              { year: '26.06.1942', text: 'Яраланып тоткынлыкка алыну' },
              { year: '1942–1943', text: 'Яшерен оешма эшчәнлеге' },
              { year: '1943', text: 'Гестапо кулга ала. Моабит төрмәсе' },
              { year: '25.08.1944', text: 'Плетзензее. Гильотинада үлем' },
            ].map(item => (
              <div key={item.year} className="flex gap-5 items-center p-3 rounded-lg border border-border/50 bg-card">
                <span className="text-primary font-mono text-xs min-w-24 flex-shrink-0 font-semibold">{item.year}</span>
                <span className="text-foreground/70 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ МОАБИТ ═══════════ */}
      <section id="moabit" className="py-20 px-4 border-t border-border" style={{ background: 'hsl(220 12% 10%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="reveal-section opacity-0 mb-12">
            <p className="text-primary/50 text-xs tracking-[0.3em] uppercase mb-2">05</p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Моабит тәфтәрләре</h2>
            <div className="gold-line max-w-20" />
          </div>
          <div className="space-y-5 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>Ике кечкенә дәфтәр — гомер хакы белән язылган 115 шигырь. Тимер кафеслар артында, үлем сагында. Шагыйрь үзе исән калмас дип белгән, ләкин шигырьләре яшәсен дип теләгән.</p>
            <p>Беренче дәфтәрне бельгиялек Андре Тиммерманска тапшыра. Ул аны Советлар союзы илчелегенә китерә. Сугыш бетеп, ике дәфтәр дә Казанга килеп ирешә.</p>
          </div>

          <div className="my-10 space-y-5 reveal-section opacity-0">
            {[
              { title: 'Кыю кеше', lines: 'Алга барсаң — үлем,\nАртка борылсаң — үлем.\nКыю кеше алга бара\nУлем аша — мәңгелеккә.' },
              { title: 'Сандугач һәм чишмә', lines: 'Сандугач әйтә чишмәгә:\n— Ни өчен еларсың, чишмә?\n— Тау арасында кысылдым,\nИрек теләдем — бирмәде.' },
            ].map((poem, i) => (
              <blockquote key={i} className="quote-line pl-6 py-2">
                <p className="text-primary/50 text-xs uppercase tracking-widest mb-2 font-medium">{poem.title}</p>
                <p className="italic text-foreground/65 leading-relaxed text-base" style={{ fontFamily: 'Bebas Neue, sans-serif', whiteSpace: 'pre-line' }}>{poem.lines}</p>
                <footer className="mt-2 text-primary text-xs font-medium">— Муса Джалиль, Моабит</footer>
              </blockquote>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 reveal-section opacity-0">
            {[
              { year: '1953', text: 'Беренче нәшер' },
              { year: '1956', text: 'Советлар Союзы Герое' },
              { year: '1957', text: 'Ленин премиясе' },
            ].map(item => (
              <div key={item.year} className="text-center p-4 rounded-lg border border-border bg-card">
                <p className="text-xl font-bold text-primary mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{item.year}</p>
                <p className="text-xs text-muted-foreground leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ДЖӘЛИЛЧЕЛӘР ═══════════ */}
      <section id="jalilcheler" className="py-20 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-section opacity-0 mb-12">
            <p className="text-primary/50 text-xs tracking-[0.3em] uppercase mb-2">06</p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Джәлилчеләр</h2>
            <div className="gold-line max-w-20" />
          </div>
          <div className="space-y-4 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>Муса Джалиль фашист тоткынлыгында ялгыз сугышмады. Тарихта алар <strong className="text-foreground">«Джәлилчеләр»</strong> исеме белән мәшһүр. 11 кешенең барысы да 1944 елның 25 августында Плетзензее төрмәсендә гильотинада үтерелә.</p>
          </div>
          <div className="mt-8 grid gap-2 reveal-section opacity-0">
            {jalilchelerList.map((person, i) => (
              <div key={i} className="flex items-center gap-4 p-3.5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                <span className="text-primary/40 font-mono text-xs w-6 text-right flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="text-sm font-medium text-foreground">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-lg border border-primary/20 bg-primary/5 text-center reveal-section opacity-0">
            <p className="text-primary font-bold text-xl mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>25 август 1944</p>
            <p className="text-muted-foreground text-sm">Плетзензее. Берлин. 11 батыр мәңгелеккә китте.</p>
          </div>
        </div>
      </section>

      {/* ═══════════ ИҖАТ ═══════════ */}
      <section id="ijat" className="py-20 px-4 border-t border-border" style={{ background: 'hsl(220 12% 10%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="reveal-section opacity-0 mb-12">
            <p className="text-primary/50 text-xs tracking-[0.3em] uppercase mb-2">07</p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Иҗат</h2>
            <div className="gold-line max-w-20" />
          </div>
          <div className="space-y-4 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>Муса Джалиль — XX гасыр татар поэзиясенең иң яктырак вәкиле. Аның иҗаты гаять киң: шигырьләр, поэмалар, балладалар, опера либреттолары, балалар поэзиясе, публицистика.</p>
          </div>
          <div className="mt-8 space-y-3 reveal-section opacity-0">
            {[
              { period: '1919–1927', title: 'Беренче шигырьләр', desc: 'Революция, иреклек, яшьлек темалары.' },
              { period: '1927–1934', title: 'Мәскәү чоры', desc: 'Лирика тирәнәя. Мәхәббәт, дуслык, Ватан. Балалар шигырьләре.' },
              { period: '1934–1941', title: 'Опера иҗаты', desc: '«Алтынчәч» либреттосы. Татар сәхнәсе.' },
              { period: '1941–1942', title: 'Фронт', desc: 'Сугыш, ватан саклау, батырлык.' },
              { period: '1943–1944', title: 'Моабит дәфтәрләре', desc: 'Зинданда 115 шигырь.' },
            ].map(item => (
              <div key={item.period} className="flex gap-5 p-4 rounded-lg border border-border bg-card">
                <div className="text-primary text-xs font-medium min-w-24 pt-0.5 flex-shrink-0">{item.period}</div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-0.5">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ БҮГЕНГЕ КӨН ═══════════ */}
      <section id="bugen" className="py-20 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-section opacity-0 mb-12">
            <p className="text-primary/50 text-xs tracking-[0.3em] uppercase mb-2">08</p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Бүгенге көн</h2>
            <div className="gold-line max-w-20" />
          </div>
          <div className="space-y-4 text-foreground/70 leading-relaxed reveal-section opacity-0">
            <p>Муса Джалиль 1944 елда дошман тарафыннан үтерелде. Ләкин аның исеме — мәңгелек.</p>
          </div>
          <div className="mt-8 space-y-3 reveal-section opacity-0">
            {[
              { place: 'Казан', desc: 'Кремль мәйданында монумент (1966). Татар дәүләт академик опера театры — Муса Джалиль исемендә.' },
              { place: 'Мәскәү', desc: 'Театральная мәйданында монумент.' },
              { place: 'Орск', desc: 'Шагыйрь бала чагын үткәргән йорт-музей.' },
              { place: 'Берлин', desc: 'Плетзензее истәлек урыны.' },
              { place: 'Дөнья', desc: '60+ телгә тәрҗемә. Муса Джалиль исемендәге премия.' },
            ].map(item => (
              <div key={item.place} className="flex gap-5 p-4 rounded-lg border border-border bg-card">
                <span className="text-primary font-semibold text-sm min-w-16 flex-shrink-0">{item.place}</span>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center reveal-section opacity-0">
            <div className="gold-line max-w-28 mx-auto mb-8" />
            <div className="w-28 h-40 rounded-xl overflow-hidden portrait-frame mx-auto mb-6">
              <img src={PORTRAIT_URL} alt="Муса Джалиль" className="w-full h-full object-cover object-top" />
            </div>
            <p className="text-muted-foreground text-xs tracking-widest uppercase">1906 — 1944</p>
            <p className="text-primary mt-1 text-lg" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Муса Мостафа улы Джалилов</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-4 text-center">
        <div className="gold-line max-w-32 mx-auto mb-6" />
        <p className="text-muted-foreground text-xs tracking-wider mb-2">
          © 2026 — Муса Мостафа улы Җәлил (1906–1944). Барлык хокуклар сакланган.
        </p>
        <p className="text-primary/60 text-xs tracking-widest uppercase" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.2em' }}>
          Лилия Кәримова
        </p>
      </footer>

    </div>
  );
}