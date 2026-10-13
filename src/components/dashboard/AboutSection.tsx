"use client";

import React from "react";
import { portfolioContent } from "@/content/content";
import { FileCheck, TrendingUp, ShieldCheck, Languages, CheckCircle } from "lucide-react";

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    FileCheck: <FileCheck className="w-6 h-6 text-accent-teal" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-accent-amber" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-accent-violet" />,
  };

  return (
    <section id="about" className="py-16 md:py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent-teal mb-3">
            <span>Executive Summary</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            About & Core Positioning
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed font-normal bg-surface/60 border border-border p-5 rounded-2xl shadow-sm">
            {portfolioContent.about.bio}
          </p>
        </div>

        {/* What I Bring 3-Card Row */}
        <div>
          <h3 className="font-heading font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
            <span>What I Bring to International Teams</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioContent.about.whatIBring.map((card) => (
              <div
                key={card.id}
                className="glass-card rounded-xl p-6 border border-border hover:border-accent-teal/60 transition-all duration-300 hover:-translate-y-1 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-hover border border-border flex items-center justify-center mb-4">
                    {iconMap[card.iconName] || <FileCheck className="w-6 h-6 text-accent-teal" />}
                  </div>
                  <h4 className="font-heading font-bold text-lg text-text-primary mb-2">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-surface border border-border text-[11px] font-mono text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Mini-Widget */}
        <div className="bg-surface/80 border border-border rounded-xl p-6 shadow-card max-w-3xl">
          <div className="flex items-center gap-2 mb-4 border-b border-border/60 pb-3">
            <Languages className="w-5 h-5 text-accent-amber" />
            <h3 className="font-heading font-bold text-base text-text-primary">
              Multilingual Capabilities
            </h3>
            <span className="text-xs font-mono text-text-muted ml-auto">Global Communication</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolioContent.about.languages.map((lang) => (
              <div key={lang.code} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-text-primary flex items-center gap-1.5">
                    <span className="w-5 font-mono text-accent-teal text-[11px]">{lang.code}</span>
                    <span>{lang.name}</span>
                  </span>
                  <span className="text-text-muted font-mono">{lang.level}</span>
                </div>
                <div className="w-full bg-border/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-accent-teal h-full rounded-full transition-all duration-500"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
