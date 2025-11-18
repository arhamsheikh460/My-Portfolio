'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Palette, PenOff, Zap } from 'lucide-react'

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-muted/30 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className={`text-4xl md:text-5xl font-black tracking-tighter mb-12 text-balance transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left content */}
          <div 
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full-Stack Developer with expertise in building scalable, modern web applications. With a strong foundation in both frontend and backend development, I create seamless digital experiences that bridge design and functionality.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Zap />, title: 'Performance Optimized', desc: 'Building fast, responsive applications with attention to detail' },
                { icon: <Palette />, title: 'Design Focused', desc: 'Creating beautiful, intuitive user interfaces' },
                { icon: <PenOff />, title: 'Full-Stack Ready', desc: 'Complete solutions from backend to frontend' },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                  }`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center `flex-shrink-0`">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '20+', label: 'Projects Completed' },
              { number: '10+', label: 'Happy Clients' },
              { number: '1.5+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border border-border bg-card/50 backdrop-blur hover:border-foreground/50 transition-all duration-300 text-center ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <div className="text-3xl font-black text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
