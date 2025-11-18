'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation()
  
  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'ArSwift Private Ltd',
      period: '2024 - 2025',
      description: 'Built and maintained multiple production applications using MERN stack',
    },
    {
      role: 'Frontend Developer',
      period: '2024 - 2025',
      description: 'Developed responsive web interfaces and implemented UI/UX designs',
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2023 - 2025',
      description: 'Started career working with React and Node.js on various projects',
    },
  ]

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className={`text-4xl md:text-5xl font-black tracking-tighter mb-12 text-balance transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative pl-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-foreground border-4 border-background" />

              {/* Timeline line */}
              {i < experiences.length - 1 && (
                <div className="absolute left-1.5 top-6 w-0.5 h-20 bg-gradient-to-b from-foreground to-muted-foreground/30" />
              )}

              <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-foreground/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">{exp.company}</div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
