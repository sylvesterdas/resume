# Sylvester Das — Portfolio & Developer Resume

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-10.32-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![License](https://img.shields.io/badge/License-Private-green?style=flat-square)](LICENSE)

Personal developer portfolio and resume website of **Sylvester Das** — Senior Software Engineer & Enterprise Solutions Architect.

🌐 **Live Website**: [https://www.sylvesterdas.com](https://www.sylvesterdas.com)

---

## ✨ Features

- **Interactive Matrix Hero**: Custom HTML5 canvas animation running a smooth, throttled digital rain effect.
- **Modern App Router Architecture**: Built with Next.js 16 (Turbopack) and React 19 for instantaneous page loads and low Time to First Byte (TTFB).
- **Personal Projects Showcase**: Highlights privacy-first, on-device mobile tools developed under [Minifyn](https://www.minifyn.com) (*ScamGuard*, *CensorFyn*, *ClipFyn*).
- **Micro-Animations & Smooth Motion**: Fluid transitions and scroll-driven reveals built with Framer Motion.
- **Enterprise SEO & Structured Data**: `sitemap.xml`, `robots.txt`, OpenGraph cards, and schema.org `Person` JSON-LD structured data.
- **Zero-Vulnerability Dependency Tree**: Strict `pnpm.overrides` and modernized ESLint 9 flat configuration.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| **Runtime / Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com), `@tailwindcss/typography` |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Image Optimization** | `sharp 0.35`, Next.js Image Optimization |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Package Manager** | [pnpm](https://pnpm.io) |
| **Linting & Quality** | [ESLint 9](https://eslint.org) (Flat Config) |

---

## 📁 Project Structure

```text
├── public/               # Static assets (favicons, fonts, images)
├── src/
│   ├── app/              # Next.js App Router routes & layouts
│   │   ├── layout.js     # Root layout with fonts, analytics & JSON-LD
│   │   ├── page.js       # Main portfolio landing page
│   │   ├── robots.js     # Dynamic robots.txt
│   │   └── sitemap.js    # XML sitemap
│   ├── components/
│   │   ├── layout/       # Navigation header, mobile drawer
│   │   ├── sections/     # Hero, About, Skills, Resume, Projects, Contact
│   │   └── ui/           # Reusable badges, social icons
│   ├── config/           # SEO configuration
│   ├── hooks/            # Custom React hooks
│   └── lib/              # JSON-LD generator
├── eslint.config.mjs     # ESLint 9 flat configuration
├── next.config.mjs       # Next.js bundler & image remote patterns
├── package.json          # Dependencies, scripts & pnpm overrides
└── tailwind.config.js    # Custom color palette & typography tokens
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or later (tested on Node v22)
- **pnpm**: `v10.x` (recommended)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sylvesterdas/resume.git
   cd resume
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SITE_URL=https://www.sylvesterdas.com
   ```

### Development

Start the local development server with Turbopack and Fast Refresh:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts Next.js development server with Turbopack |
| `pnpm build` | Compiles optimized production build |
| `pnpm start` | Runs the production server |
| `pnpm lint` | Runs ESLint 9 validation across all project files |

---

## 📬 Contact & Connect

- **Website**: [sylvesterdas.com](https://www.sylvesterdas.com)
- **LinkedIn**: [linkedin.com/in/sylvesterdas](https://www.linkedin.com/in/sylvesterdas/)
- **GitHub**: [@sylvesterdas](https://github.com/sylvesterdas)
- **Email**: [you@sylvesterdas.com](mailto:you@sylvesterdas.com)
- **Credly**: [credly.com/users/sylvester-das](https://www.credly.com/users/sylvester-das)
