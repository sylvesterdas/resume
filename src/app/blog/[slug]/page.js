import { getPostBySlug } from '@/lib/hashnode';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.title,
    description: post.brief,
    alternates: {
      canonical: post.canonicalUrl || post.url,
    },
    openGraph: {
      title: post.title,
      description: post.brief,
      url: post.canonicalUrl || post.url,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.coverImage ? [{ url: post.coverImage.url }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.brief,
      images: post.coverImage ? [post.coverImage.url] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    // For dynamic routes, Next.js will return a 404 if the data is not found
    // No need for explicit notFound() call here if the data fetching returns null
    return null;
  }

  return (
    <article className="py-24 bg-primary text-text">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-text-muted text-sm mb-6">Published on {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}</p>
        {post.coverImage && (
          <div className="relative w-full aspect-[1200/630] mb-8">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content.markdown}
          </ReactMarkdown>
        </div>
        <div className="mt-8 p-6 bg-accent rounded-lg text-center shadow-lg">
          <p className="text-lg font-semibold mb-2">
            Tired of long URLs? Try Minifyn!
          </p>
          <a
            href="https://www.minifyn.com?utm_source=sylvesterdas.com&utm_medium=blog&utm_campaign=ad_banner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-dark text-text font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Get Shortlinks with mnfy.in
          </a>
        </div>
      </div>
    </article>
  );
}
