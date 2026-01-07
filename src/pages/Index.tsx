import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Section {
  id: string;
  title: string;
  icon: string;
  content: string;
  subtitle?: string;
  image?: string;
  images?: string[];
  recipeTitle?: string;
  recipe?: string;
  quotesTitle?: string;
  quotes?: string[];
  imageGallery?: boolean;
}

const sections: Section[] = [
  {
    id: 'yazuchy',
    title: 'Язучы',
    icon: 'BookOpen',
    subtitle: 'Каюм Насыйриның татар әдәбиятына керткән өлеше шактый зур.',
    content: 'Әдип - "Әбүгалисина кыйссасы", "Кырык вәзир", "Әхлак рисаләсе", "Тәрбич китабы" һ.б. әсәрләрнең авторы. Каюм Насыйри үз әсәрләрендә гореф-гадәтләр, традицияләр, әхлак, иман, гаилә мөнәсәбәтләре, бала тәрбиясе мәсьәләләрен яктырта. Уңай әхлакый сыйфатларны галим укучы өчен үрнәк итеп куя, ә кешенең рухи үсешенә комачаулый торган сыйфатларны, киресенчә, тәнкыйтьләп фаш итә. Әсәрләрнең язылганнынан соң ике гасырга якын вакыт узувына карамастан, аларның эстетик әһәмияте әле дә үз кыйммәтен югалтмый.',
    images: [
      'https://cdn.poehali.dev/files/IMG_1701.jpg',
      'https://cdn.poehali.dev/files/IMG_1696.jpg',
      'https://cdn.poehali.dev/files/IMG_1695.jpg'
    ],
    imageGallery: true,
  },
  {
    id: 'geograf',
    title: 'Географ',
    icon: 'Map',
    subtitle: 'Каюм Насыйри – Казан губернасының беренче картасы, Россия мәчетләрендә кыйбланы төгәл билгеләү картасы һ.б. дистәләгән карталар авторы',
    content: 'Каюм Насыйри – казанышлары Россия фәнни җәмәгатьчелеге тарафыннан танылган беренче татар этнографы һәм географы. Казан губернасының тәүге географик картасында ул мөселман мәчетләренең төп урыны – михрабның төгәл билгеләнешен ачыклауны максат итеп куйган. Каюм Насыйри әлеге картасында Евразия кыйтгасының шактый өлеше өчен, шулай ук Көнбатышта Санкт-Петербургтан алып Көнчыгышта Көньяк Кытай диңгезе озынлыгына кадәр мәчетләрнең кыйблага дөрес юнәлешен күрсәтә.',
    images: [
      'https://cdn.poehali.dev/files/Снимок экрана 2026-01-06 в 16.36.46.png',
      'https://cdn.poehali.dev/files/photo_2026-01-06 16.59.48.jpeg',
      'https://cdn.poehali.dev/files/photo_2026-01-06 16.59.09.jpeg'
    ],
    imageGallery: true,
  },
  {
    id: 'biolog',
    title: 'Биолог',
    icon: 'Leaf',
    content: 'Каюм Насыйри дарулар кулланмаган. Ул гомер буе дару үләннәре җыйган, шулар белән үзе дә, башкаларны да дәвалаган. Үзенең тәҗрибәсен "Гөлзар вә чаманзар" ("Чәчәкләр һәм үләннәр") китабында тасвирлаган. Бу китабында галим Россия территориясендә үскән 192 үсемлекнең үзлекләрен, 155 авыруны һәм аларны үләннәр ярдәмендә дәвалау ысулларын җентекләп тасвирлаган.',
    images: [
      'https://cdn.poehali.dev/files/PHOTO-2025-03-27-04-15-57.jpg',
      'https://cdn.poehali.dev/files/Снимок экрана 2026-01-07 в 09.55.17.png'
    ],
    imageGallery: false,
  },
  {
    id: 'kulinar',
    title: 'Аш-су остасы',
    icon: 'ChefHat',
    content: 'Каюм Насыйри татар ашлары буенча да кыйммәтле эшләр язган. Ул традицион татар ашларының рецептларын җыйган, аларның әзерләү ысулларын детальләп тасвирлаган.',
    recipeTitle: 'Каюм Насыйридан алма күпертмәсе рецепты:',
    recipe: 'Ун алманы юка гына тура. Камыр яса: биш йомырка сыт, ике кашык май сал, бик яхшы тугла, ике кашык вак шикәр сал, бер стакан каймак сал, он салып из – камыр яса, бик куе булмасын, кашык белән алырга мөмкин булсын. Табаңны яхшылап кыздыр, табага май сал. Кашык белән камырыңны алып, өстенә бер ике алма куй, табага сал.\n\nМөрәбба белән аша.',
    images: [
      'https://cdn.poehali.dev/files/PHOTO-2025-03-30-17-01-07.jpg'
    ],
    imageGallery: false,
  },
  {
    id: 'suzleklar',
    title: 'Тел галиме',
    icon: 'BookText',
    content: '«Татар теле ул – урам теле, ломовойлар теле, әдәби гыйльми тел булырга сәләте юк аның», дигән карашлар яшәгән заманда, Каюм Насыйри халкыбызның туган телен ялкынлы чыгышлар белән яклап чыга: «Ялган, яла бу! Без – татарлар, телебез – татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел. Бүтән телләрдән бер дә ким түгел, эшләмәгәнлек сәбәпле генә ул шулай артта калган». Каюм Насыйри татар теленең фән теле була алуын, моңа аның тулы хакы һәм мөмкинлекләре барлыгын исбат итә.\n\nКаюм Насыйри татар лексикографиясенең нигезен салучы. Ул - "Лөгать китабы" һәм "Ләһҗәи татари"ның авторы. «Ләһҗәи татари» аңлатмалы сүзлегенә кереш сүзендә Каюм Насыйри милли тел нормаларын эшләүнең авырлыгын болай сурәтли: «Безнең телне моңарчы беркем дә фән теле буларак өйрәнмәгәнлектән, ул йокы хәлендә озак булган һәм артта калган. Мин, телебезгә утыз биш ел хезмәт итеп, бик аз нәтиҗәләргә ирештем. Күпме тырышсам, шулкадәр газаплар да күрдем. Үз милләтемне "татар" дип атадым - кайберәүләргә ошамады; телебезне "татар теле", дидем, шулай ук кабул итәргә теләмәделәр».',
    images: [
      'https://cdn.poehali.dev/files/photo_2026-01-07 08.28.00.jpeg',
      'https://cdn.poehali.dev/files/photo_2026-01-07 08.28.04.jpeg',
      'https://cdn.poehali.dev/files/photo_2026-01-07 08.28.06.jpeg'
    ],
    imageGallery: true,
  },
  {
    id: 'suzostasy',
    title: 'Сүз остасы',
    icon: 'Quote',
    content: '',
    quotesTitle: 'Гасырлар хикмәте: Каюм Насыйриның\nканатлы гыйбарәләре',
    quotes: [
      'Без - татарлар, телебез - татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел ул».',
      'Әй угыл, мал табуның юллары бик күптер. Нинди генә юл булмасын, малны хәләлдән табу фарыздыр. Хәләлдән килгән мал – тотрыклы буладыр. Хәрәм мал исә адәмгә йокмыйдыр, тиз кулыңнан китәр, җаваплылыгы һәм авырлыклары гына сиңа калыр. Әмма хәләлдән килгән малыңны саклап тот, хәрәм җиргә сарыф итмә. Малны саклау малны табу һәм җыюңан авыррак. Саклап тота белмәгәннәре сәбәпле, никадәр байлар малсыз калдылар».',
      'Бәс, әй угыл, нәфсең симергән саин, ул сине һәлакәткә тартыр. Дөньяда баһадир шул кешедер ки, — нәфесен җиңәр».',
      'Балыкчы — насыйб булмаган балыкны тоталмый. Балыкның әҗәле җитмәсә, кармакка эләкми. Шулай инде, халык арасында гел фәкыйрь шелтәгә тарый».',
      'Халыкка икмәк-тоз күрсәтмәгән кешенең үлгәч тә исемен телгә алмаслар. Тереклеге белән сөендермәгән кешенең үлеменә дә бик кайгырмаслар».',
      'Әй угыл, яхшылыкның кадерен белмәгән кешедән ерак булган яхшы. Берәүгә бер яхшылыгың тисә — сөйләп йөрмә, берәүдән яхшылык күрсәң — фаш кыйл, онытма».',
      'Берәүнең мохтаҗ икәнен беләсән икән, вә һәм, миннән хаҗәт теләр, дигән уең бар икән, үзе сорамас борын тизрәк бирә күр».',
      'Оста булган кеше, байлыгыннан мәхрүм калса да, бәла-каза күрмәячәк. Һөнәргә өйрәнегез, әдәп сакларга өйрәнегез».',
      'Кешегә язмышы сынау җибәрмичә, үзенең сәламәтлегенә һәм иминлегенә шатлана алмас».',
      'Хезмәт белән тапкан бер тиен, чит кеше кулыннан алынган мең тиеннән кыйммәтрәк».',
      'Мин күрмәгән нәрсә турында фикер йөртә алмаячакмын».',
      'Ашыгыч фикер-нәтиҗә йөртүдән сакланыгыз».',
      'Әгәр дә берәрнәсә турында тәгаен белүеңә ышанмасаң, беркайчан да әңгәмә башларга ярамый».',
      'Кыямәт көнендә синнән синең кем улы икәнеңне сорамаслар, ә синең файдалы эшләреңне сорарлар».',
      'Ипи-тозга саран булган кешене үлгәннән соң да хәтерләмәсләр. Үз хезмәтләре белән шатландырмаган, үлеме белән дә кайгыга салмас».',
      'Бер генә тапкыр ялганлыйсың икән - гомерең буена ышанычтан мәхрүм каласың».',
    ],
  },
];

