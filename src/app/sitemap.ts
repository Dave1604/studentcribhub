import type { MetadataRoute } from "next";
import { listings } from "@/lib/data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/search`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
  ];

  const listingRoutes: MetadataRoute.Sitemap = listings.map((l) => ({
    url: `${siteUrl}/listings/${l.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...listingRoutes];
}
