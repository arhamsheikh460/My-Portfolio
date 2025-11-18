'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

interface NavbarProps {
  theme: string
  toggleTheme: () => void
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [focusX, setFocusX] = useState(0)
  const [focusWidth, setFocusWidth] = useState(0)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect current section based on scroll position
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 relative">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-all relative ${
                  activeSection === section.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-foreground to-muted-foreground"
                    style={{
                      width: '100%',
                      animation:
                        focusX === 0
                          ? 'slideFromLeft 0.4s ease-out'
                          : focusX > 0
                            ? 'slideFromLeft 0.4s ease-out'
                            : 'slideFromRight 0.4s ease-out',
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left px-2 py-2 rounded transition-all ${
                    activeSection === section.id
                      ? 'text-foreground bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideFromLeft {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
        @keyframes slideFromRight {
          from {
            transform: scaleX(0);
            transform-origin: right;
          }
          to {
            transform: scaleX(1);
            transform-origin: right;
          }
        }
      `}</style>
    </nav>
  )
}
