"use client";

import React, { useState } from "react";
import { DollarSign, ArrowRight, Zap, TrendingUp } from "lucide-react";

export const InteractiveFunnel: React.FC = () => {
  const [budget, setBudget] = useState(10000); // 10,000 USD default
  const [paidShare, setPaidShare] = useState(70); // 70% paid search, 30% social

  // Metrics from project finding
  const paidConversion = 0.133;
  const socialConversion = 0.058;
  const paidDays = 11;
  const socialDays = 34;
  const avgDealValue = 500;

  const paidBudget = (budget * paidShare) / 100;
  const socialBudget = budget - paidBudget;

  const paidEstConversions = Math.round((paidBudget / 25) * paidConversion * 10);
  const socialEstConversions = Math.round((socialBudget / 15) * socialConversion * 10);
  const totalConversions = paidEstConversions + socialEstConversions;
  const totalRevenue = totalConversions * avgDealValue;

  return (
    <div className="bg-surface/80 border border-border rounded-xl p-5 shadow-card space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
        <div>
          <h4 className="font-heading font-bold text-sm text-text-primary flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent-teal" />
            <span>Interactive Funnel & Channel Budget Simulator</span>
          </h4>
          <p className="text-xs text-text-muted">
            Hover & adjust sliders to see channel efficiency & sales cycle differences.
          </p>
        </div>
        <span className="px-2 py-0.5 rounded bg-accent-teal-alpha text-accent-teal font-mono text-[11px] font-semibold border border-accent-teal/30">
          Live Data Model
        </span>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Paid Search Channel */}
        <div className="p-4 rounded-lg bg-surface border border-accent-teal/40 hover:border-accent-teal transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 px-2 py-0.5 bg-accent-teal text-slate-950 text-[10px] font-bold font-mono rounded-bl">
            2.3x HIGHER CONVERSION
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-heading font-bold text-sm text-accent-teal">Paid Search Channel</span>
            <span className="text-xs font-mono text-text-muted">High Intent</span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-text-muted">Conversion Rate</span>
                <span className="font-mono font-bold text-accent-teal">13.3%</span>
              </div>
              <div className="w-full bg-border/50 h-2 rounded-full overflow-hidden">
                <div className="bg-accent-teal h-full rounded-full transition-all duration-500" style={{ width: "85%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-text-muted">Sales Cycle Length</span>
                <span className="font-mono font-bold text-accent-amber">11 Days (3x faster)</span>
              </div>
              <div className="w-full bg-border/50 h-2 rounded-full overflow-hidden">
                <div className="bg-accent-amber h-full rounded-full transition-all duration-500" style={{ width: "32%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Social Channel */}
        <div className="p-4 rounded-lg bg-surface border border-border hover:border-accent-violet transition-all relative overflow-hidden group">
          <div className="flex items-center justify-between mb-3">
            <span className="font-heading font-bold text-sm text-accent-violet">Social Ads Channel</span>
            <span className="text-xs font-mono text-text-muted">Awareness</span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-text-muted">Conversion Rate</span>
                <span className="font-mono font-bold text-text-primary">5.8%</span>
              </div>
              <div className="w-full bg-border/50 h-2 rounded-full overflow-hidden">
                <div className="bg-accent-violet h-full rounded-full transition-all duration-500" style={{ width: "37%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-text-muted">Sales Cycle Length</span>
                <span className="font-mono font-bold text-text-muted">34 Days</span>
              </div>
              <div className="w-full bg-border/50 h-2 rounded-full overflow-hidden">
                <div className="bg-text-muted h-full rounded-full transition-all duration-500" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Budget Simulator Widget */}
      <div className="p-4 rounded-lg bg-surface-hover/60 border border-border space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-amber flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Scenario Simulator</span>
          </span>
          <span className="text-xs font-mono text-text-muted">
            Budget Allocation: {paidShare}% Paid / {100 - paidShare}% Social
          </span>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs text-text-muted mb-1">
              <span>Total Monthly Budget: ${budget.toLocaleString()}</span>
              <span>Paid Search Share ({paidShare}%)</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={paidShare}
              onChange={(e) => setPaidShare(Number(e.target.value))}
              aria-label="Adjust Paid Search budget percentage share"
              className="w-full accent-accent-teal cursor-pointer h-2 bg-border rounded-lg"
            />
          </div>
        </div>

        {/* Projected Simulator Output */}
        <div className="grid grid-cols-3 gap-2 pt-2 text-center border-t border-border/50">
          <div className="p-2 bg-surface rounded border border-border">
            <span className="block text-[10px] text-text-muted uppercase">Est. Conversions</span>
            <span className="font-mono font-bold text-sm text-accent-teal">{totalConversions}</span>
          </div>
          <div className="p-2 bg-surface rounded border border-border">
            <span className="block text-[10px] text-text-muted uppercase">Avg Sales Cycle</span>
            <span className="font-mono font-bold text-sm text-accent-amber">
              {Math.round((paidDays * paidShare + socialDays * (100 - paidShare)) / 100)} Days
            </span>
          </div>
          <div className="p-2 bg-surface rounded border border-border">
            <span className="block text-[10px] text-text-muted uppercase">Est. Revenue</span>
            <span className="font-mono font-bold text-sm text-accent-teal">
              ${totalRevenue.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
