import Link from "next/link";
import { scripts } from "@/lib/scripts";

export default function ScriptsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs tracking-[0.28em] text-brass uppercase">Scripts</p>
      <h1 className="mt-2 font-serif text-4xl text-paper">有趣的几场，写成剧本</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-paper/70">
        不是逐字会议纪要。每场保留当场真正说过的话，旁白用来把骰子和地图收成可以朗读的场面。人物名按角色卡，不按群名片。
      </p>
      <div className="mt-8 space-y-4">
        {scripts.map((script, index) => (
          <Link
            key={script.slug}
            href={`/scripts/${script.slug}`}
            className="block rounded-xl border border-brass/20 bg-card/80 p-5 hover:border-brass/50"
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-xs text-brass/80">
                {String(index + 1).padStart(2, "0")} · {script.session}
              </p>
              <p className="hidden text-xs text-paper/40 sm:block">{script.location}</p>
            </div>
            <h2 className="mt-2 font-serif text-2xl text-paper">{script.title}</h2>
            <p className="mt-1 text-sm text-paper/55">{script.subtitle}</p>
            <p className="mt-3 text-sm leading-7 text-paper/75">{script.why}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
