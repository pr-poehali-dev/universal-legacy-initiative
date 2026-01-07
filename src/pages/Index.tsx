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
  'Татар әдәбияты',
  'Татар теле',
  'Татар тарихы',
  'География',
  'Биология',
  'Этнография',
  'Фольклор',
  'Педагогика һәм дидактика',
  'Химия',
  'Медицина',
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

  const scrollToSection = (sectionId: string) => {
    sectionRefs.current[sectionId]?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
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
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <section className="mb-16 text-center reveal-section opacity-0">
          <div className="inline-block mb-6">
            <img 
              src="https://cdn.poehali.dev/files/nasiri-art.jpg" 
              alt="Каюм Насыйри"
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover shadow-2xl border-4 border-primary/20 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Каюм Насыйри
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            1825-1902
          </p>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-foreground/90">
            <p className="text-2xl font-bold text-primary">
              Гомере буе халыкка фидакарьләрчә хезмәт итеп, җәмәгатькә зур хезмәт күрсәткән галим.
            </p>
            <p>
              Каюм Насыйри - беренче татар галиме, җәмәгать эшлеклесе. Казанда туып үскән. Әтисе - мәчет имамы. Яшь чагыннан укырга, язарга өйрәнгән. Ике медрәсәдә белем алып чыккач, Казан университеты янындагы Мөгаллимнәр семинариясенә укырга керә. <a href="https://tt.wikipedia.org/wiki/%D0%9A%D0%B0%D1%8E%D0%BC_%D0%9D%D0%B0%D1%81%D1%8B%D0%B9%D1%80%D0%B8" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Тулырак укырга</a>
            </p>
            <p className="text-2xl font-bold text-primary">
              Каюм Насыйри тел гыйлеме, әдәбият, фольклор, география, тарих, биология, химия, астрономия өлкәсендә беренче татар галиме.
            </p>
          </div>
        </section>

        <section className="mb-16 reveal-section opacity-0">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Icon name="BookMarked" className="w-8 h-8 text-primary" />
            Түбәндәге фәннәр буенча хезмәтләр авторы
          </h2>
          <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <Icon name="CheckCircle" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16 reveal-section opacity-0">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
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
              className="reveal-section opacity-0 scroll-mt-8"
            >
              <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3 text-primary">
                    <Icon name={section.icon} className="w-8 h-8" />
                    {section.title}
                  </h2>
                  
                  {section.subtitle && (
                    <p className="text-xl font-bold text-accent mb-6">
                      {section.subtitle}
                    </p>
                  )}
                  
                  {section.content && (
                    <p className="text-lg leading-relaxed text-foreground/90 mb-6 whitespace-pre-line">
                      {section.content}
                    </p>
                  )}

                  {section.recipeTitle && section.recipe && (
                    <div className="mt-6 p-6 bg-muted/50 rounded-lg border-2 border-primary/10">
                      <h3 className="text-xl font-bold text-accent mb-4">
                        {section.recipeTitle}
                      </h3>
                      <p className="text-lg leading-relaxed whitespace-pre-line text-foreground/90">
                        {section.recipe}
                      </p>
                    </div>
                  )}

                  {section.quotesTitle && section.quotes && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-accent mb-6 whitespace-pre-line">
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
                    <div className={`mt-6 ${section.imageGallery ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex justify-center'}`}>
                      {section.images.map((image, index) => (
                        <img 
                          key={index}
                          src={image} 
                          alt={`${section.title} ${index + 1}`}
                          className={`rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 ${
                            section.imageGallery ? 'w-full h-64 object-cover' : 'max-w-md'
                          }`}
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
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Icon name="Sparkles" className="w-8 h-8 text-primary" />
            Каюм Насыйри исеме мәңгелек
          </h2>
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <p className="text-xl font-bold text-accent mb-6">
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
                    <p className="mt-3 text-center text-sm font-bold text-accent">
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
          <div className="relative max-w-7xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Зурайтылган рәсем"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button 
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
