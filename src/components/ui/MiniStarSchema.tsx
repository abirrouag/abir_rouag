"use client";

import React, { useState } from "react";
import { Database, Table, AlertTriangle, ShieldCheck, FileSpreadsheet } from "lucide-react";

export const MiniStarSchema: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("fact");

  const nodes = {
    fact: {
      title: "Fact_Purchase_Orders",
      records: "~420,000 Lines",
      measures: "40+ DAX Measures (OTIF %, Unit Variance, Spend Concentration)",
      checks: "Benford's Law Anomaly Engine & Duplicate Invoice Filter",
    },
    dimSupplier: {
      title: "Dim_Supplier (2 Countries)",
      details: "Supplier ID, Country (China, India), Risk Category, Contract Terms",
    },
    dimProduct: {
      title: "Dim_Product_Catalog",
      details: "SKU, Category, Benchmark Unit Price, Target Lead Time",
    },
    dimDate: {
      title: "Dim_Date (Fiscal Calendar)",
      details: "DateKey, Fiscal Quarter, Lead-Time Variance, Delivery Due Date",
    },
  };

  return (
    <div className="bg-surface/80 border border-border rounded-xl p-5 shadow-card space-y-5">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div>
          <h4 className="font-heading font-bold text-sm text-text-primary flex items-center gap-2">
            <Database className="w-4 h-4 text-accent-amber" />
            <span>Procurement Star Schema Architecture (~420K Order Lines)</span>
          </h4>
          <p className="text-xs text-text-muted">
            Click any table to inspect measures, dimensions and anomaly detection checks.
          </p>
        </div>
        <span className="px-2 py-0.5 rounded bg-accent-amber-alpha text-accent-amber font-mono text-[11px] font-semibold border border-accent-amber/30">
          dbt + PostgreSQL
        </span>
      </div>

      {/* Visual Diagram */}
      <div className="relative py-6 px-4 bg-surface-hover/30 border border-border rounded-lg flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {/* Central Fact Table */}
        <button
          onClick={() => setActiveNode("fact")}
          className={`w-full md:w-64 p-4 rounded-xl border transition-all text-left relative shadow-md focus:ring-2 focus:ring-accent-amber ${
            activeNode === "fact"
              ? "bg-accent-amber/10 border-accent-amber ring-2 ring-accent-amber/50"
              : "bg-surface border-border hover:border-accent-amber"
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <Table className="w-4 h-4 text-accent-amber" />
            <span className="font-mono font-bold text-xs text-accent-amber">FACT TABLE</span>
          </div>
          <h5 className="font-heading font-bold text-sm text-text-primary">Fact_Purchase_Orders</h5>
          <p className="text-xs text-text-muted mt-1 font-mono">420,000+ Fact Rows</p>
          <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-accent-teal bg-accent-teal-alpha px-2 py-0.5 rounded font-mono">
            <ShieldCheck className="w-3 h-3" />
            <span>Benford's Law Filtered</span>
          </div>
        </button>

        {/* Dimension Nodes */}
        <div className="flex flex-col gap-2.5 w-full md:w-56">
          <button
            onClick={() => setActiveNode("dimSupplier")}
            className={`p-2.5 rounded-lg border transition-all text-left ${
              activeNode === "dimSupplier"
                ? "bg-accent-teal/10 border-accent-teal"
                : "bg-surface border-border hover:border-accent-teal"
            }`}
          >
            <span className="font-mono text-[10px] text-accent-teal block">DIMENSION 1</span>
            <span className="font-heading font-bold text-xs text-text-primary">Dim_Supplier (China/India)</span>
          </button>

          <button
            onClick={() => setActiveNode("dimProduct")}
            className={`p-2.5 rounded-lg border transition-all text-left ${
              activeNode === "dimProduct"
                ? "bg-accent-violet/10 border-accent-violet"
                : "bg-surface border-border hover:border-accent-violet"
            }`}
          >
            <span className="font-mono text-[10px] text-accent-violet block">DIMENSION 2</span>
            <span className="font-heading font-bold text-xs text-text-primary">Dim_Product_Catalog</span>
          </button>

          <button
            onClick={() => setActiveNode("dimDate")}
            className={`p-2.5 rounded-lg border transition-all text-left ${
              activeNode === "dimDate"
                ? "bg-accent-teal/10 border-accent-teal"
                : "bg-surface border-border hover:border-accent-teal"
            }`}
          >
            <span className="font-mono text-[10px] text-accent-teal block">DIMENSION 3</span>
            <span className="font-heading font-bold text-xs text-text-primary">Dim_Date (Fiscal Calendar)</span>
          </button>
        </div>
      </div>

      {/* Active Node Detail Card */}
      <div className="p-4 rounded-lg bg-surface border border-border text-xs space-y-2">
        <div className="flex items-center gap-2 text-accent-amber font-mono font-bold">
          <FileSpreadsheet className="w-4 h-4" />
          <span>Active Table Inspector: {nodes[activeNode as keyof typeof nodes].title}</span>
        </div>
        {activeNode === "fact" ? (
          <div className="space-y-1.5 text-text-muted">
            <p><strong className="text-text-primary">Volume:</strong> {nodes.fact.records}</p>
            <p><strong className="text-text-primary">DAX Engine:</strong> {nodes.fact.measures}</p>
            <p><strong className="text-text-primary">Fraud & Audit Engine:</strong> {nodes.fact.checks}</p>
          </div>
        ) : (
          <p className="text-text-muted">
            <strong className="text-text-primary">Fields & Attributes:</strong>{" "}
            {(nodes[activeNode as keyof typeof nodes] as any).details}
          </p>
        )}
      </div>
    </div>
  );
};
