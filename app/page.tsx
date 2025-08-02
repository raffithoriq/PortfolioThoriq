"use client"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Career } from "@/components/career"
import { Projects } from "@/components/projects"
import { Certificates } from "@/components/certificates"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { FuturisticBackground } from "@/components/futuristic-background"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 overflow-x-hidden">
      <FuturisticBackground />
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10 mt-20">
        <Hero />
        <About />
        <Skills />
        <Career />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  )
}
