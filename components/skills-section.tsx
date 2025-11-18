'use client'

import { useRef } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  const skills = [
    'HTML5',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'ShadeCn',
    'REST APIs',
    'Redux',
    'Tailwind',
    'GitHub',
    'VSCode',
    'Framer Motion',
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <h2 
          className={`text-4xl md:text-5xl font-black tracking-tighter mb-4 text-balance transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Technical Skills
        </h2>
        <p 
          className={`text-muted-foreground mb-12 max-w-lg transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Proficient with modern web technologies for building scalable and interactive applications
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`group p-3 md:p-4 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-foreground/50 hover:bg-card transition-all duration-300 text-center hover:scale-105 hover:shadow-lg ${
                isVisible ? 'animate-drop-in' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: isVisible ? `${0.05 + i * 0.08}s` : '0s',
              }}
            >
              <h3 className="font-bold text-xs md:text-sm lg:text-base truncate">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
