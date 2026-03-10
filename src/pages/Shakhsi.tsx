import PageLayout from '@/components/PageLayout';

export default function Shakhsi() {
  return (
    <PageLayout title="Шәхси тормышы">
      <div className="space-y-8 text-base leading-relaxed text-foreground">

        <div className="reveal-section opacity-0">
          <p className="mb-4">
            Муса Җәлилнең шәхси тормышы аның иҗади юлы белән тыгыз бәйле. Ул гаиләсен, туган якларын, татар халкын бик ярата иде. Шагыйрьнең лирик шигырьләрендә мәхәббәт темасы аеруча яктырак чагыла.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Рәйсә белән танышу</h2>
          <p className="mb-4">
            1929 елда Муса Мәскәүдә укыганда Рәйсә Сәетгалиева белән таныша. Ул да татар кызы, акыллы, матур, иҗатка гашыйк. Алар 1931 елда никах кыялар.
          </p>
          <p className="mb-4">
            Рәйсә Муса өчен тормышта таяныч була. Шагыйрь аңа бик күп хатлар яза, гомеренең авыр минутларында да аны исенә төшерә. Сугышка киткәч язган хатлары — аерым бер лирик дастан.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Кызы Чулпан</h2>
          <p className="mb-4">
            1935 елда Мусаның кызы Чулпан туа. Шагыйрь кызын бик ярата иде. Хәтта хәрби әсирлектә, Моабит зинданында да ул кызы турында уйлый, аңа шигырьләр багышлый.
          </p>
          <p className="mb-4">
            Чулпан соңрак үзенең атасы турында истәлекләр яза, аның мирасын саклауга зур өлеш кертә.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Гаилә турындагы шигырьләр</h2>
          <blockquote className="quote-block px-6 py-5 rounded-r-lg">
            <p className="italic text-muted-foreground leading-relaxed text-lg">
              Чулпаным, балам минем,<br />
              Якты йолдызым минем.<br />
              Күктә балкый Чулпаным,<br />
              Йөрәгемдә — балам мин.
            </p>
            <footer className="mt-3 text-sm text-accent font-semibold">— Муса Җәлил</footer>
          </blockquote>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Дуслары һәм мохите</h2>
          <p className="mb-4">
            Муса Җәлил иптәшлекне бик кадерли иде. Аның тирәсендә шагыйрьләр, язучылар, музыкантлар туплана. Ул Татар опера студиясендә эшләгән вакытта татар сәнгатен үстерүгә зур өлеш кертә.
          </p>
          <p>
            Аның дуслары арасында Хәсән Туфан, Гадел Кутуй, Фатих Кәрим кебек татарның иң күренекле шагыйрьләре була. Алар бергә иҗат итәләр, бәхәс кыла, татар әдәбиятын алга таба алып бара.
          </p>
        </div>

        <div className="reveal-section opacity-0 bg-primary/5 border-l-4 border-primary rounded-r-lg p-5">
          <p className="text-foreground leading-relaxed">
            Муса Җәлилнең шәхесе — аерылгысыз бербөтен: ул шагыйрь дә, гаилә кешесе дә, иптәш тә, яшь буынны тәрбияләүче дә. Аның бары тик батырлыгы гына түгел, мәхәббәте дә, кайгысы да — барысы да шигырьгә әверелгән.
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
