import PageLayout from '@/components/PageLayout';

const BOOK_PHOTO = 'https://cdn.poehali.dev/files/5aa59aa3-ec49-4261-980c-3d6c08d8ca4b.jpg';

export default function AshSu() {
  return (
    <PageLayout title="АШ-СУ ОСТАСЫ" subtitle="Татар ашларының беренче язма рецептлары">

      {/* Только фото книги по центру */}
      <div className="reveal-section opacity-0 flex justify-center mb-10">
        <div className="w-72 flex flex-col items-center">
          <div className="overflow-hidden rounded-lg border border-border/60 w-full" style={{ aspectRatio: '4/3' }}>
            <img src={BOOK_PHOTO} alt="Аш-су остасы китабы, 1912" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <p className="photo-caption">Аш-су остасы китабы, 1912 ел</p>
        </div>
      </div>

      <div className="space-y-6 reveal-section opacity-0 text-center">
        <p className="section-body">
          Каюм Насыйри татар ашлары буенча да кыйммәтле эшләр язган. Ул традицион татар ашларының рецептларын җыйган, аларның әзерләү ысулларын детальльләп тасвирлаган.
        </p>

        {/* Рецепт карточкасы */}
        <div className="section-card p-6 text-left">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(152 55% 40% / 0.15)' }}>
              <span className="text-xl">🍎</span>
            </div>
            <div className="text-center">
              <h3 className="text-foreground font-bold text-lg" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
                АЛМА КҮПЕРТМӘСЕ
              </h3>
              <p className="text-muted-foreground text-xs">Каюм Насыйри рецепты буенча</p>
            </div>
          </div>

          <div className="gold-line mb-5" />

          <div className="mb-4">
            <h4 className="text-primary text-sm font-semibold tracking-wider mb-2 uppercase text-center">Кирәкле продуктлар:</h4>
            <ul className="space-y-1 text-foreground/80 text-sm">
              {[
                'Ун алма (юка гына туралган)',
                'Биш йомырка',
                'Ике кашык май',
                'Ике кашык вак шикәр',
                'Бер стакан каймак',
                'Он (камыр калынлыгына карап)',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'hsl(15 85% 62%)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary text-sm font-semibold tracking-wider mb-2 uppercase text-center">Пешерү ысулы:</h4>
            <p className="section-body">
              Ун алманы юка гына тура. Камыр яса: биш йомырка сыт, ике кашык май сал, бик яхшы тугла, ике кашык вак шикәр сал, бер стакан каймак сал, он салып из — камыр яса, бик куе булмасын, кашык белән алырга мөмкин булсын. Табаңны яхшылап кыздыр, табага май сал. Кашык белән камырыңны алып, өстенә бер ике алма куй, табага сал. Мөрәбба белән аша.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}