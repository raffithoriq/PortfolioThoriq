"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function CyberpunkBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />

      {/* Moving neon orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #00ffff 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [100, 300, 100],
          y: [100, 400, 100],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #ff00ff 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [400, 100, 400],
          y: [200, 500, 200],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, #ffff00 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          x: [200, 500, 200],
          y: [300, 100, 300],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Mouse follower glow */}
      <motion.div
        className="absolute w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00ffff 0%, transparent 70%)",
          filter: "blur(20px)",
          opacity: 0.3,
        }}
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Floating geometric shapes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-cyan-400/30"
          style={{
            width: Math.random() * 20 + 10,
            height: Math.random() * 20 + 10,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
