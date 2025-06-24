"use client"

import { motion } from "framer-motion"

export default function Vision() {
  return (
    <section id="vision" className="py-24 px-4 relative overflow-hidden">
      {/* Dark Military Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Radar Sweep Effect */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 border border-green-500/10 rounded-full"></div>
          <div className="absolute inset-4 border border-green-500/20 rounded-full"></div>
          <div className="absolute inset-8 border border-green-500/30 rounded-full"></div>
          <motion.div
            className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gradient-to-r from-green-500/50 to-transparent origin-left"
            style={{ transformOrigin: "0 50%" }}
          />
        </motion.div>

        {/* Technical Grid */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='nonzero'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 text-white font-mono tracking-wider"
          >
            MISSION DIRECTIVE
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-12"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed font-mono"
          >
            We deploy where others fear to tread. Where <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-red-400 font-bold"
            >
              strategic automation
            </motion.span> replaces human limitation,
            where intelligence operations never sleep.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-500 leading-relaxed max-w-4xl mx-auto font-mono"
          >
            The battlefield is littered with tools that collect data but lack strategic vision. Operators waste precious resources
            on manual reconnaissance while competitors advance. This ends now.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                  </svg>
                ), 
                title: "VELOCITY", 
                desc: "From weeks of reconnaissance to minutes of actionable intelligence", 
                color: "from-red-600 to-red-800" 
              },
              { 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ), 
                title: "PRECISION", 
                desc: "Neural networks calibrated for your specific operational theater", 
                color: "from-blue-600 to-blue-800" 
              },
              { 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ), 
                title: "PERSISTENCE", 
                desc: "Continuous operations with zero downtime or human oversight required", 
                color: "from-green-600 to-green-800" 
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                }}
                className="text-center group relative"
              >
                <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-all duration-300">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${item.color} mb-6 text-white shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors font-mono tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors font-mono">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="mt-16 relative group"
          >
            <div className="relative p-8 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300">
              {/* Classification Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-3 left-8 bg-red-600 px-4 py-1 rounded text-xs font-mono tracking-widest text-white"
              >
                CLASSIFIED
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-base text-gray-300 leading-relaxed relative z-10 font-mono"
              >
                "We are not developing another tool. We are engineering the future of strategic warfare—where SEO intelligence 
                operates with the precision of military automation and the relentlessness of machine learning."
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="mt-6 text-sm text-red-400 font-mono tracking-widest relative z-10"
              >
                — ARES COMMAND
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}