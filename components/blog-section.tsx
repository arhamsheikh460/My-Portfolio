'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function BlogSection() {
  const { ref, isVisible } = useScrollAnimation()
  
  const articles = [
    {
      title: 'Building Scalable APIs with Node.js',
      excerpt: 'Best practices for designing RESTful APIs that can handle millions of requests',
      date: '2025-9-15',
      readTime: '5 min read',
      tag: 'Backend',
    },
    {
      title: 'React Performance Optimization Tips',
      excerpt: 'Essential techniques to improve your React application performance',
      date: '2025-10-15',
      readTime: '7 min read',
      tag: 'Frontend',
    },
    {
      title: 'Database Indexing Strategies',
      excerpt: 'Learn how to optimize MongoDB queries with proper indexing',
      date: '2025-11-15',
      readTime: '6 min read',
      tag: 'Database',
    },
  ]

  return (
    <section id="blog" className="py-20 bg-muted/30 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className={`text-4xl md:text-5xl font-black tracking-tighter mb-12 text-balance transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className={`p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-foreground/50 group transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-foreground/80">
                  {article.tag}
                </span>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>

              <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {article.excerpt}
              </p>

              <div className="text-xs text-muted-foreground">
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
