import PageLayout from '@/components/PageLayout';

const works = [
  {
    title: 'Алтын чәч',
    year: '1941',
    type: 'Либретто',
    description: 'Н.Жиганов музыкасына операның либреттосы. Татар халык эпосы нигезендә.',
  },
  {
    title: 'Алтынчәч',
    year: '1941',
    type: 'Опера либреттосы',
    description: 'Бөтенроссия күләмендә куелган татар операсы.',
  },
  {
    title: 'Моабит дәфтәрләре',
    year: '1943–1944',
    type: 'Шигырьләр циклы',
    description: 'Берлин Моабит зинданында язылган 115 шигырь. Тарихи батырлыкның символы.',
  },
  {
    title: 'Кызыл ромашка',
    year: '1942',
    type: 'Шигырь',
    description: 'Иртәнге балалык хатирәсенә багышланган лирик шигырь.',
  },
  {
    title: 'Сандугач һәм чишмә',
    year: '1943',
    type: 'Шигырь',
    description: 'Иреккә омтылышны образлы сурәтләгән шигырь.',
  },
];

export default function Ijat() {
  return (
    <PageLayout title="Иҗат">
      <div className="space-y-10 text-base leading-relaxed text-foreground">

        <div className="reveal-section opacity-0">
          <p className="mb-4">
            Муса Джалиль — XX гасыр татар поэзиясенең иң яктырак вәкиле. Аның иҗаты гаять киң: шигырьләр, поэмалар, балладалар, опера либреттолары, балалар поэзиясе, публицистика.
          </p>
          <p>
            Шагыйрьнең тормышы — иҗадының дәвамы. Ул тоткынлыкта да яза, үлем алдында да каләмен ташламый. Шуңа күрә аның шигырьләре — тере, кан белән язылган сүзләр.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-6">Иҗади этаплар</h2>
          <div className="space-y-4">
            {[
              { period: '1919–1927', title: 'Беренче яшьлек шигырьләре', desc: 'Революция, иреклек, яшьлек темалары. Комсомол рухы, яңарыш.' },
              { period: '1927–1934', title: 'Мәскәү чоры', desc: 'Лирика тирәнәя. Мәхәббәт, дуслык, Ватан темалары. Балалар шигырьләре.' },
              { period: '1934–1941', title: 'Татар опера иҗаты', desc: 'Опера либреттолары. Татар халык мотивлары, эпик образлар.' },
              { period: '1941–1942', title: 'Фронт шигырьләре', desc: 'Сугыш, ватан саклау, батырлык.' },
              { period: '1943–1944', title: 'Моабит дәфтәрләре', desc: 'Зинданда язылган иң бөек шигырьләр. Яшәеш, ирек, мәхәббәт, үлем.' },
            ].map(item => (
              <div key={item.period} className="flex gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="flex-shrink-0 text-accent font-bold text-sm min-w-24">{item.period}</div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-6">Мәшһүр әсәрләр</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {works.map((work, i) => (
              <div key={i} className="p-5 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-primary">{work.title}</h3>
                  <span className="text-xs text-accent font-semibold bg-accent/10 px-2 py-0.5 rounded ml-2 flex-shrink-0">{work.year}</span>
                </div>
                <p className="text-xs text-secondary font-medium mb-2 uppercase tracking-wide">{work.type}</p>
                <p className="text-sm text-muted-foreground">{work.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Балалар өчен иҗат</h2>
          <p className="mb-4">
            1927–1932 елларда Муса Джалиль татар балалар журналларын оештыра, балалар шигырьләре яза. Аның балалар поэзиясе — гади, ачык, тирән. Балаларга табигать, дуслык, хезмәт турында сөйли.
          </p>
          <p>
            Балалар өчен язган шигырьләре аерым жыентык буларак дөнья күрде — «Кечкенә иптәшләр», «Без дә батырлар».
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Тәрҗемәләр</h2>
          <p className="mb-4">
            Муса Джалиль — тәрҗемәче дә. Ул рус, украин, белорус шагыйрьләренең әсәрләрен татар теленә тәрҗемә иткән. Шулай ук Пушкин, Лермонтов шигырьләрен яратып укуын белгән.
          </p>
          <p>
            Аның үз шигырьләре дөньяның алтмыштан артык теленә тәрҗемә ителгән.
          </p>
        </div>

        <div className="reveal-section opacity-0 bg-primary/5 rounded-xl p-6 border border-primary/15">
          <blockquote>
            <p className="text-xl italic text-foreground leading-relaxed mb-3">
              «Гомерем минем моңлы бер җыр иде,<br />
              Үлемем дә яңрар җыр булып.»
            </p>
            <footer className="text-accent font-semibold text-sm">— Муса Джалиль</footer>
          </blockquote>
        </div>

      </div>
    </PageLayout>
  );
}
