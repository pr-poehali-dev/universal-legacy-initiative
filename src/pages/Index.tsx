import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Section {
  id: string;
  title: string;
  icon: string;
  content: string;
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
    title: 'Кулинар',
    icon: 'ChefHat',
    content: 'Каюм Насыйри татар кулинариясе буенча да кыйммәтле эшләр язган. Ул традицион татар ашларының рецептларын җыйган, аларның әзерләү ысулларын детальле тасвирлаган. Аның эшләрендә татар халкының милли кулинар мирасы саклап калынган.',
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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            КАЮМ НАСЫЙРИ
          </h1>
        </section>

        <section className="mb-16 animate-scale-in">
          <Card className="overflow-hidden shadow-xl border-2">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  src="https://disk.yandex.ru/i/meB72okbaIhIdg"
                  className="w-full h-full"
                  frameBorder="0"
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
              <ul className="space-y-4 text-base md:text-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Каюм Насыйриның эшчәнлек юнәлешләре
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Card
                key={section.id}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleSectionClick(section.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={section.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  <Button variant="ghost" size="sm" className="mt-2">
                    Тулырак белү <Icon name="ChevronRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {activeSection && (
          <section ref={sectionRef} className="mb-16 animate-fade-in">
            <Card className="shadow-2xl border-4 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {sections.find((s) => s.id === activeSection)?.title}
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setActiveSection(null)}
                    className="hover:bg-accent/20"
                  >
                    <Icon name="X" size={24} />
                  </Button>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed">
                    {sections.find((s) => s.id === activeSection)?.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        <footer className="text-center py-8 border-t-2 mt-16">
          <p className="text-muted-foreground">
            © 2026 - Татар әдәбиятын өйрәнү һәм үстерү проекты. <span className="font-semibold text-foreground">Лилия Кәримова</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;