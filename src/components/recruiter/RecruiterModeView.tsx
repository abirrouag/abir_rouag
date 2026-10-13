"use client";

import React from "react";
import { portfolioContent } from "@/content/content";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Zap, FileText, Mail, Phone, Github, Linkedin, ExternalLink, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface RecruiterModeViewProps {
  onExitRecruiterMode: () => void;
}

export const RecruiterModeView: React.FC<RecruiterModeViewProps> = ({
  onExitRecruiterMode,
}) => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-300">
      {/* High-density Recruiter Banner */}
      <div className="p-6 rounded-2xl bg-accent-amber/10 border-2 border-accent-amber flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-amberGlow">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-accent-amber font-mono text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 animate-pulse-slow" />
            <span>Recruiter Mode Active — 60-Second Executive Summary</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary">
            Abir Rouag — <span className="text-accent-teal">Business Analyst / Data & BI Intern Candidate</span>
          </h1>
          <p className="text-xs sm:text-sm text-text-muted">
            📍 Sousse, Tunisia • Open to International & Remote Internships • Telecom Engineering + CS Background
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={portfolioContent.personal.cvPdfPath}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-accent-amber text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-amber-400 transition-colors shadow-md"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>
          <button
            onClick={onExitRecruiterMode}
            className="px-4 py-2.5 rounded-xl bg-surface border border-border text-text-primary hover:border-accent-teal font-semibold text-xs transition-colors"
          >
            Full Interactive Dashboard →
          </button>
        </div>
      </div>

      {/* Positioning & Core Qualifications */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left: Bio & Key BA Competencies */}
        <div className="md:col-span-8 glass-card rounded-xl p-6 border border-border space-y-4 shadow-card">
          <h2 className="font-heading font-bold text-lg text-text-primary flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-teal" />
            <span>Positioning & Background</span>
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {portfolioContent.about.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {portfolioContent.about.whatIBring.map((card) => (
              <div key={card.id} className="p-3 bg-surface rounded-lg border border-border">
                <span className="font-heading font-bold text-xs text-accent-teal block mb-1">
                  {card.title}
                </span>
                <span className="text-[11px] text-text-muted block">{card.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Contact Box */}
        <div className="md:col-span-4 glass-card rounded-xl p-6 border border-border space-y-4 shadow-card">
          <h2 className="font-heading font-bold text-lg text-text-primary">
            Direct Contact
          </h2>
          <div className="space-y-2.5 text-xs font-mono">
            <a
              href={`mailto:${portfolioContent.personal.email}`}
              className="p-3 rounded-lg bg-surface border border-border text-accent-teal hover:border-accent-teal flex items-center gap-2 block"
            >
              <Mail className="w-4 h-4" />
              <span>{portfolioContent.personal.email}</span>
            </a>
            <a
              href={`tel:${portfolioContent.personal.phone.replace(/\s+/g, "")}`}
              className="p-3 rounded-lg bg-surface border border-border text-accent-amber hover:border-accent-amber flex items-center gap-2 block"
            >
              <Phone className="w-4 h-4" />
              <span>{portfolioContent.personal.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 6 Core KPIs Grid */}
      <div className="space-y-3">
        <h2 className="font-heading font-bold text-lg text-text-primary">
          Key Performance Indicators (Track Record)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {portfolioContent.heroKpis.map((kpi) => (
            <div key={kpi.id} className="bg-surface p-4 rounded-xl border border-border text-center">
              <span className="text-2xl font-bold font-mono text-accent-teal block">
                <AnimatedCounter value={kpi.value} suffix={kpi.suffix} prefix={kpi.prefix} />
              </span>
              <span className="text-xs font-heading font-semibold text-text-primary block mt-1">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top 3 Case Studies Summary */}
      <div className="space-y-4">
        <h2 className="font-heading font-bold text-lg text-text-primary">
          Top 3 Analytical Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioContent.projects.map((proj) => (
            <div key={proj.id} className="glass-card rounded-xl p-5 border border-border space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  {proj.stack.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-surface border border-border font-mono text-[10px] text-accent-teal">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading font-bold text-base text-text-primary">
                  {proj.title}
                </h3>
                <p className="text-xs text-accent-amber font-medium">
                  {proj.keyFinding}
                </p>
              </div>

              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-2 border-t border-border/50 text-xs font-mono text-text-muted hover:text-accent-teal flex items-center justify-between"
              >
                <span>View Repository</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
