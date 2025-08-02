"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Users, Award, MapPin, Target } from "lucide-react"

const stats = [
  {
    icon: Code,
    label: "Projects Completed",
    value: "15+",
    color: "text-blue-400",
    bgColor: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Users,
    label: "Students Mentored",
    value: "50+",
    color: "text-purple-400",
    bgColor: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: GraduationCap,
    label: "Current Semester",
    value: "6th",
    color: "text-cyan-400",
    bgColor: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Award,
    label: "Years Experience",
    value: "2+",
    color: "text-green-400",
    bgColor: "from-green-500/20 to-emerald-500/20",
  },
]

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Information Systems student with focus on web development",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Code,
    title: "Teaching Experience",
    description: "Laboratory Assistant for Web Programming course",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Target,
    title: "Professional Training",
    description: "MSIB Independent Study program graduate",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [100, 300, 100],
            y: [200, 50, 200],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
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
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-slate-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Passionate developer with a blend of academic knowledge and practical experience
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <Card className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 p-6 relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-slate-800/50 flex items-center justify-center ${stat.color} relative z-10`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </motion.div>
                  <div className="text-2xl font-bold text-white mb-1 relative z-10">{stat.value}</div>
                  <div className="text-slate-400 text-sm relative z-10">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl relative overflow-hidden group">
                {/* Animated border effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center"
                    >
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        AR
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-medium text-white">Achmad Roffi Thoriq</h3>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        Samarinda, East Kalimantan
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 text-slate-300 leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="relative"
                    >
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
                      <p className="pl-6">
                        I am a 6th semester undergraduate student in the Information Systems Study Program with an
                        interest and focus in web development. Currently, I am also active as a Laboratory Assistant for
                        the Web Programming course on campus, where I play a role in helping students understand the
                        concepts and practices of website development using native PHP.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="relative"
                    >
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-transparent rounded-full"></div>
                      <p className="pl-6">
                        In addition to my academic experience, I have also participated in the MSIB Independent Study
                        program in E-Commerce Web Programming using Laravel. This program deepened my understanding of
                        modern web application development based on frameworks, especially in building structured and
                        efficient e-commerce features.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                      className="relative"
                    >
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-transparent rounded-full"></div>
                      <p className="pl-6">
                        With the combination of educational background, teaching experience, and professional training,
                        I have a strong foundation and high motivation to contribute to website development using PHP
                        and Laravel in a professional work environment.
                      </p>
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Full Stack Developer
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Lab Assistant
                    </Badge>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-400 border border-green-500/20">
                      MSIB Graduate
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <Card className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-6 relative">
                      {/* Background gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      <div className="relative z-10 flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-12 h-12 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center ${highlight.iconColor} group-hover:border-slate-600/50 transition-colors`}
                        >
                          <highlight.icon className="w-6 h-6" />
                        </motion.div>

                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-white mb-2 group-hover:text-blue-100 transition-colors">
                            {highlight.title}
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                            {highlight.description}
                          </p>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
