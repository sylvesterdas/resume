import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Skills from '@/components/sections/Skills'
import Resume from '@/components/sections/Resume'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import { getMinifynProjects } from '@/lib/minifyn'

export const metadata = {
  alternates: { canonical: '/' },
}

export default async function Home() {
  const projects = await getMinifynProjects()

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Projects projects={projects} />
      <Contact />
    </main>
  )
}