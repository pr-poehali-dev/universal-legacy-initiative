import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  video?: string;
  videoText?: string;
  linkText?: string;
  linkUrl?: string;
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
  },
  {
    id: 'biolog',
    title: 'Биолог',
    icon: 'Leaf',
    content: 'Каюм Насыйри дарулар кулланмаган. Ул гомер буе дару үләннәре җыйган, шулар белән үзе дә, башкаларны да дәвалаган. Үзенең тәҗрибәсен "Гөлзар вә чаманзар" ("Чәчәкләр һәм үләннәр") китабында тасвирлаган. Бу  китабында галим Россия территориясында үскән 192 үсемлекнең үзлекләрен, 155 авыруны һәм аларны үләннәр ярдәмендә дәвалау ысулларыр җентекләп тасвирлаган.',
    image: 'https://cdn.poehali.dev/files/PHOTO-2025-03-27-04-15-57.jpg',
  },
  {
    id: 'kulinar',
    title: 'Аш-су остасы',
    icon: 'ChefHat',
    content: 'Каюм Насыйри татар ашлары буенча да кыйммәтле эшләр язган.\n\nУл традицион татар ашларының рецептларын җыйган, аларның әзерләү ысулларын детальләп тасвирлаган.',
    recipeTitle: 'Каюм Насыйридан алма күпертмәсе рецепты:',
    recipe: 'Ун алманы юка гына тура. Камыр яса: биш йомырка сыт, ике кашык май сал, бик яхшы тугла, ике кашык вак шикәр сал, бер стакан каймак сал, он салып из – камыр яса, бик куе булмасын, кашык белән алырга мөмкин булсын. Табаңны яхшылап кыздыр, табага май сал. Кашык белән камырыңны алып, өстенә бер ике алма куй, табага сал.\n\nМөрәбба белән аша.',
    image: 'https://cdn.poehali.dev/files/PHOTO-2025-03-30-17-01-07.jpg',
  },
  {
    id: 'suzleklar',
    title: 'Тел галиме',
    icon: 'BookText',
    content: '«Татар теле ул – урам теле, ломовойлар теле, әдәби гыйльми тел булырга сәләте юк аның», дигән карашлар яшәгән заманда, Каюм Насыйри халкыбызның туган телен ялкынлы чыгышлар белән яклап чыга: «Ялган, яла бу! Без – татарлар, телебез – татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел. Бүтән телләрдән бер дә ким түгел, эшләмәгәнлек сәбәпле генә ул шулай артта калган», – ди. Татар теленең фән теле була алуын, моңа аның тулы хакы һәм мөмкинлекләре барлыгын исбат итә.\n\nКаюм Насыйри татар лексикографиясенең нигезен салучы. Ул - "Лөгать китабы" һәм "Ләһҗәи татари"ның авторы. «Ләһҗәи татари» аңлатмалы сүзлегенә кереш сүзендә Каюм Насыйри милли тел нормаларын эшләүнең авырлыгын болай сурәтли: «Безнең телне моңарчы беркем дә фән теле буларак өйрәнмәгәнлектән, ул йокы хәлендә озак булган һәм артта калган. Мин, телебезгә утыз биш ел хезмәт итеп, бик аз нәтиҗәләргә ирештем. Күпме тырышсам, шулкадәр газаплар да күрдем. Үз милләтемне "татар" дип атадым - кайберәүләргә ошамады; телебезне "татар теле", дидем, шулай ук кабул итәргә теләмәделәр».',
    image: 'https://cdn.poehali.dev/files/photo_2026-01-07 08.28.00.jpeg',
  },
  {
    id: 'suzostasy',
    title: 'Сүз остасы',
    icon: 'Quote',
    content: '',
    quotesTitle: 'Гасырлар хикмәте: Каюм Насыйриның\nканатлы гыйбарәләре',
    quotes: [
      'Без - татарлар, телебез - татар теле, мөстәкыйль һәм төзек кагыйдәле камил тел ул.',
      'Әй угыл, мал табуның юллары бик күптер. Нинди генә юл булмасын, малны хәләлдән табу фарыздыр. Хәләлдән килгән мал – тотрыклы буладыр. Хәрәм мал исә адәмгә йокмыйдыр, тиз кулыңнан китәр, җаваплылыгы һәм авырлыклары гына сиңа калыр. Әмма хәләлдән килгән малыңны саклап тот, хәрәм җиргә сарыф итмә. Малны саклау малны табу һәм җыюңан авыррак. Саклап тота белмәгәннәре сәбәпле, никадәр байлар малсыз калдылар.',
      'Бәс, әй угыл, нәфсең симергән саин, ул сине һәлакәткә тартыр. Дөньяда баһадир шул кешедер ки, — нәфесен җиңәр.',
      'Балыкчы — насыйб булмаган балыкны тоталмый. Балыкның әҗәле җитмәсә, кармакка эләкми. Шулай инде, халык арасында гел фәкыйрь шелтәгә тарый.',
      'Халыкка икмәк-тоз күрсәтмәгән кешенең үлгәч тә исемен телгә алмаслар. Тереклеге белән сөендермәгән кешенең үлеменә дә бик кайгырмаслар.',
      'Әй угыл, яхшылыкның кадерен белмәгән кешедән ерак булган яхшы. Берәүгә бер яхшылыгың тисә — сөйләп йөрмә, берәүдән яхшылык күрсәң — фаш кыйл, онытма.',
      'Берәүнең мохтаҗ икәнен беләсән икән, вә һәм, миннән хаҗәт теләр, дигән уең бар икән, үзе сорамас борын тизрәк бирә күр.',
      'Оста булган кеше, байлыгыннан мәхрүм калса да, бәла-каза күрмәячәк. Һөнәргә өйрәнегез, әдәп сакларга өйрәнегез.',
      'Кешегә язмышы сынау җибәрмичә, үзенең сәламәтлегенә һәм иминлегенә шатлана алмас.',
      'Хезмәт белән тапкан бер тиен, чит кеше кулыннан алынган мең тиеннән кыйммәтрәк.',
      'Мин күрмәгән нәрсә турында фикер йөртә алмаячакмын.',
      'Ашыгыч фикер- нәтиҗә йөртүдән сакланыгыз.',
      'Әгәр дә берәрнәсә турында тәгаен белүеңә ышанмасаң, беркайчан да әңгәмә башларга ярамый.',
      'Кыямәт көнендә синнән синең кем улы икәнеңне сорамаслар, ә синең файдалы эшләреңне сорарлар.',
      'Ипи-тозга саран булган кешене үлгәннән соң да хәтерләмәсләр. Үз хезмәтләре белән шатландырмаган, үлеме белән дә кайгыга салмас.',
      'Бер генә тапкыр ялганлыйсың икән - гомерең буена ышанычтан мәхрүм каласың.',
    ],
  },
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-blue-50/30">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <section className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <img
              src="https://cdn.poehali.dev/files/Снимок%20экрана%202026-01-05%20в%2019.53.50.png"
              alt="Каюм Насыйри"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full mx-auto object-cover shadow-2xl border-8 border-white"
            />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium tracking-wide">
            ҮЗ ХАЛКЫН ДАНЛАГАН ТАТАРЛАР:
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            КАЮМ НАСЫЙРИ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
            (1825-1902)
          </p>
        </section>

        <section className="mb-12 animate-fade-in text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Гомере буе халыкка фидакарьләрчә хезмәт итеп, милләт мәнфәгатьләрен үзенең яшәү кыйбласы дип билгеләгән Каюм Насыйри дөньяда 77 ел яшәп вафат булган. Аның ярты гасырдан артык гомере дәрвишләрчә милләткә хезмәт итүгә багышланган.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Безнең сайтта сез Каюм Насыйри эшчәнлеге белән таныша аласыз.
            </p>
          </div>
        </section>

        <section className="mb-16 animate-scale-in">
          <Card className="overflow-hidden shadow-xl border-2">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1gvSNY0J0R3XYS-d4-KbL15SmvBdJlb_g/preview"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Каюм Насыйри видео"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 animate-fade-in text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-bold leading-relaxed mb-6">
              Каюм Насыйри тел гыйлеме, әдәбият, фольклор, тарих, педагогика һәм дидактика, география, биология, химия, медицина кебек фәннәрдә татар халкы һәм Казан губернасы өчен новатор була. Әдипнең гаять күпкырлы эшчәнлеге төп ике зур тармакка бүленә: гыйльми-мәгърифәтчелек һәм әдәби-тәрҗемәчелек юнәлешләре.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              "Ватаным Татарстан" газетасы оештырган "Каюм бабай дәресе" конкурсының «Каюм Насыйри эзләреннән» номинациясенә укытучылар һәм тәрбиячеләр, Каюм Насыйри хезмәтләрен файдаланып, билгеле бер чара уздырырга һәм ул чарадан видеоязма әзерләргә тиеш иде. Бу юнәлештә җибәргән иҗат эшләре арасында «Адымнар – белемгә һәм бердәмлеккә юл» күптелле мәгариф комплексы укытучылары Рамил Ханнанов һәм Нариман Фәхрисламов – җиңүчеләрнең берсе. Әле видеоязманы сезгә дә тәкъдим итәбез.{' '}
              <a 
                href="https://vatantat.ru/news/kaium-babai-dasa-vt-ukytucylar-ham-tarbiiacelar-arasynda-uzdyrgan-baigega-iomgak-iasady-110417"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline font-semibold"
              >
                Толык язманы укырга
              </a>
            </p>
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <Card className="shadow-xl border-2 hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Каюм Насыйри – күпкырлы галим
              </h2>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in">
          <Card className="shadow-xl border-2 hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Түбәндәге фәннәр буенча хезмәтләр авторы:
              </h2>
              <ul className="space-y-4 text-base md:text-lg inline-block text-left">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Лексикография</strong> (сүзлекләр: "Лөгать китабы", "Ләһҗәи татари")
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Фонетика һәм грамматика</strong> ("Кавагыйд китабет", "Әнмүзәҗ")
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Тарих, этнография, фольклор</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Табигать фәннәре</strong> ("Зирагать гыйльме", "Гөлзар вә чәмәнзар")
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Әдәбият, тәрҗемәчелек</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>География һәм картография</strong>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Каюм Насыйриның эшчәнлеге
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="outline"
                className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 group"
                onClick={() => scrollToSection(section.id)}
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon name={section.icon as any} size={32} className="text-primary" />
                </div>
                <span className="font-semibold text-center text-sm">{section.title}</span>
              </Button>
            ))}
          </div>
        </section>

        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="mb-16 animate-fade-in"
          >
            <Card className="shadow-xl border-2 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon name={section.icon as any} size={40} className="text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {section.title}
                  </h2>
                </div>

                {section.subtitle && (
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 text-primary">
                    {section.subtitle}
                  </h3>
                )}

                {section.quotesTitle && (
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 whitespace-pre-line bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {section.quotesTitle}
                  </h3>
                )}

                {section.content && (
                  <p className="text-base md:text-lg leading-relaxed whitespace-pre-line mb-6">
                    {section.content}
                  </p>
                )}

                {section.recipeTitle && (
                  <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border-2 border-primary/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                      {section.recipeTitle}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {section.recipe}
                    </p>
                  </div>
                )}

                {section.quotes && (
                  <div className="space-y-6 mt-8">
                    {section.quotes.map((quote, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow duration-300"
                      >
                        <p className="text-base md:text-lg italic leading-relaxed">
                          "{quote}"
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.image && (
                  <div className="mt-8">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(section.image!)}
                    />
                  </div>
                )}

                {section.images && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${section.title} ${idx + 1}`}
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        ))}

        <footer className="text-center py-8 text-muted-foreground">
          <p className="text-sm md:text-base">
            © 2026 - Татар әдәбиятын өйрәнү һәм үстерү проекты. Лилия Кәримова
          </p>
        </footer>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in cursor-pointer"
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
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Index;
