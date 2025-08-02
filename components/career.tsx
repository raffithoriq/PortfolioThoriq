"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase } from "lucide-react"

const careerHistory = [
  {
    title: "Intern Fullstack Developer",
    organization: "PT. Rivolta Solusi Teknologi",
    period: "February 2024 - Present",
    type: "work",
    description:
      "Currently working as a fullstack developer intern, gaining hands-on experience in web development projects.",
    status: "Active",
  },
  {
    title: "S1 Sistem Informasi",
    organization: "Universitas Mulawarman",
    period: "2022 - Present",
    type: "education",
    description:
      "Pursuing Bachelor's degree in Information Systems, currently in 6th semester with focus on web development.",
    status: "In Progress",
  },
  {
    title: "SMA Negeri 2 Samarinda",
    organization: "High School",
    period: "2020 - 2022",
    type: "education",
    description: "Completed high school education with strong foundation in mathematics and sciences.",
    status: "Completed",
  },
  {
    title: "SMP Negeri 6 Samarinda",
    organization: "Junior High School",
    period: "2017 - 2019",
    type: "education",
    description: "Completed junior high school education with excellent academic performance.",
    status: "Completed",
  },
]

export function Career() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="career" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Career Journey</h2>
          <div className="w-24 h-px bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Elegant Timeline */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-slate-600"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            />

            {careerHistory.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start mb-12"
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center"
                >
                  {item.type === "work" ? (
                    <Briefcase className="w-7 h-7 text-blue-400" />
                  ) : (
                    <GraduationCap className="w-7 h-7 text-purple-400" />
                  )}

                  {/* Status indicator */}
                  {item.status === "Active" && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900"
                    />
                  )}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
                  whileHover={{ x: 5 }}
                  className="ml-8 flex-1"
                >
                  <Card className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-medium text-white">{item.title}</h3>
                        <span className="text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-purple-300 font-medium mb-3">{item.organization}</p>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>

                      {/* Status badge */}
                      <div className="mt-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === "Active"
                              ? "bg-green-400/10 text-green-400 border border-green-400/20"
                              : item.status === "In Progress"
                                ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                                : "bg-slate-400/10 text-slate-400 border border-slate-400/20"
                          }`}
                        >
                          {item.status === "Active" && (
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                              className="w-2 h-2 bg-green-400 rounded-full"
                            />
                          )}
                          {item.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
