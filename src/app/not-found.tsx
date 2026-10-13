"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Database, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col items-center justify-center p-4 text-center">
      <div className="glass-card rounded-2xl p-8 sm:p-12 border border-border max-w-lg shadow-2xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-accent-amber/10 border border-accent-amber flex items-center justify-center mx-auto text-accent-amber">
          <Database className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-accent-amber uppercase tracking-wider block font-bold">
            ERROR 404 • NULL REFERENCE DETECTED
          </span>
          <h1 className="font-heading text-3xl font-bold text-text-primary">
            Query Returned 0 Rows 🔍
          </h1>
          <p className="text-sm text-text-muted">
            SELECT * FROM website WHERE page = &apos;this_url&apos; resulted in an empty dataset.
            The requested dimension table or route does not exist.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-surface border border-border text-xs font-mono text-text-muted text-left">
          <code>
            SQLSTATE[42703]: Undefined column: 1054 Column not found.<br />
            Data Quality Audit: 404 Not Found.
          </code>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-teal text-slate-950 font-bold text-sm hover:bg-teal-300 transition-colors shadow-glow"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Primary Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
