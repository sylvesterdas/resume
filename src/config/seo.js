export const siteConfig = {
    title: "Sylvester Das | Senior Software Engineer & Enterprise Solutions Architect",
    description: "Experienced software engineer specializing in enterprise solutions, cloud architecture, and scalable applications. Expert in React, Node.js, and cloud technologies.",
    keywords: "software engineer, enterprise solutions, cloud architecture, React developer, Node.js expert, full-stack developer, tech lead",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      title: "Sylvester Das | Senior Software Engineer",
      description: "Enterprise solutions specialist with expertise in scalable architectures",
      siteName: "Sylvester Das Portfolio",
      images: [
        {
          url: "/images/sylvester-das-og-image.png",
          width: 1200,
          height: 630,
          alt: "Sylvester Das - Senior Software Engineer"
        }
      ]
    },
    twitter: {
      handle: "@sylvester_das",
      cardType: "summary_large_image"
    }
  };