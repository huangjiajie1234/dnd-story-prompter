import { CopyButton } from "@/components/copy-button";

const packCommand = "npm run pack";

export default function DownloadPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs tracking-[0.28em] text-brass uppercase">Offline pack</p>
      <h1 className="mt-2 font-serif text-4xl text-paper">打包整站</h1>
      <p className="mt-4 text-sm leading-7 text-paper/70">
        这些页面都是静态的。打包后得到一个 zip：里面是完整网页，外加「打开档案」脚本。不要直接双击
        index.html，用脚本起一个本地端口再看。
      </p>

      <section className="mt-8 rounded-xl border border-brass/25 bg-card/80 p-5">
        <h2 className="font-serif text-xl text-brass">现在就下载</h2>
        <p className="mt-2 text-sm leading-7 text-paper/65">
          下面这个压缩包是用当前内容导出的静态站，大约 11MB。解压后运行「打开档案」，浏览器打开
          http://127.0.0.1:8765 。
        </p>
        <a
          href="/haze-city-archive.zip"
          download="霾都狂徒档案.zip"
          className="mt-5 inline-flex rounded-md bg-brass px-4 py-2 text-sm font-medium text-soot hover:bg-brass/90"
        >
          下载 haze-city-archive.zip
        </a>
      </section>

      <section className="mt-6 rounded-xl border border-brass/20 bg-card/70 p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-serif text-xl text-brass">自己重新打包</h2>
          <CopyButton text={packCommand} label="复制命令" />
        </div>
        <p className="mt-2 text-sm leading-7 text-paper/65">
          改过剧本或身份卡之后，在仓库根目录执行：
        </p>
        <pre className="mt-3 overflow-x-auto rounded-md bg-soot/60 p-3 font-mono text-[13px] text-paper/85">
          npm install
          {"\n"}
          npm run pack
        </pre>
        <p className="mt-3 text-sm leading-7 text-paper/65">
          完成后会得到两份一样的压缩包：
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-paper/70">
          <li>
            <code>dist/haze-city-archive.zip</code> 发给别人用
          </li>
          <li>
            <code>public/haze-city-archive.zip</code> 让本站的下载按钮指向最新包
          </li>
        </ul>
      </section>

      <section className="mt-6 text-sm leading-7 text-paper/55">
        <p>
          浏览器另存为只能留下当前这一页，剧本和身份卡题词会丢。要整站，用上面的 zip 或
          <code className="mx-1">npm run pack</code>。
        </p>
      </section>
    </div>
  );
}
