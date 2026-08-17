const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sylvesterdas.com";

export const siteConfig = {
    title: "Sylvester Das | Senior Software Engineer & Enterprise Solutions Architect",
    description: "Experienced software engineer and solutions architect specializing in enterprise systems, cloud architecture, scalable full-stack applications, and on-device mobile tools.",
    keywords: "software engineer, enterprise solutions, cloud architecture, Next.js developer, React developer, Node.js expert, Android developer, full-stack developer, Minifyn, ScamGuard, CensorFyn, ClipFyn, tech lead",
    siteUrl,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      title: "Sylvester Das | Senior Software Engineer",
      description: "Enterprise solutions specialist with expertise in scalable architectures",
      siteName: "Sylvester Das Portfolio",
      images: [
        {
          url: "/images/general/og.png",
          width: 1200,
          height: 630,
          alt: "Sylvester Das - Senior Software Engineer"
        }
      ]
    },
    twitter: {
      handle: "@sylvester_das",
      cardType: "summary_large_image",
      images: [`${siteUrl}/images/general/og.png`],
    }
  };
