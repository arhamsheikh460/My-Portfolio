'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time inventory management',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/ecommerce-platform-concept.png',
    },
    {
      title: 'Social Network App',
      description: 'Real-time messaging and social features with WebSocket integration',
      tags: ['React', 'Express', 'MongoDB'],
      image: '/social-network-app.png',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization tool with real-time metrics and insights',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/analytics-dashboard.png',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with user authentication',
      tags: ['React', 'Express', 'MongoDB'],
      image: '/task-management-concept.png',
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-muted/30 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className={`text-4xl md:text-5xl font-black tracking-tighter mb-12 text-balance transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur hover:border-foreground/50 transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{
                transform: hoveredIndex === i ? 'translateY(-8px) scale(1.02)' : 'none',
                transitionDelay: `${i * 100}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-video bg-muted/50 overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground/80 hover:bg-foreground/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
