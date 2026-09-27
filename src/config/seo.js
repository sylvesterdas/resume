const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sylvesterdas.com";

export const siteConfig = {
    title: "Sylvester Das | Freelance Software Developer, Trivandrum",
    description: "Freelance software developer in Thiruvananthapuram, Kerala. 10+ years building automation, websites, web apps, Flutter mobile apps and Electron desktop apps.",
    keywords: "freelance software developer Thiruvananthapuram, software developer Trivandrum, freelance developer Kerala, automation developer, web application developer, Flutter app developer Kerala, Electron desktop app developer, React developer, Node.js developer, Next.js developer, full stack developer India",
    siteUrl,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: siteUrl,
      title: "Sylvester Das | Freelance Software Developer in Thiruvananthapuram",
      description: "10+ years building software. Automation, web apps, Flutter mobile apps and Electron desktop apps for businesses in Kerala, India and worldwide.",
      siteName: "Sylvester Das",
      images: [
        {
          url: "/images/og/home.jpg",
          width: 1200,
          height: 630,
          alt: "Sylvester Das - Freelance Software Developer"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Sylvester Das | Freelance Software Developer in Thiruvananthapuram",
      description: "10+ years building software. Automation, web apps, Flutter mobile apps and Electron desktop apps for businesses in Kerala, India and worldwide.",
      images: ["/images/og/home.jpg"],
    }
  };
