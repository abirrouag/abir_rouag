"use client";

import React, { useState } from "react";
import { portfolioContent } from "@/content/content";
import { Mail, Phone, Copy, Check, Github, Linkedin, Send, Sparkles } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioContent.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = portfolioContent.contact.formEndpoint;

    // Check if endpoint is still a TODO placeholder
    if (endpoint.includes("TODO")) {
      // Fallback to mailto link
      const mailtoUrl = `mailto:${portfolioContent.personal.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setFormSubmitted(true);
      return;
    }

    // Otherwise POST to Formspree
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => setFormSubmitted(true))
      .catch(() => {
        window.location.href = `mailto:${portfolioContent.personal.email}`;
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Availability Badge Banner */}
        <div className="p-4 rounded-2xl bg-accent-teal-alpha border border-accent-teal/40 text-center max-w-3xl mx-auto shadow-glow">
          <span className="text-sm font-heading font-semibold text-accent-teal flex items-center justify-center gap-2">
            <span>{portfolioContent.personal.availabilityBadge}</span>
          </span>
        </div>

        {/* Section Header & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent-teal mb-3">
                <Sparkles className="w-3.5 h-3.5 text-accent-amber" />
                <span>Get in Touch</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
                {portfolioContent.contact.headline}
              </h2>
              <p className="mt-3 text-base text-text-muted">
                Open to Business Analyst, Data & BI, and Digital Transformation internship opportunities at global organizations.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <a
                href={`mailto:${portfolioContent.personal.email}`}
                className="p-4 rounded-xl bg-surface border border-border hover:border-accent-teal transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-hover border border-border text-accent-teal">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-text-muted block">Direct Email</span>
                    <span className="font-mono font-bold text-sm text-text-primary group-hover:text-accent-teal transition-colors">
                      {portfolioContent.personal.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-accent-teal font-mono">Send Email →</span>
              </a>

              {/* Phone Card with Copy Action */}
              <div className="p-4 rounded-xl bg-surface border border-border flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-hover border border-border text-accent-amber">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-text-muted block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${portfolioContent.personal.phone.replace(/\s+/g, "")}`}
                      className="font-mono font-bold text-sm text-text-primary hover:text-accent-amber transition-colors"
                    >
                      {portfolioContent.personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="p-2 rounded-lg bg-surface-hover border border-border text-text-muted hover:text-text-primary transition-colors flex items-center gap-1 text-xs"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4 text-accent-emerald" />
                      <span className="text-accent-emerald font-mono">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline font-mono">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={portfolioContent.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-surface border border-border hover:border-accent-teal text-center text-xs font-mono font-semibold text-text-primary flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4 text-accent-teal" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioContent.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-surface border border-border hover:border-accent-teal text-center text-xs font-mono font-semibold text-text-primary flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-accent-teal" />
                  <span>LinkedIn (TODO)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-border shadow-2xl">
            <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-text-muted mb-6">
              Fill out the form below to initiate contact regarding internship offers, project collaboration, or interview requests.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-accent-teal-alpha border border-accent-teal text-center space-y-2">
                <h4 className="font-heading font-bold text-lg text-accent-teal">Message Received!</h4>
                <p className="text-xs text-text-primary">
                  Thank you for reaching out. Abir will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-text-muted mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Recruiter"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-sm text-text-primary placeholder:text-text-muted focus:ring-2 focus:ring-accent-teal outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-text-muted mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-sm text-text-primary placeholder:text-text-muted focus:ring-2 focus:ring-accent-teal outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-text-muted mb-1">
                    Message / Internship Brief
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the target Business Analyst role, location, or timeline..."
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-sm text-text-primary placeholder:text-text-muted focus:ring-2 focus:ring-accent-teal outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-accent-teal text-slate-950 font-bold text-sm hover:bg-teal-300 transition-colors flex items-center justify-center gap-2 shadow-glow focus:ring-2 focus:ring-accent-teal"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
