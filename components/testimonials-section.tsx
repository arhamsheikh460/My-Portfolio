export function TestimonialsSection() {
  const testimonials = [
    {
      text: 'Exceptional developer with outstanding attention to detail and problem-solving skills.',
      author: 'Sarah Johnson',
      role: 'CEO, Tech Innovations',
      avatar: '👩‍💼',
    },
    {
      text: 'Delivered the project on time with excellent code quality and clean architecture.',
      author: 'Michael Chen',
      role: 'Product Manager, Digital Solutions',
      avatar: '👨‍💼',
    },
    {
      text: 'Great communication skills and ability to translate complex requirements into elegant solutions.',
      author: 'Emily Rodriguez',
      role: 'Design Lead, Creative Agency',
      avatar: '👩‍🎨',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-balance">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-foreground/50 hover:bg-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
