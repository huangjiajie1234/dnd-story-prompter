import Link from "next/link";
import { characters } from "@/lib/characters";
import { scripts } from "@/lib/scripts";

const timeline = [
  { date: "05-26", title: "博物馆的蛋", note: "宝箱怪、缩小术、霸王龙撞门" },
  { date: "06-01", title: "金罐子银行", note: "小姐与保镖，绿色的火" },
  { date: "06-16", title: "锻歌废料场", note: "烤老鼠、机魂求婚" },
  { date: "06-29", title: "酒厂戒指", note: "女大公的图章，盖特比出逃" },
  { date: "06-30", title: "查爆桶朋克", note: "长角酒廊与热步斗舞场" },
  { date: "07-06", title: "废品王座", note: "咬咬，以及会读心的雇兽" },
  { date: "07-14", title: "空心庄园", note: "邵马与诺格巴神殿" },
  { date: "07-20", title: "多余的组件", note: "布莱神殿删掉一级齿轮" },
  { date: "08-03", title: "领航员广场", note: "五十金包不下飞艇" },
  { date: "08-10", title: "法痕上空", note: "紫丁香味的雪，未愈的疤" },
  { date: "08-17", title: "船上有内鬼", note: "镀金枪手与荒漠" },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="max-w-3xl">
        <p className="text-xs tracking-[0.28em] text-brass uppercase">
          Keys from the Golden Vault
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-paper sm:text-5xl">
          霾都的狂徒
          <span className="block text-brass">还没学会低调</span>
        </h1>
        <p className="mt-6 text-base leading-8 text-paper/75">
          黄金宝库把五个人从博德之门发配到阿肯斯塔：枪弹之都，雾霾之城。他们本该当特工，结果第一场就把博物馆大门撞穿，第二场把银行行长吓到交代挪用公款。这份档案从约九十天的场记里抽出六场还能当剧本念的戏，并为每人写好一套 Image 2
          身份卡——同一段锚定文字，先出设定图，再只改一个变量。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/scripts"
            className="rounded-md bg-brass px-4 py-2 text-sm font-medium text-soot hover:bg-brass/90"
          >
            阅读剧本
          </Link>
          <Link
            href="/characters"
            className="rounded-md border border-brass/40 px-4 py-2 text-sm text-brass hover:bg-brass/10"
          >
            复制身份卡
          </Link>
          <Link
            href="/download"
            className="rounded-md border border-brass/40 px-4 py-2 text-sm text-brass hover:bg-brass/10"
          >
            打包下载
          </Link>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl text-brass">五人编制</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {characters.map((c) => (
            <Link
              key={c.slug}
              href={`/characters/${c.slug}`}
              className="group rounded-xl border border-brass/20 bg-card/80 p-4 transition-colors hover:border-brass/50"
            >
              <p className="text-xs text-paper/45">{c.className}</p>
              <p className="mt-1 font-serif text-xl" style={{ color: c.accent }}>
                {c.name}
              </p>
              <p className="mt-1 text-xs text-paper/50">{c.race}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-paper/70">
                {c.quote}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="font-serif text-2xl text-brass">可演的六场</h2>
          <ul className="mt-5 space-y-3">
            {scripts.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/scripts/${s.slug}`}
                  className="block rounded-xl border border-brass/20 bg-card/70 px-4 py-4 hover:border-brass/45"
                >
                  <p className="text-xs text-paper/45">{s.session}</p>
                  <p className="mt-1 font-serif text-lg text-paper">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-paper/65">{s.why}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <h2 className="font-serif text-2xl text-brass">场次轴</h2>
          <ol className="mt-5 space-y-3 border-l border-brass/25 pl-4">
            {timeline.map((item) => (
              <li key={item.date}>
                <p className="text-xs text-brass/80">{item.date}</p>
                <p className="text-sm text-paper">{item.title}</p>
                <p className="text-xs text-paper/50">{item.note}</p>
              </li>
            ))}
          </ol>
        </aside>
      </section>
    </div>
  );
}
