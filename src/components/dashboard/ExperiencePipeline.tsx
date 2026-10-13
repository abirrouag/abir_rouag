"use client";

import React, { useState } from "react";
import { portfolioContent } from "@/content/content";
import { ExperienceItem } from "@/types";
import { Workflow, ChevronRight, CheckCircle2, MapPin, Calendar, ArrowRight } from "lucide-react";

export const ExperiencePipeline: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(portfolioContent.experiences[0].id);

  const activeExp = portfolioContent.experiences.find((e) => e.id === selectedId) || portfolioContent.experiences[0];

  const pipelineStages: Record<string, string> = {
    Insight: "Transform → Insight (BI & Analytics)",
    Load: "Extract → Load (Procurement & Operations)",
    Extract: "Extract → Requirements (Telecom Network)",
    Transform: "Transform → Test (Platform Optimization)",
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent-teal mb-3">
            <Workflow className="w-3.5 h-3.5 text-accent-amber" />
            <span>Data Pipeline Metaphor</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Career as a Data Pipeline
          </h2>
          <p className="mt-2 text-base text-text-muted">
            Extract → Transform → Load → Insight: How telecommunications and international buying evolved into Business Analysis and BI engineering.
          </p>
        </div>

        {/* Pipeline Stepper (Horizontal Desktop / Responsive Grid) */}
        <div className="hidden lg:grid grid-cols-4 gap-3 bg-surface/50 border border-border p-3 rounded-2xl">
          {portfolioContent.experiences.map((exp, idx) => {
            const isSelected = exp.id === selectedId;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedId(exp.id)}
                className={`p-4 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? "bg-surface border-accent-teal shadow-glow"
                    : "bg-surface/60 border-border hover:border-accent-teal/50"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-text-muted mb-2">
                  <span className="px-2 py-0.5 rounded bg-accent-teal-alpha text-accent-teal font-semibold">
                    Step 0{idx + 1}
                  </span>
                  <span>{exp.pipelineStage}</span>
                </div>
                <h3 className="font-heading font-bold text-sm text-text-primary line-clamp-1">
                  {exp.role}
                </h3>
                <p className="text-xs text-text-muted line-clamp-1">{exp.company}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Experience Detail View & Mobile List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Mobile Selector List (Visible on smaller screens) */}
          <div className="lg:hidden flex flex-col gap-2">
            {portfolioContent.experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedId(exp.id)}
                className={`p-3 rounded-lg border text-left flex items-center justify-between ${
                  exp.id === selectedId
                    ? "bg-surface border-accent-teal text-text-primary font-bold"
                    : "bg-surface/50 border-border text-text-muted"
                }`}
              >
                <div>
                  <span className="text-xs font-heading block">{exp.role}</span>
                  <span className="text-[11px] text-text-muted">{exp.company}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-accent-teal">
                  {exp.pipelineStage}
                </span>
              </button>
            ))}
          </div>

          {/* Main Experience Detail Card */}
          <div className="lg:col-span-12 glass-card rounded-2xl p-6 sm:p-8 border border-border space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-amber mb-1">
                  <span>Pipeline Stage: {pipelineStages[activeExp.pipelineStage]}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-text-primary">
                  {activeExp.role} <span className="text-accent-teal">@ {activeExp.company}</span>
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted font-mono mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent-teal" />
                    {activeExp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent-teal" />
                    {activeExp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Bullets List */}
            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-sm text-text-primary uppercase tracking-wider text-xs">
                Key Responsibilities & Deliverables
              </h4>
              <ul className="space-y-2.5">
                {activeExp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-muted leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-accent-teal shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Result Highlight */}
            {activeExp.impactResult && (
              <div className="p-4 rounded-xl bg-accent-teal-alpha border border-accent-teal/40 text-xs sm:text-sm text-text-primary flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" />
                <div>
                  <strong className="text-accent-teal font-heading block mb-0.5">Measurable Impact:</strong>
                  <span>{activeExp.impactResult}</span>
                </div>
              </div>
            )}

            {/* Tech Chips */}
            <div className="pt-2">
              <span className="text-xs font-mono text-text-muted block mb-2">Technologies & Methods:</span>
              <div className="flex flex-wrap gap-2">
                {activeExp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs font-mono text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