const achievements = [
  'Лексикография (сүзлекләр: "Лөгать китабы", "Ләһҗәи татари")',
  'Фонетика һәм грамматика ("Кавагыйд китабет", "Әнмүзәҗ")',
  'Тарих, этнография, фольклор',
  'Табигать фәннәре ("Зирагать гыйльме", "Гөлзар вә чәмәнзар")',
  'Әдәбият ("Фәвакиһелҗөләса фил әдәбият" - беренче татар энциклопедиясе)',
  'Педагогика (арифметика, геометрия, география дәреслекләре)',
  '"Казан календаре" еллык календарен нәшер иткән (1871-1897)',
];

const memoryPhotos = [
  {
    url: 'https://cdn.poehali.dev/files/Без заголовка.jpg',
    caption: 'Каюм Насыйри яшәгән йорт'
  },
  {
    url: 'https://cdn.poehali.dev/files/PHOTO-2025-03-30-18-08-48.jpg',
    caption: 'Бакый Урманче ясаган К. Насыйри скульптура образы'
  },
  {
    url: 'https://cdn.poehali.dev/files/Снимок экрана 2026-01-07 в 08.45.32.png',
    caption: 'Каюм Насыйри хезмәтләре'
  },
  {
    url: 'https://cdn.poehali.dev/files/Снимок экрана 2026-01-07 в 09.49.09.png',
    caption: 'Каюм Насыйри музеендагы скульптура'
  }
];

