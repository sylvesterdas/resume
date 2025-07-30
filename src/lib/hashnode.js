const HASHNODE_GQL_ENDPOINT = "https://gql.hashnode.com";
const HASHNODE_PUBLICATION_ID = process.env.HASHNODE_PUBLICATION_ID;
const HASHNODE_ACCESS_TOKEN = process.env.NEXT_HASHNODE_ACCESS_TOKEN;

async function fetchFromHashnode(query, variables, revalidate) {
    if (!HASHNODE_GQL_ENDPOINT) {
        throw new Error('Hashnode GraphQL endpoint is not configured.');
    }
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': HASHNODE_ACCESS_TOKEN
        },
        body: JSON.stringify({ query, variables }),
    };

    if (revalidate !== undefined) {
        fetchOptions.next = { revalidate };
    } else {
        fetchOptions.cache = 'no-store';
    }

    const separator = HASHNODE_GQL_ENDPOINT.includes('?') ? '&' : '?';
    const res = await fetch(`${HASHNODE_GQL_ENDPOINT}${separator}cacheBuster=${Math.random()}`, fetchOptions);

    if (!res.ok) {
        console.error("Hashnode API Error:", await res.text());
        throw new Error('Failed to fetch from Hashnode API');
    }

    return res.json();
}

const GET_POSTS_QUERY = `
  query GetPosts($publicationId: ObjectId!, $first: Int!, $after: String) {
    publication(id: $publicationId) {
      posts(first: $first, after: $after) {
        edges {
          node {
            id
            slug
            title
            url
            brief
            publishedAt
            updatedAt
            readTimeInMinutes
            author {
                name
                profilePicture
            }
            tags {
                name
                slug
            }
            coverImage {
              url
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

async function getPosts(
  first = 6,
  after,
  revalidate
) {
  const response = await fetchFromHashnode(
    GET_POSTS_QUERY,
    {
      publicationId: HASHNODE_PUBLICATION_ID,
      first,
      after: after ?? null,
    },
    revalidate
  );
  const posts = response.data.publication.posts.edges.map((edge) => edge.node);
  const pageInfo = response.data.publication.posts.pageInfo;
  return { posts, pageInfo };
}

const GET_POST_BY_SLUG_QUERY = `
  query GetPostBySlug($publicationId: ObjectId!, $slug: String!) {
    publication(id: $publicationId) {
      post(slug: $slug) {
        id
        slug
        title
        url
        brief
        publishedAt
        updatedAt
        readTimeInMinutes
        author {
            name
            profilePicture
        }
        tags {
            name
            slug
        }
        ogImage: ogMetaData {
            image
        }
        coverImage {
          url
        }
        content {
          markdown
        }
      }
    }
  }
`;

async function getPostBySlug(slug) {
  const response = await fetchFromHashnode(
    GET_POST_BY_SLUG_QUERY,
    {
      publicationId: HASHNODE_PUBLICATION_ID,
      slug,
    }
  );
  // The response has `ogImage.image`, so we need to flatten it
  const post = response.data.publication.post;
  if (post && post.ogImage) {
    post.ogImage.url = post.ogImage.image;
    delete post.ogImage.image;
  }
  return post;
}

module.exports = {
  getPosts,
  getPostBySlug,
};