"use client";

import React, { useState } from "react";
import { portfolioContent } from "@/content/content";
import { ProjectItem } from "@/types";
import { InteractiveFunnel } from "../ui/InteractiveFunnel";
import { MiniStarSchema } from "../ui/MiniStarSchema";
import { FolderGit2, Github, ExternalLink, Filter, Sparkles, Code2, ArrowRight } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "BI", "Data Engineering", "ML", "Marketing", "Procurement"];

  const filteredProjects = selectedCategory === "All"
    ? portfolioContent.projects
    : portfolioContent.projects.filter((p) => p.categories.includes(selectedCategory as any));

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent-teal mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-accent-teal" />
              <span>Analytical Case Studies</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Featured Case Studies & Visuals
            </h2>
            <p className="mt-2 text-base text-text-muted">
              Real-world analytics projects built with production PostgreSQL schemas, dbt transformations, Power BI DAX modeling, and machine learning explainability.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-text-muted mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all border ${
                  selectedCategory === cat
                    ? "bg-accent-teal text-slate-950 border-accent-teal font-bold shadow-sm"
                    : "bg-surface border-border text-text-muted hover:text-text-primary hover:border-accent-teal/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-border hover:border-accent-teal/50 transition-all duration-300 shadow-2xl space-y-8"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/60 pb-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-accent-teal-alpha border border-accent-teal/30 text-accent-teal font-mono text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">{project.subtitle}</p>
                </div>

                {/* Actions (GitHub & Live Demo) */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-surface border border-border hover:border-accent-teal text-xs font-semibold text-text-primary flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4 text-accent-teal" />
                    <span>View Repository</span>
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-accent-teal text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-teal-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Key Finding Callout Banner */}
              <div className="p-4 rounded-xl bg-surface border border-accent-amber/40 text-xs sm:text-sm text-text-primary flex items-start gap-3 shadow-inner">
                <Sparkles className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
                <div>
                  <strong className="text-accent-amber font-heading block mb-0.5 uppercase tracking-wider text-xs">
                    Key Insight Finding:
                  </strong>
                  <span className="font-medium text-text-primary">{project.keyFinding}</span>
                </div>
              </div>

              {/* Problem → Approach → Result Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-surface/50 border border-border space-y-1">
                  <span className="font-heading font-bold text-accent-amber block uppercase tracking-wider text-[11px]">
                    01. Problem Statement
                  </span>
                  <p className="text-text-muted leading-relaxed">{project.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-surface/50 border border-border space-y-1">
                  <span className="font-heading font-bold text-accent-teal block uppercase tracking-wider text-[11px]">
                    02. Technical Approach
                  </span>
                  <p className="text-text-muted leading-relaxed">{project.approach}</p>
                </div>
                <div className="p-4 rounded-xl bg-surface/50 border border-border space-y-1">
                  <span className="font-heading font-bold text-accent-emerald block uppercase tracking-wider text-[11px]">
                    03. Business Result
                  </span>
                  <p className="text-text-muted leading-relaxed">{project.result}</p>
                </div>
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 bg-surface rounded-xl border border-border text-center">
                    <span className="text-[10px] text-text-muted block font-mono uppercase">{m.label}</span>
                    <span className="font-mono font-bold text-base text-accent-teal">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Visual Graphic */}
              <div className="pt-4">
                {project.visualType === "funnel" && <InteractiveFunnel />}
                {project.visualType === "star-schema" && <MiniStarSchema />}
                {project.visualType === "pipeline" && (
                  <div className="bg-surface/80 border border-border rounded-xl p-5 shadow-card space-y-4">
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <span className="font-heading font-bold text-sm text-text-primary">
                        Customer Churn ML Pipeline Architecture
                      </span>
                      <span className="font-mono text-[11px] text-accent-teal">
                        Raw → Clean → RFM → Model → SHAP → Rule
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs font-mono">
                      <div className="p-2.5 rounded bg-surface border border-border">
                        <span className="text-text-muted block text-[10px]">STAGE 1</span>
                        <span className="font-bold text-text-primary">Raw 1.07M</span>
                      </div>
                      <div className="p-2.5 rounded bg-surface border border-border">
                        <span className="text-text-muted block text-[10px]">STAGE 2</span>
                        <span className="font-bold text-accent-teal">Clean 776K</span>
                      </div>
                      <div className="p-2.5 rounded bg-surface border border-border">
                        <span className="text-text-muted block text-[10px]">STAGE 3</span>
                        <span className="font-bold text-accent-amber">RFM Matrix</span>
                      </div>
                      <div className="p-2.5 rounded bg-surface border border-border">
                        <span className="text-text-muted block text-[10px]">STAGE 4</span>
                        <span className="font-bold text-accent-violet">LightGBM</span>
                      </div>
                      <div className="p-2.5 rounded bg-surface border border-border">
                        <span className="text-text-muted block text-[10px]">STAGE 5</span>
                        <span className="font-bold text-accent-teal">SHAP Driver</span>
                      </div>
                      <div className="p-2.5 rounded bg-surface border border-border">
                        <span className="text-text-muted block text-[10px]">STAGE 6</span>
                        <span className="font-bold text-accent-emerald">Target Rule</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
