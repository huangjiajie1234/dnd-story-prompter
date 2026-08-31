import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-xl flex-col items-start justify-center px-4">
      <p className="text-xs tracking-[0.28em] text-brass">404</p>
      <h1 className="mt-2 font-serif text-3xl text-paper">这条巷子没有档案</h1>
      <p className="mt-3 text-sm text-paper/60">也许被盾勋执法官收走了。</p>
      <Link href="/" className="mt-6 text-sm text-brass hover:underline">
        回到枪弹酒吧
      </Link>
    </div>
  );
}
