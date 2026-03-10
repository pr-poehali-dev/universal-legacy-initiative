import PageLayout from '@/components/PageLayout';

const jalilcheler = [
  { name: 'Муса Җәлил', role: 'Шагыйрь, оешма башлыгы', fate: '1944 елның 25 августында гильотинада үлем' },
  { name: 'Гайнан Курмашев', role: 'Радиожурналист', fate: 'Гильотинада үлем' },
  { name: 'Абдулла Алиш', role: 'Язучы, балалар прозасы', fate: 'Гильотинада үлем' },
  { name: 'Фуат Сәйфелмөлеков', role: 'Юрист', fate: 'Гильотинада үлем' },
  { name: 'Ахмед Симаев', role: 'Журналист', fate: 'Гильотинада үлем' },
  { name: 'Зиннәт Хәсәнов', role: 'Укытучы', fate: 'Гильотинада үлем' },
  { name: 'Гариф Шабаев', role: 'Икътисадчы', fate: 'Гильотинада үлем' },
  { name: 'Солтан Алибаев', role: 'Укытучы', fate: 'Гильотинада үлем' },
  { name: 'Ибраһим Алкин', role: 'Хәрби', fate: 'Гильотинада үлем' },
  { name: 'Рәхим Саттаров', role: 'Хәрби', fate: 'Гильотинада үлем' },
  { name: 'Дәмир Шалимов', role: 'Хәрби', fate: 'Гильотинада үлем' },
];

export default function Jalilcheler() {
  return (
    <PageLayout title="Җәлилчеләр">
      <div className="space-y-8 text-base leading-relaxed text-foreground">

        <div className="reveal-section opacity-0">
          <p className="mb-4">
            Муса Джалиль фашист тоткынлыгында ялгыз сугышмады. Аның тирәсендә батыр иптәшләре була — алар да аз санда, тимер кафеслар артында, оешма кора, антифашист эшчәнлек алып бара.
          </p>
          <p>
            Тарихта алар <strong className="text-primary">«Джәлилчеләр»</strong> исеме белән мәшһүр. 11 кешенең барысы да 1944 елның 25 августында Берлин Плетзензее төрмәсендә гильотинада үтерелә.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Оешманың максаты</h2>
          <p className="mb-4">
            «Идел-Урал легионы»на хезмәткә тартылган татар, башкорт һәм башка халыкларның тоткыннарын фашизмга каршы күтәрелергә өндәү, алармы Совет партизан отрядларына яки Кызыл Армиягә кушылуга ярдәм итү.
          </p>
          <p>
            Оешма Легион эчендә яшерен эш алып барган: листовкалар чыгарган, солдатларга аңлатма эше үткәргән, советлар ягына чыгу юлларын эзләгән.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-6">Батырлар исемлеге</h2>
          <div className="grid gap-3">
            {jalilcheler.map((person, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{person.name}</p>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
                <div className="text-xs text-primary/70 italic sm:text-right">
                  {person.fate}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Соңгы сугыш</h2>
          <p className="mb-4">
            1943 елда гестапо оешманы ачыклый. Барлык 11 участник кулга алына. Алар Берлин Моабит төрмәсендә нигъмәт итәбелә, соргылана. Ләкин беркем дә иптәшен сатмый.
          </p>
          <p>
            1944 елның 25 августында Берлин янындагы Плетзензее төрмәсендә 11 батыр үтерелә. Алар тупас, ауыр кораллар — гильотина белән үтерелгән.
          </p>
        </div>

        <div className="reveal-section opacity-0 interesting-fact">
          <p>
            Немец тарихчы Вольфганг Унгер 1960 нчы елларда Плетзензее архивларыннан Джәлилчеләрнең эш материалларын таба. Бу документлар — Совет разведкасы Мусаны хаин дип гаепләгән елларда аны аклаган иң мөһим дәлил.
          </p>
        </div>

        <div className="reveal-section opacity-0 bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <p className="text-xl font-bold text-primary mb-2">25 август 1944</p>
          <p className="text-muted-foreground">
            Плетзензее. Берлин. 11 батыр мәңгелеккә китте.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-4" />
        </div>

      </div>
    </PageLayout>
  );
}
