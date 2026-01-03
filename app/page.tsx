import Header from "@/components/header"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
