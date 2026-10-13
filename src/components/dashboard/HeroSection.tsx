"use client";

import React from "react";
import { portfolioContent } from "@/content/content";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import {
  MapPin,
  FileText,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Database,
  LineChart,
  ShoppingBag,
  Users,
  Briefcase,
  Globe,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Database: <Database className="w-5 h-5 text-accent-teal" />,
    LineChart: <LineChart className="w-5 h-5 text-accent-amber" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-accent-violet" />,
    Users: <Users className="w-5 h-5 text-accent-teal" />,
    Briefcase: <Briefcase className="w-5 h-5 text-accent-amber" />,
    Globe: <Globe className="w-5 h-5 text-accent-emerald" />,
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent-teal shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent-amber animate-pulse-slow" />
              <span>{portfolioContent.personal.roleTitle}</span>
            </div>

            {/* H1 Name */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-tight">
              Abir <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal via-accent-amber to-accent-violet">Rouag</span>
            </h1>

            {/* Positioning Statement */}
            <p className="text-lg sm:text-xl text-text-muted leading-relaxed font-normal max-w-2xl">
              &quot;{portfolioContent.personal.heroSubtitle}&quot;
            </p>

            {/* Location Chip */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-text-muted font-mono">
              <MapPin className="w-4 h-4 text-accent-amber shrink-0" />
              <span>{portfolioContent.personal.location}</span>
            </div>

            {/* CTAs & Social Icons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-5 py-3 rounded-xl bg-accent-teal text-slate-950 font-bold text-sm hover:bg-teal-300 transition-all flex items-center gap-2 shadow-glow focus:ring-2 focus:ring-accent-teal"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={portfolioContent.personal.cvPdfPath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-surface border border-accent-amber/50 text-accent-amber hover:bg-accent-amber hover:text-slate-950 font-bold text-sm transition-all flex items-center gap-2 shadow-sm focus:ring-2 focus:ring-accent-amber"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-3 rounded-xl bg-surface border border-border text-text-primary hover:bg-surface-hover font-semibold text-sm transition-all flex items-center gap-2 focus:ring-2 focus:ring-accent-teal"
              >
                <Mail className="w-4 h-4 text-accent-teal" />
                <span>Contact Me</span>
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-auto sm:ml-2">
                <a
                  href={portfolioContent.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-border bg-surface text-text-muted hover:text-text-primary hover:border-accent-teal transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioContent.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile (TODO)"
                  className="p-2.5 rounded-lg border border-border bg-surface text-text-muted hover:text-text-primary hover:border-accent-teal transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mini Dashboard Card (Illustrative BI Widget) */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 shadow-2xl space-y-6 relative overflow-hidden group border border-border hover:border-accent-teal/50 transition-all duration-300">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-teal animate-pulse-slow" />
                  <span className="font-mono text-xs text-text-muted uppercase tracking-wider">Executive BI Summary</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] font-mono text-text-muted">
                  Illustrative
                </span>
              </div>

              {/* Decorative KPI Indicators */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-surface p-3 rounded-xl border border-border text-center">
                  <span className="text-[10px] text-text-muted block font-mono uppercase">CAC</span>
                  <span className="font-mono font-bold text-sm text-accent-teal">$18.4</span>
                  <span className="text-[9px] text-accent-emerald block font-mono">↓ 14%</span>
                </div>
                <div className="bg-surface p-3 rounded-xl border border-border text-center">
                  <span className="text-[10px] text-text-muted block font-mono uppercase">ROAS</span>
                  <span className="font-mono font-bold text-sm text-accent-amber">4.2x</span>
                  <span className="text-[9px] text-accent-emerald block font-mono">↑ 0.8x</span>
                </div>
                <div className="bg-surface p-3 rounded-xl border border-border text-center">
                  <span className="text-[10px] text-text-muted block font-mono uppercase">Conversion</span>
                  <span className="font-mono font-bold text-sm text-accent-violet">13.3%</span>
                  <span className="text-[9px] text-accent-emerald block font-mono">Paid Search</span>
                </div>
              </div>

              {/* SVG Sparkline Graph Graphic */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-text-muted font-mono">
                  <span>Revenue vs Acquisition Trend</span>
                  <span className="text-accent-teal font-bold">+28% YoY</span>
                </div>
                <div className="h-28 w-full bg-surface-hover/50 rounded-xl border border-border/80 p-2 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 65 L40 50 L80 58 L120 30 L160 42 L200 20 L240 28 L280 8 L300 12"
                      stroke="var(--accent-teal)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 65 L40 50 L80 58 L120 30 L160 42 L200 20 L240 28 L280 8 L300 12 L300 80 L0 80 Z"
                      fill="url(#sparkline-gradient)"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent-teal)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-text-muted border-t border-border/40">
                <span className="flex items-center gap-1.5 text-accent-teal">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Real-time ETL Stream</span>
                </span>
                <span>PostgreSQL • Power BI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Hero KPI Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {portfolioContent.heroKpis.map((kpi) => (
            <div
              key={kpi.id}
              className="bg-surface/90 border border-border hover:border-accent-teal/60 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 shadow-card group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-surface-hover border border-border group-hover:border-accent-teal/40 transition-colors">
                  {iconMap[kpi.iconName] || <Database className="w-5 h-5 text-accent-teal" />}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight font-mono">
                <AnimatedCounter value={kpi.value} suffix={kpi.suffix} prefix={kpi.prefix} />
              </div>
              <h3 className="text-xs font-heading font-semibold text-text-primary mt-1">
                {kpi.label}
              </h3>
              <p className="text-[11px] text-text-muted mt-1 leading-tight line-clamp-2">
                {kpi.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
