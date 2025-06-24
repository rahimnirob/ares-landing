"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Autonomous Surveillance",
    description: "Deploy once, monitor forever. Advanced algorithms continuously scan and analyze your competitive landscape without human intervention.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    color: "from-red-600 to-red-800"
  },
  {
    title: "Neural Analysis Engine",
    description: "Military-grade AI processes vast datasets, categorizing threats and opportunities with precision beyond human capability.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-2V2.5c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V4H3c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h4v2.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5V19h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
      </svg>
    ),
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Strategic Intelligence",
    description: "Receive classified briefings with actionable directives. No raw data dumps—only mission-critical intelligence.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    ),
    color: "from-green-600 to-green-800"
  },
  {
    title: "Zero Human Dependency",
    description: "Complete operational autonomy. From reconnaissance to analysis to strategic recommendations—fully automated warfare.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
      </svg>
    ),
    color: "from-yellow-600 to-orange-600"
  },
  {
    title: "Historical Archives",
    description: "Access complete mission history. Track strategic evolution and maintain operational continuity across all campaigns.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.25l1.41-1.41L19.5 16.43l-1.41 1.41L16.68 19.25zM15 5V3H9v2H4v2h16V5h-5z"/>
      </svg>
    ),
    color: "from-indigo-600 to-purple-600"
  },
  {
    title: "Targeted Operations",
    description: "Precision-guided intelligence tailored to your specific sector. Every briefing calibrated to your operational parameters.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: "from-red-600 to-pink-600"
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      {/* Dark Technical Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 0v100M0 50h100M25 0v100M75 0v100M0 25h100M0 75h100'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Scanning Lines */}
        <motion.div
          animate={{
            x: ["-100%", "100vw"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 text-white font-mono tracking-wider"
          >
            OPERATIONAL CAPABILITIES
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono"
          >
            Advanced warfare systems designed for market domination. Every module engineered for maximum efficiency and strategic advantage.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
              }}
              className="group relative"
            >
              {/* Subtle glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 blur-xl rounded-lg`}
              />
              
              <div className="relative bg-black/60 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-all duration-300 h-full">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} mb-6 text-white shadow-lg`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors font-mono tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors font-mono text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Workflow Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="relative mb-16">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent h-px"
            />
            <div className="relative bg-black px-8">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-sm text-red-400 font-mono tracking-widest"
              >
                DEPLOYMENT SEQUENCE
              </motion.span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-sm">
            {["INITIALIZE", "DEPLOY", "ANALYZE", "EXECUTE"].map((step, index) => (
              <div key={step} className="flex items-center gap-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                  }}
                  className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg w-16 h-16 flex items-center justify-center shadow-xl cursor-pointer border border-red-500"
                >
                  <span className="text-white font-bold text-lg font-mono">{index + 1}</span>
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-400 font-mono tracking-wide"
                >
                  {step}
                </motion.span>
                {index < 3 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="hidden lg:block w-12 h-px bg-gradient-to-r from-red-600 to-red-800"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}