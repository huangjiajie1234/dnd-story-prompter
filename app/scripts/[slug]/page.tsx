import Link from "next/link";
import { notFound } from "next/navigation";
import { getScript, scripts } from "@/lib/scripts";

export function generateStaticParams() {
  return scripts.map((script) => ({ slug: script.slug }));
}

export default async function ScriptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const script = getScript(slug);
  if (!script) notFound();

  const index = scripts.findIndex((item) => item.slug === slug);
  const prev = scripts[index - 1];
  const next = scripts[index + 1];

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/scripts" className="text-xs text-brass hover:underline">
        返回剧本目录
      </Link>
      <p className="mt-5 text-xs tracking-wide text-brass/80">{script.session}</p>
      <h1 className="mt-2 font-serif text-4xl text-paper">{script.title}</h1>
      <p className="mt-2 text-paper/60">{script.subtitle}</p>
      <p className="mt-2 text-xs text-paper/40">{script.location}</p>
      <p className="mt-6 text-sm leading-7 text-paper/75">{script.why}</p>
      <p className="mt-3 border-l-2 border-brass/40 pl-3 text-sm leading-7 text-paper/55">
        {script.source}
      </p>

      <div className="mt-10 space-y-12">
        {script.beats.map((beat) => (
          <section key={beat.heading}>
            <h2 className="font-serif text-2xl text-brass">{beat.heading}</h2>
            {beat.stage ? (
              <p className="mt-2 text-sm leading-7 text-paper/50 italic">{beat.stage}</p>
            ) : null}
            <div className="mt-5 space-y-4">
              {beat.lines.map((line, i) => (
                <div key={`${beat.heading}-${i}`}>
                  <p className="text-xs font-medium text-brass">{line.speaker}</p>
                  <p className="mt-1 text-[15px] leading-8 text-paper/90">{line.text}</p>
                  {line.note ? (
                    <p className="mt-1 text-xs text-paper/40">〔{line.note}〕</p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <nav className="mt-14 flex justify-between gap-4 border-t border-brass/20 pt-6 text-sm">
        {prev ? (
          <Link href={`/scripts/${prev.slug}`} className="text-brass hover:underline">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/scripts/${next.slug}`} className="text-brass hover:underline">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
