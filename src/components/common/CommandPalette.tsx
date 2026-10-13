"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  Search,
  FileText,
  Mail,
  Github,
  Phone,
  LayoutDashboard,
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  GraduationCap,
  Sparkles,
  Zap,
  Moon,
  Sun,
  Code,
} from "lucide-react";
import { portfolioContent } from "@/content/content";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleRecruiterMode: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onToggleRecruiterMode,
}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state trigger
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLink = (url: string) => {
    onClose();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl bg-surface border border-border rounded-xl shadow-2xl overflow-hidden z-10 text-text-primary">
        <Command label="Global Command Palette">
          <div className="flex items-center border-b border-border px-4 py-3 bg-surface-hover/50">
            <Search className="w-5 h-5 text-accent-teal mr-3 shrink-0" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Type a command or search section (e.g. 'Projects', 'CV', 'Email')..."
              className="w-full bg-transparent border-none outline-none text-sm text-text-primary placeholder:text-text-muted focus:ring-0"
              autoFocus
            />
            <kbd className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-text-muted">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-96 overflow-y-auto p-2 divide-y divide-border/40">
            <Command.Empty className="py-6 text-center text-sm text-text-muted">
              No results found for &quot;{search}&quot;.
            </Command.Empty>

            {/* Quick Actions */}
            <Command.Group heading="⚡ Quick Actions" className="px-2 py-1 text-xs font-semibold text-accent-teal uppercase tracking-wider">
              <Command.Item
                onSelect={() => openLink(portfolioContent.personal.cvPdfPath)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer transition-colors"
              >
                <FileText className="w-4 h-4 text-accent-amber" />
                <span>Download Resume / CV (PDF)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onClose();
                  window.location.href = `mailto:${portfolioContent.personal.email}`;
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-teal" />
                <span>Send Email to {portfolioContent.personal.email}</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onClose();
                  onToggleRecruiterMode();
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-amber cursor-pointer transition-colors"
              >
                <Zap className="w-4 h-4 text-accent-amber" />
                <span>Toggle Recruiter Mode (60-Second View)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => openLink(portfolioContent.personal.githubUrl)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer transition-colors"
              >
                <Github className="w-4 h-4 text-text-muted" />
                <span>Open GitHub Profile</span>
              </Command.Item>
            </Command.Group>

            {/* Sections */}
            <Command.Group heading="📍 Jump to Section" className="px-2 py-1 text-xs font-semibold text-text-muted uppercase tracking-wider">
              <Command.Item
                onSelect={() => navigateTo("hero")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer"
              >
                <LayoutDashboard className="w-4 h-4 text-text-muted" />
                <span>Hero / KPI Dashboard</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("about")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer"
              >
                <User className="w-4 h-4 text-text-muted" />
                <span>About & Core Competencies</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("experience")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-text-muted" />
                <span>Experience (Career Pipeline)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("projects")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-text-muted" />
                <span>Projects (Case Studies)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("skills")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-text-muted" />
                <span>Skills & Star Schema</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("leadership")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-text-muted" />
                <span>Leadership & Associative</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("education")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-text-muted" />
                <span>Education</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("contact")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer"
              >
                <Phone className="w-4 h-4 text-text-muted" />
                <span>Contact Abir</span>
              </Command.Item>
            </Command.Group>

            {/* Case Studies */}
            <Command.Group heading="📊 Case Study Projects" className="px-2 py-1 text-xs font-semibold text-text-muted uppercase tracking-wider">
              {portfolioContent.projects.map((proj) => (
                <Command.Item
                  key={proj.id}
                  onSelect={() => navigateTo(`project-${proj.id}`)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-text-primary hover:bg-surface-hover hover:text-accent-teal cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-accent-violet" />
                    <span className="font-medium">{proj.title}</span>
                  </div>
                  <span className="text-xs font-mono text-text-muted">{proj.stack.join(" · ")}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          <div className="border-t border-border px-4 py-2 bg-surface-hover/30 text-xs text-text-muted flex items-center justify-between">
            <span>Use ↑ ↓ to navigate, ↵ to select</span>
            <span className="font-mono text-[11px]">⌘K / Ctrl+K</span>
          </div>
        </Command>
      </div>
    </div>
  );
};
