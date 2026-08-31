import { execSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "out");
const staging = join(root, "dist", "haze-city-archive");
const zipName = "haze-city-archive.zip";
const zipPath = join(root, "dist", zipName);
const publicZip = join(root, "public", zipName);

process.chdir(root);
execSync("npx next build --webpack", { stdio: "inherit" });

if (!existsSync(outDir)) {
  throw new Error("静态导出失败：没有生成 out/ 目录");
}

rmSync(staging, { recursive: true, force: true });
mkdirSync(staging, { recursive: true });
cpSync(outDir, staging, { recursive: true });
rmSync(join(staging, zipName), { force: true });

writeFileSync(
  join(staging, "离线阅读.txt"),
  [
    "黄金宝库之钥 · 霾都狂徒档案",
    "",
    "不要直接双击 index.html。Next 的静态页需要本地服务器。",
    "",
    "macOS / Linux：",
    "  双击或在终端运行 打开档案.sh",
    "  浏览器打开 http://127.0.0.1:8765",
    "",
    "Windows：",
    "  双击 打开档案.bat",
    "  浏览器打开 http://127.0.0.1:8765",
    "",
    "没有 Python 的话，在本目录执行：",
    "  npx --yes serve -p 8765",
    "",
  ].join("\n"),
  "utf8",
);

writeFileSync(
  join(staging, "打开档案.sh"),
  `#!/usr/bin/env bash
cd "$(dirname "$0")"
echo "档案站：http://127.0.0.1:8765"
if command -v python3 >/dev/null; then
  python3 -m http.server 8765
elif command -v python >/dev/null; then
  python -m http.server 8765
else
  npx --yes serve -p 8765
fi
`,
  { encoding: "utf8", mode: 0o755 },
);

writeFileSync(
  join(staging, "打开档案.bat"),
  [
    "@echo off",
    "cd /d %~dp0",
    "echo 档案站：http://127.0.0.1:8765",
    "where python >nul 2>nul && python -m http.server 8765 && goto :eof",
    "where py >nul 2>nul && py -m http.server 8765 && goto :eof",
    "npx --yes serve -p 8765",
    "",
  ].join("\r\n"),
  "utf8",
);

rmSync(zipPath, { force: true });
execSync(`zip -r "${zipName}" haze-city-archive`, {
  cwd: join(root, "dist"),
  stdio: "inherit",
});
cpSync(zipPath, publicZip);

const bytes = execSync(`wc -c < "${zipPath}"`).toString().trim();
console.log(`已打包 ${zipPath}`);
console.log(`网页下载副本 ${publicZip}`);
console.log(`大小 ${bytes} bytes`);
