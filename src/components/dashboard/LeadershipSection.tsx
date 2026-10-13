"use client";

import React, { useState } from "react";
import { portfolioContent } from "@/content/content";
import { LeadershipItem } from "@/types";
import { Sparkles, ChevronRight, Users, ShieldCheck, DollarSign, Filter, Globe } from "lucide-react";

export const LeadershipSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Finance & Audit", "People & Recruitment", "Marketing & Communication"];

  const items = portfolioContent.leadership.items;

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter((item) => item.category === selectedCategory);

  return (
    <section id="leadership" className="py-16 md:py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent-teal mb-3">
              <Sparkles className="w-3.5 h-3.5 text-accent-amber" />
              <span>Beyond the Data</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Leadership & Associative Experience
            </h2>
            <p className="mt-2 text-base text-text-muted italic">
              &quot;{portfolioContent.leadership.intro}&quot;
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-text-muted mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all border ${
                  selectedCategory === cat
                    ? "bg-accent-amber text-slate-950 border-accent-amber font-bold shadow-sm"
                    : "bg-surface border-border text-text-muted hover:text-text-primary hover:border-accent-amber/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Why it Matters for a Business Analyst Banner */}
        <div className="glass-card rounded-2xl p-6 border border-accent-teal/40 shadow-xl space-y-4">
          <h3 className="font-heading font-bold text-lg text-text-primary flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent-teal" />
            <span>{portfolioContent.leadership.whyItMatters.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-text-muted">
            {portfolioContent.leadership.whyItMatters.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {portfolioContent.leadership.whyItMatters.mapping.map((map, idx) => (
              <div key={idx} className="p-3 bg-surface rounded-xl border border-border space-y-1">
                <span className="font-heading font-bold text-xs text-accent-teal block">
                  {map.domain}
                </span>
                <span className="text-xs text-text-muted">{map.baSkill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-xl p-6 border border-border hover:border-accent-amber/50 transition-all duration-300 shadow-card flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2 border-b border-border/60 pb-3">
                  <div>
                    <span className="text-[11px] font-mono text-accent-amber font-semibold block">
                      {item.organization}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-text-primary">
                      {item.role}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] font-mono text-text-muted shrink-0">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-text-muted">
                  {item.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.highlightMetric && (
                <div className="pt-3 border-t border-border/50 text-xs font-mono text-accent-teal font-semibold">
                  <span>⚡ Key Metric: {item.highlightMetric}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
