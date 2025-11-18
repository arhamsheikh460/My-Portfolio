'use client'

import { useState, useRef } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import toast from 'react-hot-toast'
import { Github, Linkedin, Mail, MapPin, Phone, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()

  const formRef = useRef<HTMLFormElement | null>(null)

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/arhamsheikh460",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/arham-sheikh-765767327/",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setLoading(true)

    try {
      await emailjs.sendForm(
        "service_wpwvv7h",
        "template_yoonvul",
        formRef.current,
        "zyKEvok19cj7qVL_X"
      )

      toast.success("Message sent successfully! 🚀")

      setFormData({ name: '', email: '', message: '' })

    } catch (err) {
      console.error(err)
      toast.error("Failed to send message. Try again.")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 
          className={`text-4xl md:text-5xl font-black tracking-tighter mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Get In Touch
        </h2>

        <p 
          className={`text-muted-foreground mb-12 max-w-lg transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* FORM */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* CONTACT DETAILS */}
          <div className="space-y-8">

            {[
              { icon: <Mail />, label: 'Email', value: 'webdevbyarham@gmail.com' },
              { icon: <Phone />, label: 'Phone', value: '+92 3347266002' },
              { icon: <MapPin />, label: 'Location', value: 'Faisalabad, Pakistan' },
            ].map((info, i) => (
              <div
                key={i}
                className={`flex gap-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="text-3xl mt-4">{info.icon}</div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                  <div className="font-semibold">{info.value}</div>
                </div>
              </div>
            ))}

            {/* SOCIALS */}
            <div className="pt-8 border-t border-border">
              <div className="text-sm text-muted-foreground mb-4">Follow me</div>
              <div className="flex gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
