import { useRef, useState } from 'react';
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-green-100">
      {/* Адаптивная навигация */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h2 className="text-xl font-bold text-orange-700">Каюм Насыйри</h2>
            
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
                  <Icon name={section.icon as any} size={20} />
                  <span className="text-sm">{section.title}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Мобильное меню */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              <div className="flex flex-col gap-2">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant="ghost"
                    className="justify-start gap-3 w-full"
                    onClick={() => scrollToSection(section.id)}
                  >
                    <Icon name={section.icon as any} size={20} />
                    <span>{section.title}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-12">
        {/* Заголовок */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-700">
            Каюм Насыйри
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Татар халкының күренекле галиме, язучысы, тел белгече, географ һәм этнограф
          </p>
          <div className="mt-8 text-sm text-gray-600">
            <p>1825 - 1902</p>
          </div>
        </header>

        {/* Секции с кнопками */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {sections.map((section) => (
            <Card
              key={section.id}
              className="hover:shadow-lg transition-all cursor-pointer bg-orange-100 border-orange-200 hover:border-orange-300 animate-fade-in"
              onClick={() => scrollToSection(section.id)}
            >
              <CardContent className="p-6 text-center">
                <Icon name={section.icon as any} size={40} className="mx-auto mb-3 text-orange-700" />
                <h3 className="text-sm font-semibold text-orange-700">{section.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Контент секций */}
        {sections.map((section, idx) => (
          <section
            key={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="mb-16 animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <Card className="overflow-hidden border-orange-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name={section.icon as any} size={32} className="text-orange-700" />
                  <h2 className="text-3xl font-bold text-orange-700">{section.title}</h2>
                </div>

                {section.subtitle && (
                  <p className="text-lg text-gray-700 mb-4 italic">{section.subtitle}</p>
                )}

                {section.quotesTitle && (
                  <h3 className="text-2xl font-bold text-orange-700 mb-6 whitespace-pre-line text-center">
                    {section.quotesTitle}
                  </h3>
                )}

                {section.content && (
                  <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                    {section.content}
                  </p>
                )}

                {section.recipeTitle && (
                  <div className="bg-orange-50 border-l-4 border-orange-700 p-6 mb-6 rounded">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">{section.recipeTitle}</h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.recipe}</p>
                  </div>
                )}

                {section.quotes && (
                  <div className="space-y-4">
                    {section.quotes.map((quote, idx) => (
                      <div
                        key={idx}
                        className="bg-orange-50 border-l-4 border-orange-700 p-6 rounded hover:shadow-md transition-shadow"
                      >
                        <p className="text-gray-800 leading-relaxed italic">«{quote}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.images && section.images.length > 0 && (
                  <div className={section.imageGallery ? "mt-6" : "mt-6 space-y-4"}>
                    {section.imageGallery ? (
                      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {section.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${section.title} ${idx + 1}`}
                            className="w-72 h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow flex-shrink-0"
                            onClick={() => setSelectedImage(img)}
                          />
                        ))}
                      </div>
                    ) : (
                      section.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${section.title} ${idx + 1}`}
                          className="w-full rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                          onClick={() => setSelectedImage(img)}
                        />
                      ))
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        ))}

        {/* Кнопка-призыв */}
        <section className="mb-16 animate-fade-in text-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-xl"
            onClick={() => navigate('/gallery')}
          >
            Каюм Насыйри исеме мәңгелек
            <Icon name="ArrowRight" size={24} className="ml-2" />
          </Button>
        </section>
      </div>

      {/* Модальное окно для просмотра изображений */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Увеличенное изображение"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
