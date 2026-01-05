import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Section {
  id: string;
  title: string;
  icon: string;
  content: string;
  image?: string;
  recipeTitle?: string;
  recipe?: string;
}

const sections: Section[] = [
  {
    id: 'yazuchy',
    title: 'Язучы',
    icon: 'BookOpen',
    content: 'Каюм Насыйриның татар әдәбиятына керткән өлеше шактый зур. Әдип - "Әбүгалисина кыйссасы", "Кырык вәзир", "Әхлак рисаләсе", "Тәрбич китабы" һ.б. әсәрләрнең авторы. Каюм Насыйри үз әсәрләрендә гореф-гадәтләр, традицияләр, әхлак, иман, гаилә мөнәсәбәтләре, бала тәрбиясе мәсьәләләрен яктырта. Уңай әхлакый сыйфатларны галим укучы өчен үрнәк итеп куя, ә кешенең рухи үсешенә комачаулый торган сыйфатларны, киресенчә, тәнкыйтьләп фаш итә. Әсәрләрнең язылганнынан соң ике гасырга якын вакыт узувына карамастан, аларның эстетик әһәмияте әле дә үз кыйммәтен югалтмый.',
  },
  {
    id: 'geograf',
    title: 'Географ',
    icon: 'Map',
    content: 'Каюм Насыйри география фәне буенча зур эш башкарган. Ул географик карталар төзүче, җир йөзе һәм аның төрле регионнары турында киң белемгә ия галим булган. Аның эшләрендә татар халкы яшәгән җирләрнең география үзенчәлекләре детальле тасвирланган.',
  },
  {
    id: 'biolog',
    title: 'Биолог',
    icon: 'Leaf',
    content: 'Каюм Насыйри үсемлекләр дөньясын өйрәнүгә зур игътибар биргән. "Гөлзар вә чәмәнзар" ("Гөлбакча һәм яшел алан") әсәрендә ул үсемлекләрнең төрле төрләре, аларның үзенчәлекләре, кулланылышы турында тулы мәгълүмат бирә. Бу эш татар телендәге беренче ботаника әсәре булып санала.',
  },
  {
    id: 'kulinar',
    title: 'Аш-су остасы',
    icon: 'ChefHat',
    content: 'Каюм Насыйри татар ашлары буенча да кыйммәтле эшләр язган.\n\nУл традицион татар ашларының рецептларын җыйган, аларның әзерләү ысулларын детальләп тасвирлаган.',
    recipeTitle: 'Каюм Насыйридан алма күпертмәсе рецепты:',
    recipe: 'Ун алманы юка гына тура. Камыр яса: биш йомырка сыт, ике кашык май сал, бик яхшы тугла, ике кашык вак шикәр сал, бер стакан каймак сал, он салып из – камыр яса, бик куе булмасын, кашык белән алырга мөмкин булсын. Табаңны яхшылап кыздыр, табага май сал. Кашык белән камырыңны алып, өстенә бер ике алма куй, табага сал. Мөрәбба белән аша.',
    image: 'https://cdn.poehali.dev/files/PHOTO-2025-03-30-17-01-07.jpg',
  },
  {
    id: 'suzleklar',
    title: 'Сүзлекләр төзүче',
    icon: 'BookText',
    content: 'Каюм Насыйри татар лексикографиясенең нигезен салучы. Аның "Лөгать китабы" һәм "Ләһҗәи татари" сүзлекләре татар теле өлкәсендә зур вакыйга булды. Бу сүзлекләр татар теленең байлыгын, аның лексик составын системалы рәвештә күрсәтте. Алар бүгенге көнгә кадәр татар теле лексикографиясендә мөһим чыганак булып кала.',
  },
  {
    id: 'suzostasy',
    title: 'Сүз остасы',
    icon: 'Quote',
    content: 'Каюм Насыйри гыйлем һәм мәгърифәт турында бик күп акыллы сүзләр әйткән. "Белем - дәрья, белем - нур" дигән аның данлыклы сүзләре бүген дә безнең өчен актуаль. Ул әйткән: "Халык мәгърифәтсез яши алмый", "Кеше белем белән көчле", "Милләтне яктырта торган гыйлем һәм мәгърифәт нурыдыр".',
  },
];

const Index = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

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

        <section className="mb-12 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
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
                  src="https://disk.yandex.ru/i/meB72okbaIhIdg/embed"
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

        <section className="mb-16 animate-fade-in">
          <Card className="shadow-xl border-2 hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Түбәндәге фәннәр буенча хезмәтләр авторы:
              </h2>
              <ul className="space-y-4 text-base md:text-lg text-center">
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
                    <strong>Әдәбият</strong> ("Фәвакиһелҗөләса фил әдәбият" - беренче татар
                    энциклопедиясе)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Педагогика</strong> (арифметика, геометрия, география дәреслекләре)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>"Казан календаре"</strong> еллык календарен нәшер иткән (1871-1897)
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Каюм Насыйри – күп яклы галим
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {sections.map((section) => (
              <Card
                key={section.id}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-2"
                onClick={() => scrollToSection(section.id)}
              >
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon name={section.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-center">
                    {section.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {sections.map((section) => (
          <section
            key={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="mb-16 scroll-mt-8"
          >
            <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon name={section.icon} size={40} className="text-primary" />
                  </div>
                  <h2 className={`text-3xl md:text-4xl font-bold text-center ${
                    section.id === 'kulinar' 
                      ? 'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'
                      : ''
                  }`}>
                    {section.title}
                  </h2>
                </div>

                {section.image && (
                  <div className="mb-8">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                )}

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-center whitespace-pre-line">
                    {section.content}
                  </p>
                </div>

                {section.recipe && (
                  <div className="mt-8 p-6 bg-accent/10 rounded-lg border-2 border-accent/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent text-center">
                      {section.recipeTitle}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed italic text-center">
                      {section.recipe}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        ))}

        <footer className="text-center py-8 text-muted-foreground">
          <p className="text-sm md:text-base">
            © 2026 Каюм Насыйри турында мәгълүмат сайты
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;