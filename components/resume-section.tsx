'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { FileUser } from 'lucide-react'

export function ResumeSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="resume" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className={`text-4xl md:text-5xl font-black tracking-tighter mb-12 text-balance transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Resume
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Skills */}
          <div 
            className={`flex-1 p-8 rounded-xl border border-border bg-card/50 backdrop-blur transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {[
                { category: 'Frontend', skills: 'React, Next.js, TypeScript, Tailwind CSS' },
                { category: 'Backend', skills: 'Node.js, Express, REST APIs,' },
                { category: 'Database', skills: 'MongoDB, MYSQL, Firebase' },
                { category: 'Tools', skills: 'Git Hub, VsCode, Cloudinary, Vercel' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="font-semibold text-sm mb-1">{item.category}</div>
                  <div className="text-muted-foreground text-sm">{item.skills}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Download */}
          <div 
            className={`flex-1 flex flex-col items-center justify-center p-8 rounded-xl border border-border bg-card/50 backdrop-blur transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <div className="text-5xl mb-4"><FileUser size={57} /></div>
            <h3 className="text-lg font-bold mb-2">Download Full Resume</h3>
            <p className="text-muted-foreground text-sm text-center mb-6">
              Get my complete CV with detailed experience and achievements
            </p>
            <a href='/cv.pdf' download="My_Cv.pdf" className="px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-100 active:scale-95 group">
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
