"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { NoiseBackground } from "@/components/common/NoiseBackground";
import { CommandPalette } from "@/components/common/CommandPalette";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { AboutSection } from "@/components/dashboard/AboutSection";
import { ExperiencePipeline } from "@/components/dashboard/ExperiencePipeline";
import { ProjectsSection } from "@/components/dashboard/ProjectsSection";
import { SkillsStarSchema } from "@/components/dashboard/SkillsStarSchema";
import { LeadershipSection } from "@/components/dashboard/LeadershipSection";
import { EducationSection } from "@/components/dashboard/EducationSection";
import { ContactSection } from "@/components/dashboard/ContactSection";
import { RecruiterModeView } from "@/components/recruiter/RecruiterModeView";

export default function Home() {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    // Easter egg log in console for technical recruiters
    console.log(
      "%cLooking for insights? Let's talk 👋 Email: rouagabir@gmail.com",
      "background: #121A33; color: #2DD4BF; font-size: 14px; font-weight: bold; padding: 8px 12px; border-radius: 6px; border: 1px solid #2DD4BF;"
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-accent-teal selection:text-slate-950">
      {/* Background Data Noise Particles & Grid */}
      <NoiseBackground />

      {/* Sticky Navigation */}
      <Navbar
        isRecruiterMode={isRecruiterMode}
        onToggleRecruiterMode={() => setIsRecruiterMode(!isRecruiterMode)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onToggleRecruiterMode={() => setIsRecruiterMode(!isRecruiterMode)}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        {isRecruiterMode ? (
          <RecruiterModeView
            onExitRecruiterMode={() => setIsRecruiterMode(false)}
          />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <ExperiencePipeline />
            <ProjectsSection />
            <SkillsStarSchema />
            <LeadershipSection />
            <EducationSection />
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
