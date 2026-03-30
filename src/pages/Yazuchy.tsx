import PageLayout from '@/components/PageLayout';

const photos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kayum_Nasyri.jpg/440px-Kayum_Nasyri.jpg',
    caption: 'Каюм Насыйри портреты',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Kul_Sharif_mosque_kazan_russia.jpg/440px-Kul_Sharif_mosque_kazan_russia.jpg',
    caption: 'Казан — Насыйри туган шәһәр',
  },
];

export default function Yazuchy() {
  return (
    <PageLayout title="ЯЗУЧЫ" subtitle="Каюм Насыйри — татар әдәбияты классигы">

      {/* Фотогалерея */}
      <div className="reveal-section opacity-0 grid grid-cols-2 gap-4 mb-10">
        {photos.map((p, i) => (
          <div key={i} className="flex flex-col">
            <div className="overflow-hidden rounded-lg border border-border/60" style={{ aspectRatio: '4/3' }}>
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <p className="photo-caption">{p.caption}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6 reveal-section opacity-0">
        <p className="text-foreground/80 leading-relaxed">
          Каюм Насыйриның татар әдәбиятына керткән өлеше шактый зур. Аның иҗаты татар халкының рухи мирасының аерылгысыз бер өлешенә әйләнде.
        </p>

        <div className="fact-box p-5 rounded-r-lg">
          <p className="text-foreground/85 leading-relaxed font-medium">
            Әдип — <strong className="text-primary">"Әбүгалисина кыйссасы"</strong>, <strong className="text-primary">"Кырык вәзир"</strong>, <strong className="text-primary">"Әхлак рисаләсе"</strong>, <strong className="text-primary">"Тәрбич китабы"</strong> һ.б. әсәрләрнең авторы.
          </p>
        </div>

        <p className="text-foreground/80 leading-relaxed">
          Каюм Насыйри үз әсәрләрендә гореф-гадәтләр, традицияләр, әхлак, иман, гаилә мөнәсәбәтләре, бала тәрбиясе мәсьәләләрен яктырта. Уңай әхлакый сыйфатларны галим укучы өчен үрнәк итеп куя, ә кешенең рухи үсешенә комачаулый торган сыйфатларны, киресенчә, тәнкыйтьләп фаш итә.
        </p>

        <div className="quote-block p-5 rounded-r-lg">
          <p className="text-foreground/75 italic leading-relaxed">
            Әсәрләрнең язылганнынан соң ике гасырга якын вакыт узуына карамастан, аларның эстетик әһәмияте әле дә үз кыйммәтен югалтмый.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl text-foreground mt-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          "Әбүгалисина кыйссасы"
        </h2>
        <div className="gold-line max-w-24 mb-4" />
        <p className="text-foreground/80 leading-relaxed">
          Бу әсәр — татар укучысына борыңгы Шәрык галиме Ибн Синаны таныштырган беренче татар прозасының үрнәкләреннән берсе. Насыйри бу хезмәтендә нафис стиль, тирән философик эчтәлек белән укучыны мәгърифәт юлына чакыра.
        </p>

        <h2 className="text-2xl md:text-3xl text-foreground mt-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          "Кырык вәзир"
        </h2>
        <div className="gold-line max-w-24 mb-4" />
        <p className="text-foreground/80 leading-relaxed">
          Борыңгы Шәрык хикәяләренең татарча яңартылган тупланмасы. Насыйри аны халыкка аңлаешлы тел белән биреп, татар укучысына дөнья әдәбиятының иң матур үрнәкләрен таныштырды.
        </p>
      </div>
    </PageLayout>
  );
}
