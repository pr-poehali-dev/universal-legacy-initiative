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

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-blue-50/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://cdn.poehali.dev/files/Снимок экрана 2026-01-05 в 19.53.50.png" 
                alt="Каюм Насыйри"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            ҮЗ ХАЛКЫН ДАНЛАГАН ТАТАРЛАР:
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            КАЮМ НАСЫЙРИ
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-8">
            (1825-1902)
          </p>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-bold max-w-3xl mx-auto">
            Гомере буе халыкка фидакарьләрчә хезмәт итеп, милләт мәнфәгатьләрен үзенең яшәү кыйбласы дип билгеләгән Каюм Насыйри дөньяда 77 ел яшәп вафат булган. Аның ярты гасырдан артык гомере дәрвишләрчә милләткә хезмәт итүгә багышланган.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-12 reveal-section">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://drive.google.com/file/d/1gvSNY0J0R3XYS-d4-KbL15SmvBdJlb_g/preview"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Text Blocks After Video */}
      <section className="container mx-auto px-4 py-12 reveal-section">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-bold">
            Каюм Насыйри тел гыйлеме, әдәбият, фольклор, тарих, педагогика һәм дидактика, география, биология, химия, медицина кебек фәннәрдә татар халкы һәм Казан губернасы өчен новатор була. Әдипнең гаять күпкырлы эшчәнлеге төп ике зур тармакка бүленә: гыйльми-мәгърифәтчелек һәм әдәби-тәрҗемәчелек юнәлешләре.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Ватаным Татарстан" газетасы оештырган "Каюм бабай дәресе" конкурсының «Каюм Насыйри эзләреннән» номинациясенә укытучылар һәм тәрбиячеләр, Каюм Насыйри хезмәтләрен файдаланып, билгеле бер чара уздырырга һәм ул чарадан видеоязма әзерләргә тиеш иде. Бу юнәлештә җибәргән иҗат эшләре арасында «Адымнар – белемгә һәм бердәмлеккә юл» күптелле мәгариф комплексы укытучылары Рамил Ханнанов һәм Нариман Фәхрисламов – җиңүчеләрнең берсе. Әлеге видеоязманы сезгә дә тәкъдим итәбез.
          </p>
          
          <div className="pt-4">
            <a 
              href="https://vatantat.ru/news/kaium-babai-dasa-vt-ukytucylar-ham-tarbiiacelar-arasynda-uzdyrgan-baigega-iomgak-iasady-110417"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
            >
              Тулырак укырга
              <Icon name="ExternalLink" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Sections Menu */}
      <section className="container mx-auto px-4 py-16 reveal-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sections.map((section) => (
              <Card 
                key={section.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
                onClick={() => scrollToSection(section.id)}
              >
                <CardContent className="p-6 text-center">
                  <Icon 
                    name={section.icon} 
                    className="w-12 h-12 mx-auto mb-3 text-primary"
                  />
                  <h3 className="font-semibold text-sm">{section.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements List */}
      <section className="container mx-auto px-4 py-16 reveal-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Түбәндәге фәннәр буенча хезмәтләр авторы
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-medium text-gray-800">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section) => (
        <section
          key={section.id}
          ref={(el) => (sectionRefs.current[section.id] = el)}
          className="container mx-auto px-4 py-16 reveal-section"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Icon 
                name={section.icon} 
                className="w-12 h-12 text-primary flex-shrink-0"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {section.title}
              </h2>
            </div>

            {section.subtitle && (
              <p className="text-xl text-gray-700 mb-6 italic">
                {section.subtitle}
              </p>
            )}

            {section.content && (
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            )}

            {section.recipeTitle && section.recipe && (
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-amber-900 mb-4">
                  {section.recipeTitle}
                </h3>
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {section.recipe}
                </p>
              </div>
            )}

            {section.images && section.images.length > 0 && (
              <div className={`grid gap-6 mb-8 ${
                section.imageGallery 
                  ? 'md:grid-cols-3' 
                  : section.images.length === 2 
                    ? 'md:grid-cols-2' 
                    : 'md:grid-cols-1'
              }`}>
                {section.images.map((image, index) => (
                  <div 
                    key={index}
                    className="cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image}
                      alt={`${section.title} ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}

            {section.quotesTitle && section.quotes && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary whitespace-pre-line">
                  {section.quotesTitle}
                </h3>
                <div className="space-y-6">
                  {section.quotes.map((quote, index) => (
                    <div key={index} className="flex gap-4">
                      <Icon name="Quote" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-800 leading-relaxed italic">
                        {quote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Memory Section */}
      <section className="container mx-auto px-4 py-16 reveal-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Каюм Насыйри исеме мәңгелек
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {memoryPhotos.map((photo, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(photo.url)}
              >
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-4 text-center text-lg font-medium text-gray-800">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-600">
          © 2026 - Татар мәдәниятен саклау һәм үстерү проекты. Лилия Кәримова
        </p>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <style>{`
        .reveal-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Index;
