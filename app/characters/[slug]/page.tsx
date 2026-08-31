import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyButton } from "@/components/copy-button";
import { characters, getCharacter } from "@/lib/characters";

export function generateStaticParams() {
  return characters.map((c) => ({ slug: c.slug }));
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = getCharacter(slug);
  if (!character) notFound();

  const index = characters.findIndex((item) => item.slug === slug);
  const prev = characters[index - 1];
  const next = characters[index + 1];

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/characters" className="text-xs text-brass hover:underline">
        返回身份卡目录
      </Link>

      <header className="mt-5">
        <p className="text-xs text-paper/45">
          {character.race} · {character.className} · {character.subclass}
        </p>
        <h1 className="mt-2 font-serif text-4xl" style={{ color: character.accent }}>
          {character.name}
        </h1>
        <p className="mt-1 text-paper/55">{character.alias}</p>
        <p className="mt-4 text-base leading-8 text-paper/80">「{character.quote}」</p>
        <p className="mt-4 text-sm leading-7 text-paper/70">{character.summary}</p>
      </header>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-brass">场记里能钉住的事</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-paper/70">
          {character.evidence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-6 text-paper/45">{character.visualNotes}</p>
      </section>

      <section className="mt-10 rounded-xl border border-brass/25 bg-card/80 p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-serif text-xl text-brass">Identity Card</h2>
          <CopyButton text={character.identityCard} label="复制身份卡" />
        </div>
        <p className="mt-2 text-xs text-paper/45">
          每张图都原样粘贴这一段。把它当成角色的 DNA，不要改写。
        </p>
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap font-mono text-[12px] leading-6 text-paper/80">
          {character.identityCard}
        </pre>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-brass/20 bg-card/70 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-brass">Keep unchanged</h3>
            <CopyButton text={character.keepUnchanged} label="复制" />
          </div>
          <p className="mt-3 text-sm leading-7 text-paper/70">{character.keepUnchanged}</p>
        </div>
        <div className="rounded-xl border border-brass/20 bg-card/70 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-brass">Do not</h3>
            <CopyButton text={character.doNot} label="复制" />
          </div>
          <p className="mt-3 text-sm leading-7 text-paper/70">{character.doNot}</p>
        </div>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="font-serif text-xl text-brass">建模题词</h2>
        {character.prompts.map((prompt) => (
          <div
            key={prompt.title}
            className="rounded-xl border border-brass/20 bg-card/80 p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-serif text-lg text-paper">{prompt.title}</h3>
                <p className="mt-1 text-xs text-paper/45">{prompt.purpose}</p>
              </div>
              <CopyButton text={prompt.prompt} />
            </div>
            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap font-mono text-[12px] leading-6 text-paper/75">
              {prompt.prompt}
            </pre>
          </div>
        ))}
      </section>

      <nav className="mt-14 flex justify-between gap-4 border-t border-brass/20 pt-6 text-sm">
        {prev ? (
          <Link href={`/characters/${prev.slug}`} className="text-brass hover:underline">
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/characters/${next.slug}`} className="text-brass hover:underline">
            {next.name} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
