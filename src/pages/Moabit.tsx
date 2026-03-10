import PageLayout from '@/components/PageLayout';

export default function Moabit() {
  return (
    <PageLayout title="Моабит тәфтәрләре">
      <div className="space-y-8 text-base leading-relaxed text-foreground">

        <div className="reveal-section opacity-0">
          <p className="mb-4">
            Моабит тәфтәрләре — Муса Җәлилнең Берлин Моабит төрмәсендә 1943–1944 елларда язган шигырьләре тупланган кулъязма дәфтәрләре. Бу — дөнья әдәбиятының иң сирәк, иң бөек истәлекләренең берсе.
          </p>
          <p>
            Ике кечкенә генә дәфтәр — гомер хакы белән язылган шигырьләр. Алар тимер решеткалар артында, үлем сагында язылган. Шагыйрь үзе исән калмас дип белгән, ләкин шигырьләре яшәсен дип теләгән.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Дәфтәрләрнең тарихы</h2>
          <p className="mb-4">
            Муса Төрмәдә ике кечкенә дәфтәргә шигырьләр яза. Беренче дәфтәрне ул үзе белән бергә тоткын булган, соңрак азат ителгән Андре Тиммерманска (Бельгия) тапшыра. Ул аны Советлар союзы илчелегенә китерә. Икенче дәфтәрне шагыйрь Нигъмәт Терегуловка бирә.
          </p>
          <p>
            Сугыш бетеп, ике дәфтәр дә Казанга килеп ирешә. 1953 елда алар беренче тапкыр басылып чыга. 1957 елда Муса Джалильгə Ленин премиясе бирелә — шагыйрь инде дөньяда юк, ләкин аның шигырьләре мәңге яши.
          </p>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Шигырьләрдән</h2>

          <div className="space-y-6">
            <blockquote className="quote-block px-6 py-5 rounded-r-lg">
              <h3 className="font-bold text-primary mb-3">Үлмәс идем</h3>
              <p className="italic text-muted-foreground leading-relaxed">
                Үлмәс идем — ниткән соң?<br />
                Яшим иде дисәң, яшим.<br />
                Тик ирекне кайтар миңа,<br />
                Тик туган ил бир миңа.
              </p>
              <footer className="mt-3 text-sm text-accent font-semibold">— Муса Җәлил, Моабит</footer>
            </blockquote>

            <blockquote className="quote-block px-6 py-5 rounded-r-lg">
              <h3 className="font-bold text-primary mb-3">Кыю кеше</h3>
              <p className="italic text-muted-foreground leading-relaxed">
                Алга барсаң — үлем,<br />
                Артка борылсаң — үлем.<br />
                Кыю кеше алга бара<br />
                Үлем аша — мәңгелеккә.
              </p>
              <footer className="mt-3 text-sm text-accent font-semibold">— Муса Җәлил, Моабит</footer>
            </blockquote>

            <blockquote className="quote-block px-6 py-5 rounded-r-lg">
              <h3 className="font-bold text-primary mb-3">Сандугач һәм чишмә</h3>
              <p className="italic text-muted-foreground leading-relaxed">
                Сандугач әйтә чишмәгә:<br />
                — Ни өчен еларсың, чишмә?<br />
                — Тау арасында кысылдым,<br />
                Ирек теләдем — бирмәде.
              </p>
              <footer className="mt-3 text-sm text-accent font-semibold">— Муса Җәлил, Моабит</footer>
            </blockquote>
          </div>
        </div>

        <div className="reveal-section opacity-0">
          <h2 className="text-2xl font-bold text-primary mb-4">Дәфтәрләрнең әһәмияте</h2>
          <p className="mb-4">
            Моабит тәфтәрләре — Икенче Дөнья сугышы чорының иң көчле әдәби истәлекләренең берсе. Бу — зинданда, үлем алдында язылган шигырьләр, ләкин алар хур итү, куркынычтан качу, буйсыну белмиләр.
          </p>
          <p className="mb-4">
            Шигырьләрдә — иреккә, туган якка, мәхәббәткә, яшәешкә омтылыш. Шагыйрь физик яктан хәбессез, ләкин рухи яктан — ирекле, бөек.
          </p>
          <p>
            Тәфтәрләр күп телгә тәрҗемә ителгән, дөньяның йөзгә якын илендә укылган. Алар — фашизмга каршы рухи каршылыкның символы.
          </p>
        </div>

        <div className="reveal-section opacity-0 bg-secondary/5 border border-secondary/30 rounded-lg p-6">
          <h3 className="font-bold text-secondary text-lg mb-3">Танылу</h3>
          <div className="space-y-2 text-sm">
            <p>📖 <strong>1953 ел</strong> — «Моабит дәфтәрләре» беренче тапкыр нәшер ителә</p>
            <p>🏆 <strong>1957 ел</strong> — Ленин премиясе (үлемнән соң)</p>
            <p>⭐ <strong>1956 ел</strong> — Советлар Союзы Герое исеме (үлемнән соң)</p>
            <p>🌍 <strong>Хәзерге вакыт</strong> — 60тан артык телгә тәрҗемә ителгән</p>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
