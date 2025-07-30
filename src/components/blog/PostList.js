'use client'

import { useState, useEffect } from 'react'
import { getPosts } from '@/lib/hashnode'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { motion } from 'framer-motion'

import { POSTS_PER_PAGE } from '@/config/constants'

export default function PostList({ initialPosts, initialPageInfo }) {
  const [posts, setPosts] = useState(initialPosts)
  const [pageInfo, setPageInfo] = useState(initialPageInfo)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLoadMore = async () => {
    if (!pageInfo || !pageInfo.hasNextPage || loading) return

    setLoading(true)
    try {
      const { posts: newPosts, pageInfo: newPageInfo } = await getPosts(POSTS_PER_PAGE, pageInfo.endCursor)
      setPosts((prevPosts) => [...prevPosts, ...newPosts])
      setPageInfo(newPageInfo)
    } catch (err) {
      setError('Failed to load more posts.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (error) {
    return (
      <section className="py-24 bg-primary min-h-screen flex items-center justify-center">
        <p className="text-text text-xl">{error}</p>
      </section>
    )
  }

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Articles
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={`/blog/${post.slug}`} className="block bg-primary-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {post.coverImage && (
                  <div className="relative w-full aspect-[1200/630]">
                    <Image
                      src={post.coverImage.url}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-text mb-2 leading-tight">{post.title}</h2>
                  <p className="text-text-muted text-sm mb-4">{format(new Date(post.publishedAt), 'MMMM dd, yyyy')} &bull; {post.readTimeInMinutes} min read</p>
                  <p className="text-text-muted text-sm mb-4">By {post.author.name}</p>
                  <p className="text-text-muted text-base flex-grow">{post.brief}</p>
                  <span className="text-accent mt-4 inline-block">Read More &rarr;</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {pageInfo?.hasNextPage && (
          <div className="text-center mt-12">
            <motion.button
              onClick={handleLoadMore}
              className="bg-accent text-primary-dark font-bold py-3 px-8 rounded-full hover:bg-accent-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {loading ? 'Loading...' : 'Load More Articles'}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}