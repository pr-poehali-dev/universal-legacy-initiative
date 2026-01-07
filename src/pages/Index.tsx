import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

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
      'https://cdn.poehali.dev/files/PHOTO-2025-03-27-04-15-57.jpg'
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
    content: '«Татар теле ул – урам теле, ломовойлар теле, әдәби гыйльми тел булырга сәләте юк аның», дигән карашлар яшәгән заманда, Каюм Насыйри халкыбызның туган телен ялкынлы чыгышлар белән яклап чыга: «Ялган, яла бу! Без – татарлар, телебез – татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел. Бүтән телләрдән бер дә ким түгел, эшләмәгәнлек сәбәпле генә ул шулай артта калган». Татар теленең фән теле була алуын, моңа аның тулы хакы һәм мөмкинлекләре барлыгын исбат итә.\n\nКаюм Насыйри татар лексикографиясенең нигезен салучы. Ул - "Лөгать китабы" һәм "Ләһҗәи татари"ның авторы. «Ләһҗәи татари» аңлатмалы сүзлегенә кереш сүзендә Каюм Насыйри милли тел нормаларын эшләүнең авырлыгын болай сурәтли: «Безнең телне моңарчы беркем дә фән теле буларак өйрәнмәгәнлектән, ул йокы хәлендә озак булган һәм артта калган. Мин, телебезгә утыз биш ел хезмәт итеп, бик аз нәтиҗәләргә ирештем. Күпме тырышсам, шулкадәр газаплар да күрдем. Үз милләтемне "татар" дип атадым - кайберәүләргә ошамады; телебезне "татар теле", дидем, шулай ук кабул итәргә теләмәделәр».',
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

const Index = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    sectionRefs.current[sectionId]?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
    setIsMenuOpen(false);
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

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-blue-50/30">
      {/* Адаптивная навигация */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h2 className="text-xl font-bold text-primary">Каюм Насыйри</h2>
            
            {/* Мобильная кнопка меню */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>

            {/* Десктопное меню */}
            <div className="hidden md:flex gap-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => scrollToSection(section.id)}
                >
                  <Icon name={section.icon as any} size={16} />
                  <span className="hidden lg:inline">{section.title}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Мобильное меню */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg transition-colors text-left"
                  onClick={() => scrollToSection(section.id)}
                >
                  <Icon name={section.icon as any} size={20} />
                  <span>{section.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero секция */}
      <section className="relative py-16 md:py-24 overflow-hidden reveal-section">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 md:mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/files/PHOTO-2025-03-30-17-08-30.jpg" 
                  alt="Каюм Насыйри"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                Каюм Насыйри
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                1825-1902
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Язучы
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Галим
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Педагог
                </span>
              </div>
            </div>
            
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardContent className="p-6 md:p-8">
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  Каюм Насыйри - XIX гасыр татар фәне, мәгърифәте һәм әдәбиятының күренекле вәкиле. Ул татар халкының мәдәни һәм фәнни мирасын саклау һәм үстерүдә зур роль уйнаган. Аның эшчәнлеге язу, фән, педагогика һәм башка күп өлкәләрне үз эченә ала.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Button 
                onClick={() => navigate('/video')}
                size="lg"
                className="gap-2"
              >
                <Icon name="Play" size={20} />
                Видеоязмага күчү
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Основные секции */}
      <div className="container mx-auto px-4 py-12 space-y-16 md:space-y-24">
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="reveal-section opacity-0 translate-y-8 transition-all duration-700"
          >
            <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={section.icon as any} size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    {section.title}
                  </h2>
                </div>

                {section.subtitle && (
                  <p className="text-lg text-muted-foreground mb-6 italic">
                    {section.subtitle}
                  </p>
                )}

                {section.content && (
                  <div className="prose prose-lg max-w-none mb-6">
                    {section.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4 text-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.recipeTitle && section.recipe && (
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      {section.recipeTitle}
                    </h3>
                    <div className="space-y-3">
                      {section.recipe.split('\n\n').map((part, idx) => (
                        <p key={idx} className="text-foreground leading-relaxed">
                          {part}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {section.quotesTitle && section.quotes && (
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-8 text-center whitespace-pre-line">
                      {section.quotesTitle}
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      {section.quotes.map((quote, idx) => (
                        <Card key={idx} className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex gap-4">
                              <Icon name="Quote" size={24} className="text-primary flex-shrink-0 mt-1" />
                              <p className="text-foreground leading-relaxed">
                                {quote}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {section.images && section.images.length > 0 && (
                  <div className={`grid gap-4 mt-6 ${
                    section.imageGallery 
                      ? 'md:grid-cols-3' 
                      : 'md:grid-cols-1 max-w-2xl mx-auto'
                  }`}>
                    {section.images.map((image, idx) => (
                      <div 
                        key={idx}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${section.title} ${idx + 1}`}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Icon 
                            name="ZoomIn" 
                            size={32} 
                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        ))}
      </div>

      {/* Видео секция */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 reveal-section">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Әлеге видеоязманы карагыз
                </h2>
                <p className="text-muted-foreground">
                  Каюм Насыйри турында тулырак мәгълүмат
                </p>
              </div>
              <Button 
                onClick={() => navigate('/video')}
                size="lg"
                className="w-full gap-2"
              >
                <Icon name="Play" size={24} />
                Видеоны карау
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base">
            © 2026 - Татар мәдәниятен саклау һәм үстерү проекты. Лилия Кәримова
          </p>
        </div>
      </footer>

      {/* Модальное окно для просмотра изображений */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Index;
