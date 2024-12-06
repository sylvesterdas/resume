import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/seo';

/** @type {MetadataRoute.Sitemap} */
export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/experience',
    '/skills',
    '/contact'
  ].map(route => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}