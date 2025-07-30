import { POSTS_PER_PAGE } from '@/config/constants'
import { siteConfig } from '@/config/seo'
import { getPosts } from '@/lib/hashnode'
import PostList from '@/components/blog/PostList'

export const metadata = {
  title: `Blog | ${siteConfig.title}`,
  description: siteConfig.description,
  openGraph: {
    title: `Blog | ${siteConfig.title}`,
    description: siteConfig.description,
    url: `${siteConfig.siteUrl}/blog`,
    images: [
      {
        url: `${siteConfig.siteUrl}/api/og/blog`,
        width: 1200,
        height: 630,
        alt: `Blog - ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [`${siteConfig.siteUrl}/api/og/blog`],
  },
};

export default async function BlogPage() {
  const { posts: initialPosts, pageInfo: initialPageInfo } = await getPosts(POSTS_PER_PAGE);

  return (
    <PostList initialPosts={initialPosts} initialPageInfo={initialPageInfo} />
  );
}
