const repo = "dnd-story-prompter";
const isPages = process.env.GITHUB_PAGES === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isPages
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}` }
    : {}),
};

export default nextConfig;
