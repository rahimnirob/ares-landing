"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 py-16 px-4 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 0v100M0 50h100M25 0v100M75 0v100M0 25h100M0 75h100'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Scanning Line */}
        <motion.div
          animate={{
            x: ["-100%", "100vw"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="ARES Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 filter brightness-90 contrast-125"
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
              <span className="text-2xl font-bold text-white font-mono tracking-wider">ARES</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed font-mono">
              Advanced Reconnaissance & Engagement System. Automated SEO warfare for strategic market dominance.
            </p>
            
            {/* Classification Badge */}
            <div className="mt-4 inline-block bg-red-600/20 border border-red-600/50 px-3 py-1 rounded text-xs font-mono tracking-widest text-red-400">
              CLASSIFIED PROJECT
            </div>
          </motion.div>

          {[
            {
              title: "OPERATIONS",
              links: ["Capabilities", "Deployment", "Documentation", "API Access"]
            },
            {
              title: "COMMAND", 
              links: ["Mission Brief", "Intelligence", "Recruitment", "Contact HQ"]
            },
            {
              title: "PROTOCOLS",
              links: ["Security Policy", "Terms of Engagement", "Data Handling", "Compliance"]
            }
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-bold mb-6 text-white font-mono tracking-widest">{section.title}</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a 
                      href="#" 
                      whileHover={{ x: 5 }}
                      className="hover:text-gray-300 transition-all font-mono tracking-wide relative group"
                    >
                      <span className="group-hover:text-red-400 transition-colors">&gt;</span> {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 pt-8"
        >
          {/* System Status Bar */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-3 h-3 bg-green-400 rounded-full"
                  />
                  <span className="text-sm text-gray-400 font-mono">SYSTEM STATUS: OPERATIONAL</span>
                </div>
                <div className="h-4 w-px bg-gray-700"></div>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-3 h-3 bg-red-500 rounded-full"
                  />
                  <span className="text-sm text-gray-400 font-mono">DEPLOYMENT: ACTIVE</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-500 font-mono">
                UPTIME: 99.9% | LATENCY: &lt;50ms | THREATS: 0
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 font-mono">
              © 2024 ARES COMMAND. ALL OPERATIONS CLASSIFIED.
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2 font-mono">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
                <span>ENGINEERED FOR DOMINANCE</span>
              </div>
              
              <div className="h-4 w-px bg-gray-700"></div>
              
              <div className="flex items-center gap-2 font-mono">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                <span>SECURE CONNECTION</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}