"use client";

import React from "react";
import { Zap, Eye } from "lucide-react";

interface RecruiterModeToggleProps {
  isRecruiterMode: boolean;
  onToggle: () => void;
}

export const RecruiterModeToggle: React.FC<RecruiterModeToggleProps> = ({
  isRecruiterMode,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isRecruiterMode ? "Switch to Full Interactive Dashboard Mode" : "Switch to 60-Second Recruiter Summary Mode"}
      className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm focus:ring-2 focus:ring-accent-teal ${
        isRecruiterMode
          ? "bg-accent-amber text-slate-950 border-accent-amber hover:bg-amber-400 font-bold animate-pulse-slow"
          : "bg-surface border-border text-text-muted hover:text-text-primary hover:border-accent-teal"
      }`}
      title="Recruiter Mode collapses portfolio into a 60-second summary."
    >
      {isRecruiterMode ? (
        <>
          <Eye className="w-3.5 h-3.5" />
          <span>Exit Recruiter Mode</span>
        </>
      ) : (
        <>
          <Zap className="w-3.5 h-3.5 text-accent-amber" />
          <span className="hidden sm:inline">⚡ Recruiter Mode (60s)</span>
          <span className="sm:hidden">⚡ 60s Mode</span>
        </>
      )}
    </button>
  );
};
