'use client'

import { useEffect, useState, useRef } from 'react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'My_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-[80vh] 2xl:min-h-[40vh]  flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 255, 255, 0.15), transparent 50%)`,
        }}
      />
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${(1 - mousePosition.x) * 100}% ${(1 - mousePosition.y) * 100}%, rgba(156, 163, 175, 0.2), transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 via-transparent to-gray-500/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="animate-slide-in-left space-y-6 w-full flex flex-col items-center text-center">
          <div className="space-y-3">
            <div className="text-sm md:text-xl font-medium text-muted-foreground uppercase tracking-wider">
              Hello WORLD
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
              I Am Arham
               
            </h1>
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
              Full-Stack <span className="text-6xl lg:text-7xl font-black tracking-tighter leading-tight bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
                 Developer
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Building futuristic web experiences with cutting-edge technologies. Specialized in MERN stack development with a passion for clean code and seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <button 
              onClick={handleGetInTouch}
              className="px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get in Touch
            </button>
            <button 
              onClick={handleDownloadResume}
              className="px-8 py-3 border border-foreground text-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-300"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}