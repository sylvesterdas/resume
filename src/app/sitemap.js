export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sylvesterdas.com';

  // Core pages that are always present
  const routes = [
    '',
    '/about',
    '/skills',
    '/experience',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // If you have dynamic project pages, you can add them like this:
  // const projects = await getProjects();
  // const projectRoutes = projects.map(project => ({
  //   url: `${baseUrl}/projects/${project.slug}`,
  //   lastModified: project.updatedAt,
  //   changeFrequency: 'monthly',
  //   priority: 0.6,
  // }));

  return [...routes];
}
