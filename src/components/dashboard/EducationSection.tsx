"use client";

import React from "react";
import { portfolioContent } from "@/content/content";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent-teal mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-accent-teal" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Engineering Education
          </h2>
        </div>

        {/* Education List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioContent.education.map((edu) => (
            <div
              key={edu.id}
              className="glass-card rounded-2xl p-6 border border-border hover:border-accent-teal/50 transition-all duration-300 shadow-xl space-y-4"
            >
              <div className="flex items-start justify-between gap-3 border-b border-border/60 pb-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-text-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">{edu.institution}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-accent-teal-alpha border border-accent-teal/30 text-accent-teal text-xs font-mono font-semibold shrink-0">
                  {edu.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                <span>Duration: {edu.period}</span>
                <span className="text-accent-amber">Engineering Track</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
