import PageLayout from '@/components/PageLayout';

export default function Mengelek() {
  return (
    <PageLayout title="КАЮМ НАСЫЙРИ ИСЕМЕ МӘҢГЕЛЕК" subtitle="Бөек мәгърифәтченең мирасы">

      <div className="space-y-8 reveal-section opacity-0">

        {/* Главная цитата */}
        <div className="text-center py-6">
          <p className="text-foreground font-bold text-lg md:text-xl leading-relaxed"
            style={{
              background: 'linear-gradient(135deg, hsl(15 85% 62%), hsl(200 70% 55%), hsl(152 55% 45%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Каюм Насыйри – энциклопедист галим. Аның эшчәнлеге – милләткә фидакарьләрчә хезмәт итүнең бөек үрнәге.
          </p>
        </div>

        <div className="gold-line" />

        <p className="text-foreground/85 text-base md:text-lg font-semibold leading-relaxed text-center">
          Китаплары – хәзерге милли тормышыбыз өчен дә аваздаш булган бай хәзинә ул. Ул үз халкының дөньяви белемен булдыруга зур өлеш кертә, реформачыл агымның беренче новаторларыннан берсе була һәм татар халкы арасында фән һәм белем, мәдәниятне таратуны тормышының максаты итеп күрә.
        </p>

        <div className="gold-line" />

        {/* Блоки достижений */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: '📚', title: '60+ хезмәт', desc: 'Тел, тарих, табигать, педагогика, кулинария буенча' },
            { icon: '🗺️', title: 'Беренче татар географы', desc: 'Казан губернасы картасы авторы' },
            { icon: '📖', title: 'Лексикограф', desc: '"Лөгать китабы" һәм "Ләһҗәи татари" авторы' },
            { icon: '🌿', title: 'Табиб-ботаник', desc: '192 үсемлек, 155 авыруны тасвирлаган' },
            { icon: '✍️', title: '26 ел укытучы', desc: 'Казан мәктәбендә рус теле укытты' },
            { icon: '📅', title: '"Казан календаре"', desc: '27 ел дәвамында еллык календарь нәшер итте' },
          ].map((item, i) => (
            <div key={i} className="section-card p-5 flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="text-foreground font-bold text-sm mb-1">{item.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gold-line" />

        <div className="quote-block p-6 rounded-r-lg text-center">
          <p className="text-foreground/80 italic leading-relaxed text-base md:text-lg">
            «Каюм Насыйри — ул татар халкының уяну дәверенең символы, гыйлем, хезмәт һәм ватанпәрварлыкның бөек үрнәге»
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
