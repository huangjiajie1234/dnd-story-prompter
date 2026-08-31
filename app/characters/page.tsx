import Link from "next/link";
import { characters } from "@/lib/characters";

export default function CharactersPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs tracking-[0.28em] text-brass uppercase">Image 2</p>
      <h1 className="mt-2 font-serif text-4xl text-paper">五人身份卡</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-paper/70">
        Image 2 建角色模型，靠的不是一句「漂亮的龙裔野蛮人」，而是每次都粘贴同一段身份卡。先出参考设定图当锚点底图，之后每张只改表情、服装或场景里的一项。
      </p>

      <section className="mt-8 rounded-xl border border-brass/20 bg-card/70 p-5 text-sm leading-7 text-paper/70">
        <h2 className="font-serif text-lg text-brass">怎么用这些题词</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>打开对应角色，先复制「角色设定三视图」，出一张四视图设定图。</li>
          <li>把设定图或半身肖像留作 Reference A。之后每条题词都原样粘贴身份卡。</li>
          <li>系列图只改 Change only 那一行：表情、服装、场景、机位，选一个。</li>
          <li>Keep unchanged 与 Do not 一起贴，避免龙裔漂成人类、兔耳漂成猫耳。</li>
        </ol>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {characters.map((c) => (
          <Link
            key={c.slug}
            href={`/characters/${c.slug}`}
            className="rounded-xl border border-brass/20 bg-card/80 p-5 hover:border-brass/50"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-paper/45">
                {c.race} · {c.className}
              </p>
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: c.accent }}
              />
            </div>
            <h2 className="mt-2 font-serif text-2xl text-paper">{c.name}</h2>
            <p className="text-sm text-paper/50">{c.alias}</p>
            <p className="mt-3 text-sm leading-7 text-paper/75">{c.summary}</p>
            <p className="mt-4 text-xs text-brass">查看身份卡与题词 →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
