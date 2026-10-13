"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
      if (savedTheme) {
        setTheme(savedTheme);
        if (savedTheme === "light") {
          document.documentElement.classList.add("light");
        } else {
          document.documentElement.classList.remove("light");
        }
      } else {
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        if (prefersLight) {
          setTheme("light");
          document.documentElement.classList.add("light");
        }
      }
    } catch (e) {
      console.warn("Unable to access localStorage for theme preference", e);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {
      console.warn("Unable to write to localStorage for theme", e);
    }

    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="p-2 rounded-lg border border-border text-text-muted hover:text-text-primary hover:bg-surface-hover transition-colors"
      >
        <Moon className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="p-2 rounded-lg border border-border text-text-muted hover:text-text-primary hover:bg-surface-hover transition-colors focus:ring-2 focus:ring-accent-teal"
      title={`Current theme: ${theme}. Click to switch.`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-accent-amber animate-pulse-slow" />
      ) : (
        <Moon className="w-4 h-4 text-accent-teal" />
      )}
    </button>
  );
};
