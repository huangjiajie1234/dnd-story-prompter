import Link from "next/link";

const links = [
  { href: "/", label: "档案" },
  { href: "/scripts", label: "剧本" },
  { href: "/characters", label: "身份卡" },
  { href: "/download", label: "打包下载" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brass/20 bg-soot/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-lg tracking-wide text-brass">
            黄金宝库之钥
          </span>
          <span className="hidden text-xs text-paper/50 sm:inline">
            霾都狂徒档案
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-paper/70 transition-colors hover:bg-brass/10 hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
