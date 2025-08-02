"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code, Database, Cpu, Instagram } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Elegant Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative mx-auto w-48 h-48 drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.3))",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-700/50 p-1 shadow-2xl shadow-blue-500/30">
              <div className="w-full h-full rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                      "linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="absolute inset-0 rounded-full"
                />
                <Image
                  src="/images/thoriq.jpg"
                  alt="Achmad Roffi Thoriq"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover rounded-full relative z-10"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* Floating tech icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0"
            >
              <Code className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 text-blue-400/60" />
              <Database className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-5 h-5 text-purple-400/60" />
              <Cpu className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 text-slate-400/60" />
            </motion.div>
          </motion.div>

          {/* Name with elegant typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-light text-white tracking-wide"
              animate={{
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.2)",
                  "0 0 30px rgba(139, 92, 246, 0.6), 0 0 50px rgba(168, 85, 247, 0.4), 0 0 70px rgba(59, 130, 246, 0.3)",
                  "0 0 25px rgba(236, 72, 153, 0.5), 0 0 45px rgba(59, 130, 246, 0.4), 0 0 65px rgba(139, 92, 246, 0.3)",
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.2)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Achmad Roffi{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  textShadow: [
                    "0 0 30px rgba(59, 130, 246, 0.7), 0 0 50px rgba(139, 92, 246, 0.5), 0 0 70px rgba(168, 85, 247, 0.4)",
                    "0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(168, 85, 247, 0.6), 0 0 80px rgba(236, 72, 153, 0.4)",
                    "0 0 35px rgba(168, 85, 247, 0.7), 0 0 55px rgba(236, 72, 153, 0.5), 0 0 75px rgba(59, 130, 246, 0.4)",
                    "0 0 30px rgba(59, 130, 246, 0.7), 0 0 50px rgba(139, 92, 246, 0.5), 0 0 70px rgba(168, 85, 247, 0.4)",
                  ],
                }}
                transition={{
                  delay: 0.6,
                  textShadow: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              >
                Thoriq
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                textShadow: [
                  "0 0 15px rgba(148, 163, 184, 0.4), 0 0 25px rgba(148, 163, 184, 0.2)",
                  "0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(148, 163, 184, 0.3)",
                  "0 0 18px rgba(139, 92, 246, 0.3), 0 0 28px rgba(148, 163, 184, 0.2)",
                  "0 0 15px rgba(148, 163, 184, 0.4), 0 0 25px rgba(148, 163, 184, 0.2)",
                ],
              }}
              transition={{
                delay: 0.8,
                textShadow: {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              className="text-xl md:text-2xl text-slate-400 font-light"
            >
              Full Stack Developer & Information Systems Student
            </motion.div>
          </motion.div>

          {/* Elegant description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with modern technologies and elegant solutions
          </motion.p>

          {/* Premium buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full border-0 shadow-lg shadow-blue-500/25"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white px-8 py-3 rounded-full bg-slate-900/50 backdrop-blur-sm"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Elegant social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/raffithoriq", color: "hover:text-blue-400" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/raffi-thoriq/", color: "hover:text-purple-400" },
              { icon: Instagram, href: "https://www.instagram.com/raffithoriq/", color: "hover:text-pink-400" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : "_self"}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 text-slate-400 ${social.color} transition-all duration-300`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
