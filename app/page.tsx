"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { BlogSection } from "@/components/blog-section";
import { ResumeSection } from "@/components/resume-section";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <AnimatedBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <ContactSection />
      <BlogSection />
      <ResumeSection />
    </div>
  );
}
