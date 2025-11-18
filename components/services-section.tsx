'use client'

import { Zap, Code2, Palette, Database } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()
  
  const services = [
    {
      title: 'Web Application Development',
      description: 'Custom full-stack web applications tailored to your business needs with modern frameworks and best practices',
      icon: Zap,
    },
    {
      title: 'API Development',
      description: 'Robust RESTful and GraphQL APIs with secure authentication, rate limiting, and comprehensive documentation',
      icon: Code2,
    },
    {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces with cutting-edge technologies, animations, and optimized performance',
      icon: Palette,
    },
    {
      title: 'Database Design',
      description: 'Efficient database architecture, optimization strategies, and scalable data management solutions',
      icon: Database,
    },
  ]

  return (
    <section id="services" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className={`text-4xl md:text-5xl font-black tracking-tighter mb-4 text-balance transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Services
        </h2>
        <p 
          className={`text-muted-foreground mb-12 max-w-lg transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Comprehensive development solutions to bring your vision to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className={`p-8 rounded-xl border border-border bg-card/50 backdrop-blur hover:border-foreground/50 group transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-card/80 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-100 group-hover:-rotate-1 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
