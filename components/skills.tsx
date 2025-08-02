"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Brain, TrendingUp } from "lucide-react"

const skillCategories = [
  {
    title: "Full Stack Development",
    icon: Code,
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Python", "SQL", "Postman", "API"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    hoverGradient: "from-blue-500/40 to-cyan-500/40",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
    level: 95,
  },
  {
    title: "DevOps & Automation",
    icon: Server,
    skills: ["Git", "GitHub Actions", "Docker", "AWS", "Azure", "Linux", "Snowflake", "Pandas", "Selenium"],
    gradient: "from-purple-500/20 to-pink-500/20",
    hoverGradient: "from-purple-500/40 to-pink-500/40",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/20",
    level: 88,
  },
  {
    title: "GenAI & LLM",
    icon: Brain,
    skills: ["OpenAI", "Groq", "LangChain", "Qdrant", "Hugging Face", "LlamaIndex", "Streamlit"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    hoverGradient: "from-emerald-500/40 to-teal-500/40",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/20",
    level: 92,
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-emerald-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 mx-auto mb-4"
          />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(categoryIndex)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group"
            >
              <Card
                className={`bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 h-full transition-all duration-500 shadow-xl overflow-hidden relative ${
                  hoveredCard === categoryIndex
                    ? `${category.borderColor} ${category.glowColor} shadow-2xl`
                    : "hover:border-slate-600/50"
                }`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Skill Level Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800/50">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${category.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: categoryIndex * 0.3 + 0.5 }}
                    className={`h-full bg-gradient-to-r ${category.hoverGradient}`}
                  />
                </div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${category.gradient} backdrop-blur-sm border border-slate-700/50 p-5 mb-4 relative overflow-hidden group-hover:border-slate-600/50 transition-all duration-300`}
                  >
                    {/* Icon Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${category.hoverGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                    />
                    <category.icon className={`w-full h-full ${category.iconColor} relative z-10`} />

                    {/* Floating Particles */}
                    <motion.div
                      animate={{
                        y: [-2, 2, -2],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                    />
                  </motion.div>

                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-white text-xl font-medium group-hover:text-blue-100 transition-colors">
                      {category.title}
                    </CardTitle>
                    <TrendingUp className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-slate-400">Proficiency</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: categoryIndex * 0.3 + 1 }}
                      className={`text-sm font-bold ${category.iconColor}`}
                    >
                      {category.level}%
                    </motion.span>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg hover:border-slate-600/50 cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-slate-900/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl px-8 py-4">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-2xl font-bold text-blue-400"
              >
                25+
              </motion.div>
              <div className="text-xs text-slate-400">Technologies</div>
            </div>
            <div className="w-px h-8 bg-slate-700/50" />
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-2xl font-bold text-purple-400"
              >
                3+
              </motion.div>
              <div className="text-xs text-slate-400">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-slate-700/50" />
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-2xl font-bold text-emerald-400"
              >
                50+
              </motion.div>
              <div className="text-xs text-slate-400">Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

