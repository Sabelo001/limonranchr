import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const configured = env.SITE_URL;
  let siteUrl = "";
  if (configured) {
    const url = new URL(configured);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.search ||
      url.hash ||
      url.pathname !== "/" ||
      url.hostname.endsWith("example.com")
    ) {
      throw new Error(
        "SITE_URL must be the confirmed HTTPS production origin, without a path or query.",
      );
    }
    siteUrl = url.origin + "/";
  }
  return {
    plugins: [
      react(),
      tailwindcss(),
      tsConfigPaths(),
      {
        name: "limon-production-metadata",
        transformIndexHtml(html) {
          const socialPreviewUrl = `${siteUrl}social-preview.jpg`;
          const socialPreviewAlt =
            "Limon Ranch exterior and landscaped grounds with the words A peaceful stay in Maralal";
          const metadata = siteUrl
            ? [
                `<link rel="canonical" href="${siteUrl}" />`,
                `<meta property="og:url" content="${siteUrl}" />`,
                `<meta property="og:image" content="${socialPreviewUrl}" />`,
                `<meta property="og:image:secure_url" content="${socialPreviewUrl}" />`,
                '<meta property="og:image:type" content="image/jpeg" />',
                '<meta property="og:image:width" content="1200" />',
                '<meta property="og:image:height" content="630" />',
                `<meta property="og:image:alt" content="${socialPreviewAlt}" />`,
                `<meta name="twitter:image" content="${socialPreviewUrl}" />`,
                `<meta name="twitter:image:alt" content="${socialPreviewAlt}" />`,
              ].join("")
            : '<meta name="robots" content="noindex, nofollow" />';
          return html.replace("<!-- production-metadata -->", metadata);
        },
        generateBundle() {
          if (!siteUrl)
            this.warn(
              "SITE_URL is not set: this build is noindex. Set the confirmed production origin before publishing.",
            );
          this.emitFile({
            type: "asset",
            fileName: "robots.txt",
            source: siteUrl
              ? `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap.xml\n`
              : "User-agent: *\nDisallow: /\n",
          });
          if (siteUrl)
            this.emitFile({
              type: "asset",
              fileName: "sitemap.xml",
              source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}</loc></url></urlset>`,
            });
        },
      },
    ],
  };
});