const Index = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const scrollToSection = (sectionId: string) => {
    const navHeight = 80; // Height of sticky nav
    const element = sectionRefs.current[sectionId];
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-md border-b-4 border-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={scrollToTop}
              className="font-bold text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Каюм Насыйри
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-4 py-2 rounded-lg text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:via-secondary/10 hover:to-accent/10 transition-all font-medium"
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:via-secondary/10 hover:to-accent/10 transition-all font-medium"
                >
                  {section.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <section className="mb-16 text-center reveal-section opacity-0">
          <div className="inline-block mb-6">
            <img 
              src="https://cdn.poehali.dev/files/Снимок экрана 2026-01-05 в 19.53.50.png" 
              alt="Каюм Насыйри"
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover shadow-2xl border-4 border-primary/20 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            ҮЗ ХАЛКЫН ДАНЛАГАН ТАТАРЛАР:
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
            КАЮМ НАСЫЙРИ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            (1825-1902)
          </p>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-foreground/90">
            <p className="text-xl md:text-2xl font-bold text-primary indent-8">
              Гомере буе халыкка фидакарьләрчә хезмәт итеп, милләт мәнфәгатьләрен үзенең яшәү кыйбласы дип билгеләгән Каюм Насыйри дөньяда 77 ел яшәп вафат булган. Аның ярты гасырдан артык гомере дәрвишләрчә милләткә хезмәт итүгә багышланган.
            </p>
          </div>
        </section>

        <section className="mb-16 reveal-section opacity-0">
          <div className="aspect-video bg-black/5 rounded-lg overflow-hidden shadow-xl mb-8">
            <iframe
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/1gvSNY0J0R3XYS-d4-KbL15SmvBdJlb_g/preview"
              title="Каюм Насыйри турында видео"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground text-justify">
              «Ватаным Татарстан» газетасы оештырган «Каюм бабай дәресе» конкурсының «Каюм Насыйри эзләреннән» номинациясенә укытучылар һәм тәрбиячеләр, Каюм Насыйри хезмәтләрен файдаланып, билгеле бер чара уздырырга һәм ул чарадан видеоязма әзерләргә тиеш иде.
              Бу юнәлештә җибәргән иҗат эшләре арасында «Адымнар – белемгә һәм бердәмлеккә юл» күптелле мәгариф комплексы укытучылары Рамил Ханнанов һәм Нариман Фәхрисламов – җиңүчеләрнең берсе. Әлеге видеоязманы сезгә дә тәкъдим итәбез.{' '}
              <a
                href="https://vatantat.ru/news/kaium-babai-dasa-vt-ukytucylar-ham-tarbiiacelar-arasynda-uzdyrgan-baigega-iomgak-iasady-110417"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              >
                Тулырак укырга
                <Icon name="ExternalLink" className="w-4 h-4" />
              </a>
            </p>
          </div>
        </section>

        <section className="mb-16 reveal-section opacity-0">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-primary">
            <Icon name="BookMarked" className="w-8 h-8 text-primary" />
            Түбәндәге фәннәр буенча хезмәтләр авторы
          </h2>
          <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0 mt-2" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16 reveal-section opacity-0">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-primary">
            <Icon name="Navigation" className="w-8 h-8 text-primary" />
            Бүлекләр
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group p-4 rounded-xl border-2 border-primary/20 bg-card hover:bg-primary/5 hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Icon name={section.icon} className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </section>

        <div className="space-y-16">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => { sectionRefs.current[section.id] = el; }}
              className="reveal-section opacity-0 scroll-mt-24"
            >
              <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3 text-primary">
                    <Icon name={section.icon} className="w-8 h-8" />
                    {section.title}
                  </h2>
                  
                  {section.subtitle && (
                    <p className="text-xl font-bold text-primary mb-6 text-center">
                      {section.subtitle}
                    </p>
                  )}
                  
                  {section.content && (
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6 whitespace-pre-line text-justify">
                      {section.content}
                    </p>
                  )}

                  {section.recipeTitle && section.recipe && (
                    <div className="mt-6 p-6 bg-muted/50 rounded-lg border-2 border-primary/10">
                      <h3 className="text-xl font-bold text-primary mb-4 text-center">
                        {section.recipeTitle}
                      </h3>
                      <p className="text-lg leading-relaxed whitespace-pre-line text-muted-foreground text-justify">
                        {section.recipe.split('\n\n')[0]}
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground text-center mt-4">
                        {section.recipe.split('\n\n')[1]}
                      </p>
                    </div>
                  )}

                  {section.quotesTitle && section.quotes && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-primary mb-6 whitespace-pre-line text-center">
                        {section.quotesTitle}
                      </h3>
                      {section.quotes.map((quote, index) => (
                        <div 
                          key={index}
                          className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary hover:bg-muted/50 transition-colors"
                        >
                          <p className="text-lg leading-relaxed text-foreground/90 italic">
                            {quote}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.images && section.images.length > 0 && (
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                      {section.images.map((image, index) => (
                        <img 
                          key={index}
                          src={image} 
                          alt={`${section.title} ${index + 1}`}
                          className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 max-w-xs h-64 object-cover"
                          onClick={() => setSelectedImage(image)}
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>
          ))}
        </div>

        <section className="mt-16 reveal-section opacity-0">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-primary">
            <Icon name="Sparkles" className="w-8 h-8 text-primary" />
            Каюм Насыйри исеме мәңгелек
          </h2>
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <p className="text-xl font-bold text-primary mb-6 text-justify">
                Каюм Насыйри – энциклопедист галим. Аның эшчәнлеге – милләткә фидакарьләрчә хезмәт итүнең бөек үрнәге. Китаплары – хәзерге милли тормышыбыз өчен дә аваздаш булган бай хәзинә ул. Ул үз халкының дөньяви белемен булдыруга зур өлеш кертә, реформачыл агымның беренче новаторларыннан берсе була һәм татар халкы арасында фән һәм белем, мәдәниятне таратуны тормышының максаты итеп күрә.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {memoryPhotos.map((photo, index) => (
                  <div 
                    key={index}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(photo.url)}
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.caption}
                      className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                    />
                    <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                      {photo.caption}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Index;