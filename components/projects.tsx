"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ShoppingCart, GraduationCap, User } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Laravel during MSIB program. Features include product management, shopping cart, payment integration, and admin dashboard.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: "/placeholder.svg?height=300&width=500",
    github: "#",
    demo: "#",
    status: "Production",
    icon: ShoppingCart,
  },
  {
    title: "Lab Assistant Portal",
    description:
      "A comprehensive portal for managing web programming course materials, assignments, and student progress. Built to assist in teaching PHP fundamentals.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg?height=300&width=500",
    github: "#",
    demo: "#",
    status: "Active",
    icon: GraduationCap,
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website showcasing my skills and projects. Built with React and featuring smooth animations and interactive elements.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.svg?height=300&width=500",
    github: "#",
    demo: "#",
    status: "Live",
    icon: User,
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-px bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 h-full hover:border-slate-600/50 transition-all duration-500 overflow-hidden shadow-xl">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <project.icon className="w-6 h-6 text-blue-400" />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                        project.status === "Live"
                          ? "bg-green-400/20 text-green-400 border border-green-400/30"
                          : project.status === "Production"
                            ? "bg-blue-400/20 text-blue-400 border border-blue-400/30"
                            : "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-xl font-medium">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-800/50 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800/50 flex-1 bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex-1"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
