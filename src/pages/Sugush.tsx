import PageLayout from '@/components/PageLayout';

export default function Sugush() {
  return (
    <PageLayout title="Сугыш юлы һәм әсирлек">
      <div className="space-y-8 text-base leading-relaxed text-foreground">

        <div className="reveal-section opacity-0">
          <p className="mb-4">
            1941 елның июнендә Бөек Ватан сугышы башлана. Муса Җәлил фронтка китүне сораган гариза бирә. Шагыйрь үз иркеннән сугышка чыга — ул сугышны якыннан күрергә, халкы өчен сугышырга тели.
          </p>
          <p>
            1941 елда Муса Журналистлар берлеге исеменнән фронтка корреспондент булып китә. Ул Волхов фронтында, Ленинград янында хәрби операцияләрдә катнаша.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Мышлино янындагы чолганышу</h2>
          <p className="mb-4">
            1942 елның июнендә Волхов фронтында немец гаскәрләре совет частьларын чолгый. Каты сугышта Муса Җәлил авыр яраланып, исеннән яза. Аңсыз хәлдә ул немецлар тарафыннан эзерлеккә алына.
          </p>
          <p className="mb-4">
            Бу — 1942 елның 26 июне. Шагыйрь — фашист тоткынлыгында.
          </p>
        </div>

        <div className="reveal-section opacity-0 interesting-fact">
          <p>
            Яраланып тоткынга алынган Муса Җәлил үзенең шагыйрь икәнлеген яшермәгән. Ул тоткынлыкта да алга таба иҗат итүне, халкына хезмәт итүне максат итеп куйган.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Тоткынлыкта</h2>
          <p className="mb-4">
            Тоткынлыкта Муса Җәлил берничә лагерьда була. Немецлар аны «Идел-Урал легионы»на хезмәткә тартырга тырышалар. Бу — Советлар Союзы халыклары тоткыннарыннан торган хәрби берләшмә.
          </p>
          <p className="mb-4">
            Муса Легионга кереп, анда яшерен оешма төзи. Максат — аңа барырга мәҗбүр ителгән татар солдатларын фашизмга каршы көрәшкә өндәү, Советлар ягына чыгарырга ярдәм итү.
          </p>
          <p>
            Бу батырлык — ул турыдан-туры үлемгә барышны белеп эшләгән эш. Чөнки фашист Германиясендә яшерен оешма оештыру — иң авыр нәтиҗәгә китерә торган гамәл иде.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Кулга алыну</h2>
          <p className="mb-4">
            1943 елда гестапо яшерен оешманы фаш итә. Муса Җәлил кулга алына һәм Берлинның Моабит төрмәсенә ябыла. Аның белән бергә тагын ун легионер тоткынга алына.
          </p>
          <p>
            Моабит зинданы — монда Муса Джалил үлемен көтеп, иҗатын дәвам иттерә. Монда, тимер кафес артында, аның иң бөек шигырьләре туа.
          </p>
        </div>

        <div className="reveal-section opacity-0 bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="font-bold text-primary text-lg mb-3">Хронология</h3>
          <div className="space-y-3">
            {[
              { year: '1941', text: 'Фронтка корреспондент булып китү' },
              { year: '1942, 26 июнь', text: 'Волхов фронтында чолганышуда яраланып тоткынга алыну' },
              { year: '1942–1943', text: 'Тоткынлыкта яшерен оешма эшчәнлеге' },
              { year: '1943', text: 'Гестапо тарафыннан кулга алыну. Моабит төрмәсе' },
              { year: '1944, 25 август', text: 'Гильотинада үлем җәзасы' },
            ].map(item => (
              <div key={item.year} className="flex gap-4">
                <span className="text-accent font-bold text-sm whitespace-nowrap min-w-28">{item.year}</span>
                <span className="text-foreground text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
