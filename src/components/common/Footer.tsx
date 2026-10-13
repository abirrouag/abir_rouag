"use client";

import React from "react";
import { ArrowUp, CheckCircle2 } from "lucide-react";
import { portfolioContent } from "@/content/content";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-surface/40 py-8 px-4 sm:px-6 lg:px-8 mt-20 relative text-xs text-text-muted">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span>© 2026 {portfolioContent.personal.name}</span>
          <span className="text-border">•</span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent-teal-alpha border border-accent-teal/30 text-accent-teal text-[11px] font-mono">
            <CheckCircle2 className="w-3 h-3 text-accent-teal" />
            <span>Data Quality: 100%</span>
          </span>
        </div>

        <div className="text-center sm:text-left">
          <span>Built with curiosity and a lot of coffee ☕</span>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:border-accent-teal hover:text-text-primary transition-colors focus:ring-2 focus:ring-accent-teal"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-accent-teal" />
        </button>
      </div>
    </footer>
  );
};
