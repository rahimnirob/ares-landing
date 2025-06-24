"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { supabase } from "@/lib/supabase"

const buildingStates = [
  "Initializing TILE engine...",
  "Deploying AI analysis modules...",
  "Calibrating scraper algorithms...",
  "Training neural networks...",
  "Compiling intelligence reports...",
  "Activating automation protocols...",
]

export default function Hero() {
  const [currentState, setCurrentState] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [waitlistCount, setWaitlistCount] = useState(1247)
  const [showAuth, setShowAuth] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Launch date: August 5, 2025
  const launchDate = new Date("2025-08-05T00:00:00Z")

  useEffect(() => {
    // Update building state every 4 seconds
    const stateInterval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % buildingStates.length)
    }, 4000)

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    // Update waitlist count every 3 hours (dummy increment)
    const waitlistInterval = setInterval(
      () => {
        setWaitlistCount((prev) => prev + Math.floor(Math.random() * 2) + 12)
      },
      3 * 60 * 60 * 1000,
    )

    return () => {
      clearInterval(stateInterval)
      clearInterval(countdownInterval)
      clearInterval(waitlistInterval)
    }
  }, [])

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Debug: Check if Supabase is connected
      console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL)
      console.log("Supabase Key exists:", !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
      console.log("Email to signup:", email)

      // Test Supabase connection first
      const { data: testData, error: testError } = await supabase
        .from('test')
        .select('*')
        .limit(1)

      console.log("Supabase connection test:", { testData, testError })

      // Now try signup
      const { data, error } = await supabase.auth.signUp({
        email,
        password: "temp-password-123456",
        options: {
          data: {
            waitlist: true,
            joined_at: new Date().toISOString(),
          },
        },
      })

      console.log("Signup response:", { data, error })

      if (error) {
        console.error("Signup error details:", error)
        
        // Show styled error message
        const alertDiv = document.createElement('div')
        alertDiv.innerHTML = `
          <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #1f2937, #111827);
            border: 2px solid #ef4444;
            border-radius: 12px;
            padding: 30px;
            z-index: 9999;
            font-family: 'JetBrains Mono', monospace;
            color: white;
            text-align: center;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            max-width: 400px;
          ">
            <div style="
              background: #ef4444;
              color: white;
              padding: 5px 15px;
              font-size: 10px;
              font-weight: 700;
              letter-spacing: 2px;
              margin-bottom: 20px;
              border-radius: 4px;
            ">SYSTEM ERROR</div>
            <div style="font-size: 18px; font-weight: bold; margin-bottom: 15px; color: #ef4444;">
              ENLISTMENT FAILED
            </div>
            <div style="font-size: 14px; color: #9ca3af; margin-bottom: 25px;">
              ${error.message}<br>
              <span style="font-size: 12px; color: #6b7280;">Check console for technical details</span>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
              background: #ef4444;
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 8px;
              font-family: 'JetBrains Mono', monospace;
              font-weight: bold;
              letter-spacing: 1px;
              cursor: pointer;
              transition: all 0.3s ease;
            " onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#ef4444'">
              RETRY MISSION
            </button>
          </div>
        `
        document.body.appendChild(alertDiv)
      } else {
        console.log("Signup successful:", data)
        
        // Update waitlist count
        const newPosition = waitlistCount + 1
        setWaitlistCount(newPosition)
        
        // Show success message
        const alertDiv = document.createElement('div')
        alertDiv.innerHTML = `
          <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #1f2937, #111827);
            border: 2px solid #22c55e;
            border-radius: 12px;
            padding: 30px;
            z-index: 9999;
            font-family: 'JetBrains Mono', monospace;
            color: white;
            text-align: center;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            max-width: 450px;
          ">
            <div style="
              background: #22c55e;
              color: black;
              padding: 5px 15px;
              font-size: 10px;
              font-weight: 700;
              letter-spacing: 2px;
              margin-bottom: 20px;
              border-radius: 4px;
            ">ENLISTMENT SUCCESSFUL</div>
            <div style="font-size: 18px; font-weight: bold; margin-bottom: 15px; color: #22c55e;">
              OPERATIVE ENLISTED
            </div>
            <div style="font-size: 14px; color: #9ca3af; margin-bottom: 25px;">
              Welcome to the ARES network, operative.<br>
              Check your email for confirmation instructions.
            </div>
            <div style="
              background: rgba(34, 197, 94, 0.1);
              border: 1px solid #22c55e;
              border-radius: 8px;
              padding: 15px;
              margin-bottom: 25px;
              font-size: 12px;
              color: #22c55e;
            ">
              <div style="font-weight: bold; margin-bottom: 5px;">MISSION STATUS:</div>
              <div>✓ Credentials secured in database</div>
              <div>✓ Confirmation email dispatched</div>
              <div>✓ Communications channel established</div>
              <div>✓ Awaiting email verification</div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
              background: #22c55e;
              color: black;
              border: none;
              padding: 12px 24px;
              border-radius: 8px;
              font-family: 'JetBrains Mono', monospace;
              font-weight: bold;
              letter-spacing: 1px;
              cursor: pointer;
              transition: all 0.3s ease;
            " onmouseover="this.style.background='#16a34a'" onmouseout="this.style.background='#22c55e'">
              MISSION ACKNOWLEDGED
            </button>
          </div>
        `
        document.body.appendChild(alertDiv)
      }

      setEmail("")
      setShowAuth(false)
    } catch (error) {
      console.error("Catch block error:", error)
      
      // Show catch error message
      const alertDiv = document.createElement('div')
      alertDiv.innerHTML = `
        <div style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(135deg, #1f2937, #111827);
          border: 2px solid #f59e0b;
          border-radius: 12px;
          padding: 30px;
          z-index: 9999;
          font-family: 'JetBrains Mono', monospace;
          color: white;
          text-align: center;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          max-width: 400px;
        ">
          <div style="
            background: #f59e0b;
            color: black;
            padding: 5px 15px;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2px;
            margin-bottom: 20px;
            border-radius: 4px;
          ">CONNECTION ERROR</div>
          <div style="font-size: 18px; font-weight: bold; margin-bottom: 15px; color: #f59e0b;">
            NETWORK FAILURE
          </div>
          <div style="font-size: 14px; color: #9ca3af; margin-bottom: 25px;">
            ${error?.message || 'Unknown connection error'}<br>
            <span style="font-size: 12px; color: #6b7280;">Check console for technical details</span>
          </div>
          <button onclick="this.parentElement.parentElement.remove()" style="
            background: #f59e0b;
            color: black;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-family: 'JetBrains Mono', monospace;
            font-weight: bold;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
          " onmouseover="this.style.background='#d97706'" onmouseout="this.style.background='#f59e0b'">
            RETRY CONNECTION
          </button>
        </div>
      `
      document.body.appendChild(alertDiv)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Dark Matrix-like Background */}
      <div className="absolute inset-0 z-0">
        {/* Scanning Lines */}
        <motion.div
          animate={{
            y: ["-100%", "100vh"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
        />
        <motion.div
          animate={{
            y: ["-100%", "100vh"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        />

        {/* Digital Rain Effect */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: ["-10px", "100vh"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Hexagonal Grid Pattern */}
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
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.15) contrast(1.5) hue-rotate(200deg)" }}
        >
          <source src="/hero-section-bg.mov" type="video/quicktime" />
          <source src="/hero-section-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
        {/* Logo and Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Professional Logo */}
          <div className="relative mb-6 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="ARES Logo"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl filter brightness-90 contrast-125"
              />
              {/* Subtle scanning effect */}
              <motion.div
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
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
                  className="w-3 h-3 bg-red-500 rounded-full shadow-lg border border-black"
                />
              </div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-wider"
            style={{
              textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
              fontFamily: "monospace",
            }}
          >
            ARES
          </motion.h1>

          <motion.p
            key={currentState}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-red-400 mb-2 font-mono tracking-wide"
          >
            {buildingStates[currentState]}
          </motion.p>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-mono">
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-red-500 rounded-full"
            />
            <span>SYSTEM STATUS: ACTIVE DEVELOPMENT</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-light mb-6 text-gray-100 leading-tight tracking-wide">
            AUTOMATED SEO INTELLIGENCE
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono">
            Deploy once. Dominate forever. Advanced AI algorithms continuously analyze your market,
            <br className="hidden md:block" />
            <span className="text-red-400 font-medium">delivering strategic intelligence without human intervention.</span>
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-sm text-gray-500 mb-6 font-mono tracking-widest">DEPLOYMENT COUNTDOWN</p>
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINS", value: timeLeft.minutes },
              { label: "SECS", value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-2xl hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1 font-mono">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                </motion.div>
                <div className="text-xs text-gray-500 mt-3 font-mono tracking-widest">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Waitlist Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg px-6 py-3 shadow-xl hover:border-red-500/50 transition-all duration-300"
          >
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-3 h-3 bg-red-500 rounded-full"
            />
            <span className="text-sm text-gray-400 font-mono">
              <span className="text-white font-bold text-lg">{waitlistCount.toLocaleString()}</span>
              <span className="ml-1">OPERATIVES ENLISTED</span>
            </span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAuth(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-xl font-mono tracking-wide border border-red-500"
          >
            ENLIST NOW
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-700 text-gray-300 px-8 py-4 rounded-lg text-sm font-semibold hover:border-gray-600 transition-all duration-300 backdrop-blur-sm font-mono tracking-wide"
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      </div>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg p-8 w-full max-w-md shadow-2xl relative"
          >
            {/* Classification Header */}
            <div className="absolute -top-3 left-8 bg-red-600 px-4 py-1 rounded text-xs font-mono tracking-widest text-white">
              SECURE ENLISTMENT
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-white text-center font-mono tracking-wide mt-4">
              OPERATIVE REGISTRATION
            </h3>
            
            <form onSubmit={handleJoinWaitlist}>
              <div className="mb-6">
                <label className="block text-sm font-mono text-gray-400 mb-2 tracking-wide">
                  SECURE EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="operative@domain.com"
                  className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all font-mono"
                  required
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-4 rounded-lg text-sm font-semibold transition-all disabled:opacity-50 font-mono tracking-wide flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      PROCESSING...
                    </>
                  ) : (
                    "CONFIRM ENLISTMENT"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAuth(false)}
                  className="px-6 py-4 border border-gray-700 rounded-lg text-sm hover:border-gray-600 hover:bg-gray-800/50 transition-all font-mono tracking-wide"
                >
                  ABORT
                </button>
              </div>
            </form>
            
            {/* Security Notice */}
            <div className="mt-6 p-3 bg-gray-900/50 border border-gray-700 rounded text-xs text-gray-500 font-mono">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-500 font-bold">SECURITY NOTICE</span>
              </div>
              Your credentials will be encrypted and stored in our secure database.
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}