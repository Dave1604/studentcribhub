// Canonical site URL used for metadata, Open Graph, sitemap and robots.
// Priority: explicit override -> Vercel production URL -> local dev.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const siteName = "StudentCribHub";
export const siteDescription =
  "Browse verified hostels and apartments near your campus, and book trusted local services — barbers, electricians, plumbers and more. Built to make student life simpler.";
