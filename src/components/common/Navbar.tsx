"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { RecruiterModeToggle } from "./RecruiterModeToggle";
import { FileText, Command, Menu, X, BarChart2 } from "lucide-react";
import { portfolioContent } from "@/content/content";

interface NavbarProps {
  isRecruiterMode: boolean;
  onToggleRecruiterMode: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isRecruiterMode,
  onToggleRecruiterMode,
  onOpenCommandPalette,
}) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "leadership", label: "Leadership" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Section Observer
    const sectionIds = navLinks.map((link) => link.id);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-nav py-2.5 shadow-card" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group text-left focus:ring-2 focus:ring-accent-teal rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent-teal group-hover:border-accent-teal transition-colors shadow-sm">
            <BarChart2 className="w-5 h-5 text-accent-teal" />
          </div>
          <div>
            <span className="font-heading font-bold text-sm sm:text-base text-text-primary tracking-tight block leading-tight">
              Abir Rouag
            </span>
            <span className="text-[10px] font-mono text-text-muted block leading-none">
              Insight Dashboard
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        {!isRecruiterMode && (
          <nav className="hidden lg:flex items-center gap-1 bg-surface/50 border border-border/60 rounded-full px-3 py-1 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-accent-teal text-slate-950 font-semibold shadow-sm"
                      : "text-text-muted hover:text-text-primary hover:bg-surface-hover"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        )}

        {/* Actions Strip */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open command palette (Ctrl+K)"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-surface hover:border-accent-teal text-xs text-text-muted hover:text-text-primary transition-colors focus:ring-2 focus:ring-accent-teal"
            title="Command Palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5 text-accent-teal" />
            <span className="font-mono text-[11px] font-semibold">⌘K</span>
          </button>

          {/* Recruiter Mode Toggle */}
          <RecruiterModeToggle
            isRecruiterMode={isRecruiterMode}
            onToggle={onToggleRecruiterMode}
          />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Download CV CTA */}
          <a
            href={portfolioContent.personal.cvPdfPath}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-accent-amber/40 text-accent-amber hover:bg-accent-amber hover:text-slate-950 text-xs font-semibold transition-all shadow-sm focus:ring-2 focus:ring-accent-amber"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg border border-border text-text-muted hover:text-text-primary"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && !isRecruiterMode && (
        <div className="lg:hidden glass-nav border-b border-border px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-accent-teal text-slate-950 font-bold"
                    : "bg-surface border border-border text-text-muted hover:text-text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-border mt-3">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border text-xs text-text-muted"
            >
              <Command className="w-4 h-4 text-accent-teal" />
              <span>Search Command Palette (⌘K)</span>
            </button>
            <a
              href={portfolioContent.personal.cvPdfPath}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-accent-amber text-slate-950 text-xs font-bold"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
