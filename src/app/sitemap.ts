import type { MetadataRoute } from 'next';
import { BLOG } from '@/data/content';

const SITE = 'https://hocanhdi.xdev.asia';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/alphabet', '/vocabulary', '/grammar', '/quiz', '/listening', '/blog', '/dashboard'];
  const now = new Date();
  const items: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.8,
  }));
  for (const post of BLOG) {
    items.push({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }
  return items;
}
