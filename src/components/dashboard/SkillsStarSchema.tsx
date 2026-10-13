"use client";

import React, { useState } from "react";
import { portfolioContent } from "@/content/content";
import { StarSchemaNode } from "@/types";
import { Target, BrainCircuit, BarChart3, Wrench, Award, CheckCircle2, Clock } from "lucide-react";

export const SkillsStarSchema: React.FC = () => {
  const [selectedDimension, setSelectedDimension] = useState<string>("all");

  const { factTable, dimensions } = portfolioContent.skillsStarSchema;

  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-accent-amber" />,
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-accent-teal" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-accent-violet" />,
    Wrench: <Wrench className="w-5 h-5 text-accent-emerald" />,
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent-teal mb-3">
            <Target className="w-3.5 h-3.5 text-accent-amber" />
            <span>Star Schema Skill Architecture</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Competencies & Technical Toolkit
          </h2>
          <p className="mt-2 text-base text-text-muted">
            Business Analysis functions as the central Fact Table, connected to technical dimension tables across Analytics, BI, and Data Engineering.
          </p>
        </div>

        {/* Desktop Star Schema Interactive Diagram */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-border/60 pb-4">
            <span className="font-heading font-bold text-base text-text-primary">
              Interactive Dimensional Model
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedDimension("all")}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all border ${
                  selectedDimension === "all"
                    ? "bg-accent-teal text-slate-950 font-bold border-accent-teal"
                    : "bg-surface border-border text-text-muted hover:text-text-primary"
                }`}
              >
                Show All Dimensions
              </button>
            </div>
          </div>

          {/* Central Fact & Dimension Nodes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Fact Table Card (Center) */}
            <div className="lg:col-span-6 bg-surface border-2 border-accent-amber rounded-2xl p-6 shadow-amberGlow space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent-amber-alpha border border-accent-amber/40">
                  {iconMap[factTable.iconName]}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-accent-amber uppercase tracking-wider block font-bold">
                    CENTRAL FACT TABLE
                  </span>
                  <h3 className="font-heading font-bold text-xl text-text-primary">
                    {factTable.title}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {factTable.skills.map((skill, idx) => (
                  <div key={idx} className="p-2 rounded bg-surface-hover border border-border text-xs text-text-primary font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-amber shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dimension Nodes Column */}
            <div className="lg:col-span-6 space-y-4">
              {dimensions.map((dim) => {
                const isSelected = selectedDimension === "all" || selectedDimension === dim.id;
                return (
                  <div
                    key={dim.id}
                    onClick={() => setSelectedDimension(dim.id)}
                    className={`p-5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-surface border-accent-teal shadow-glow"
                        : "bg-surface/50 border-border opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        {iconMap[dim.iconName]}
                        <h4 className="font-heading font-bold text-base text-text-primary">
                          {dim.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-accent-teal">
                        Dimension Table
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {dim.skills.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-surface-hover border border-border text-xs font-mono text-text-primary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications Strip */}
        <div className="bg-surface/80 border border-border rounded-xl p-6 shadow-card space-y-4">
          <div className="flex items-center gap-2 border-b border-border/60 pb-3">
            <Award className="w-5 h-5 text-accent-teal" />
            <h3 className="font-heading font-bold text-base text-text-primary">
              Verified Certifications & Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioContent.certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-4 rounded-xl bg-surface border border-border flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {cert.status === "Completed" ? (
                      <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                    ) : (
                      <Clock className="w-4 h-4 text-accent-amber" />
                    )}
                    <h4 className="font-heading font-bold text-sm text-text-primary">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="text-xs text-text-muted">{cert.issuer}</p>
                  <p className="text-[11px] font-mono text-text-muted">{cert.date}</p>
                </div>

                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold shrink-0 ${
                    cert.status === "Completed"
                      ? "bg-accent-teal-alpha border border-accent-teal/40 text-accent-teal"
                      : "bg-accent-amber-alpha border border-accent-amber/40 text-accent-amber"
                  }`}
                >
                  {cert.badgeText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
