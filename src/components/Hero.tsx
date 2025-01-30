'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/80 dark:from-blue-950/80 dark:to-gray-900/80" />
        <div className="absolute inset-0 bg-[url('/portifolio/grid.svg')] bg-center opacity-10" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-600/30 to-transparent rounded-full blur-3xl"
        />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-200 dark:border-blue-800 rounded-full opacity-20" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-blue-300 dark:border-blue-700 rounded-full opacity-20" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-blue-400 dark:border-blue-600 rounded-full opacity-20" />
        
        {/* Blue dots pattern */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"
              style={{
                gridColumn: Math.floor(Math.random() * 12) + 1,
                gridRow: Math.floor(Math.random() * 12) + 1,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <span className="glass-effect px-4 py-2 rounded-full text-sm text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                Disponível para projetos
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="text-blue-950 dark:text-blue-100">Olá, eu sou</span><br />
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative inline-block"
              >
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                  Desenvolvedor Full Stack
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-blue-800 dark:text-blue-200 mb-8 opacity-90"
            >
              Transformando ideias em experiências digitais incríveis
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-primary inline-block"
              >
                Contato
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn-secondary inline-block"
              >
                Projetos
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            className="md:w-1/2 relative"
          >
            <div className="relative w-64 h-64 mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 blur-3xl opacity-20 animate-pulse" />
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-500/30 dark:border-blue-400/30"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-8 rounded-full border-2 border-dashed border-blue-500/20 dark:border-blue-400/20"
              />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="logo.jpeg"
                  alt="Foto de perfil"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blue sparkles */}
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
