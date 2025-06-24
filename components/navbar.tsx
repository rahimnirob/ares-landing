"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50"
    >
      {/* Top status bar */}
      <div className="bg-red-600/90 text-white text-xs font-mono tracking-widest text-center py-1">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center gap-2"
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
          SYSTEM STATUS: ACTIVE DEVELOPMENT - DEPLOYMENT COUNTDOWN INITIATED
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="ARES Logo"
                width={32}
                height={32}
                className="w-8 h-8 filter brightness-90 contrast-125"
              />
              {/* Scanning effect */}
              <motion.div
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
              />
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1">
                <motion.div
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 bg-red-500 rounded-full border border-black"
                />
              </div>
            </div>
            <span className="text-xl font-bold text-white font-mono tracking-wider">ARES</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <motion.a 
                href="#features" 
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-white text-sm font-mono tracking-wide transition-colors relative group"
              >
                CAPABILITIES
                <div className="absolute bottom-0 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300"></div>
              </motion.a>
              <motion.a 
                href="#vision" 
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-white text-sm font-mono tracking-wide transition-colors relative group"
              >
                MISSION
                <div className="absolute bottom-0 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300"></div>
              </motion.a>
              <motion.a 
                href="#community" 
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-white text-sm font-mono tracking-wide transition-colors relative group"
              >
                NETWORK
                <div className="absolute bottom-0 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300"></div>
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(239, 68, 68, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-mono tracking-wide transition-all border border-red-500 shadow-lg"
              >
                ENLIST
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white p-2"
            >
              <motion.svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800/50 bg-black/50 backdrop-blur-sm">
              <motion.a 
                href="#features" 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 hover:text-white block px-3 py-3 text-sm font-mono tracking-wide hover:bg-gray-800/50 rounded transition-all"
              >
                CAPABILITIES
              </motion.a>
              <motion.a 
                href="#vision" 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 hover:text-white block px-3 py-3 text-sm font-mono tracking-wide hover:bg-gray-800/50 rounded transition-all"
              >
                MISSION
              </motion.a>
              <motion.a 
                href="#community" 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 hover:text-white block px-3 py-3 text-sm font-mono tracking-wide hover:bg-gray-800/50 rounded transition-all"
              >
                NETWORK
              </motion.a>
              <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full text-left bg-red-600 hover:bg-red-700 text-white px-3 py-3 rounded-lg text-sm font-mono tracking-wide transition-all mt-2 border border-red-500"
              >
                ENLIST NOW
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scanning line effect */}
      <motion.div
        animate={{
          x: ["-100%", "100vw"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent"
      />
    </motion.nav>
  )
}