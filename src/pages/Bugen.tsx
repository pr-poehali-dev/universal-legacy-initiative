import PageLayout from '@/components/PageLayout';

export default function Bugen() {
  return (
    <PageLayout title="Бүгенге көн">
      <div className="space-y-8 text-base leading-relaxed text-foreground">

        <div className="reveal-section opacity-0">
          <p className="mb-4">
            Муса Джалиль 1944 елда дошман тарафыннан үтерелде. Ләкин аның исеме — мәңгелек. Ул бүгенге татар, рус, дөнья мәдәниятендә яши.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-5">Истәлек урыннары</h2>
          <div className="space-y-3">
            {[
              { place: 'Казан', desc: 'Кремль мәйданында Муса Джалиль монументы. Советлар Союзы иң мәшһүр скульпторы Цигаль иҗаты. 1966 ел.' },
              { place: 'Мәскәү', desc: 'Театральная мәйданында Муса Джалиль монументы.' },
              { place: 'Орск', desc: 'Шагыйрь бала чагын үткәргән йорт-музей.' },
              { place: 'Берлин', desc: 'Плетзензее истәлек урыны — Джәлилчеләр үтерелгән урын.' },
              { place: 'Казан', desc: 'Муса Джалиль исемендәге Татар дәүләт опера театры.' },
            ].map(item => (
              <div key={item.place} className="flex gap-4 p-4 rounded-lg border border-border bg-card">
                <span className="flex-shrink-0 font-bold text-accent min-w-20 text-sm">{item.place}</span>
                <p className="text-sm text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Бүлүнмәслек дан</h2>
          <p className="mb-4">
            1956 елда Советлар Союзы Герое исеме бирелде — үлемнән 12 ел соң. 1957 елда Ленин премиясе. Бу — сугыш елларындагы иҗатка бирелгән иң зур дәүләт бүләге.
          </p>
          <p>
            Аның исемен йөрткән урамнар, мәктәпләр, театрлар — Татарстанда, Россиядә, Азәрбайҗанда, Казакъстанда, Үзбәкстанда.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Татар мәдәниятендә</h2>
          <p className="mb-4">
            Казандагы Татар дәүләт академик опера театры — Муса Джалиль исемен йөртә. Монда аның либреттолары нигезендәге «Алтынчәч» операсы хәзер дә куела.
          </p>
          <p className="mb-4">
            Муса Джалиль исемендәге премия — татар иҗатчыларына бирелә. Ул яшь шагыйрьләр, язучылар, музыкантлар өчен иң абруйлы бүләк.
          </p>
          <p>
            «Моабит дәфтәрләре» — Татарстанда мәктәп программасына кертелгән. Татар балалары аны укый, яттан белә.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Дөнья күзлегеннән</h2>
          <p className="mb-4">
            Моабит дәфтәрләре 60тан артык телгә тәрҗемә ителгән. Япония, Германия, Франция, Венгрия, Польша, Китай — дөньяның барлык почмакларында укылган.
          </p>
          <p>
            Аның тормышы турында фильмнар төшерелгән, спектакльләр куелган. Муса Джалиль образы — фашизмга каршы рухи каршылыкның символы.
          </p>
        </div>

        <div className="reveal-section opacity-0 bg-secondary/5 border border-secondary/30 rounded-xl p-6">
          <h3 className="font-bold text-secondary text-lg mb-4">Исем чагылышы</h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              '🏛️ Казан Кремле янындагы монумент',
              '🎭 Татар дәүләт опера театры',
              '🏫 Казанда урта мәктәп',
              '🚢 «Муса Джалиль» диңгез судносы',
              '✈️ Казан аэропорты',
              '🏆 Муса Джалиль исемендәге премия',
              '📚 Мәктәп программасы',
              '🌍 60+ телгә тәрҗемә',
            ].map((item, i) => (
              <div key={i} className="text-foreground">{item}</div>
            ))}
          </div>
        </div>

        <div className="reveal-section opacity-0 py-8 text-center">
          <div className="ornament-divider max-w-xs mx-auto mb-6" />
          <blockquote>
            <p className="text-2xl font-serif italic text-primary leading-relaxed mb-4">
              «Гомерем минем моңлы бер җыр иде,<br />
              Үлемем дә яңрар җыр булып»
            </p>
            <footer className="text-accent font-semibold">Муса Джалиль (1906–1944)</footer>
          </blockquote>
          <div className="ornament-divider max-w-xs mx-auto mt-6" />
        </div>

      </div>
    </PageLayout>
  );
}
