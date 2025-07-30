import { getPosts } from '@/lib/hashnode';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sylvesterdas.com';

  // Core pages that are always present
  const routes = [
    '', // Home page
    '/blog', // Blog listing page
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '/blog' ? 'hourly' : 'weekly',
    priority: route === '/blog' ? 1 : 0.9,
  }));

  // Fetch all blog posts for dynamic sitemap generation
  let allPosts = [];
  let hasNextPage = true;
  let endCursor = null;

  while (hasNextPage) {
    const { posts, pageInfo } = await getPosts(50, endCursor); // Fetch 50 posts at a time
    allPosts = [...allPosts, ...posts];
    hasNextPage = pageInfo.hasNextPage;
    endCursor = pageInfo.endCursor;
  }

  const blogPostRoutes = allPosts.map(post => ({
    url: post.url,
    lastModified: post.updatedAt ? new Date(post.updatedAt).toISOString().split('T')[0] : new Date(post.publishedAt).toISOString().split('T')[0],
    changeFrequency: 'monthly', // Articles are rarely updated
    priority: 0.8,
  }));

  return [...routes, ...blogPostRoutes];
}
