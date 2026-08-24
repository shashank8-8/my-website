import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, HackerRank } from './Icons';
import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>08 // Contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build <span className="animate-text-shimmer">Something</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project idea, collaboration opportunity, or question? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/8 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-2">Get in Touch</h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Currently open for collaborations, learning opportunities, and interesting conversations about AI & tech.
              </p>

              {/* Email */}
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-mono">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-white font-mono hover:text-sky-300 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-sky-300 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono">University</p>
                    <p className="text-sm font-semibold text-white">REVA University, Bengaluru, India</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-5 border-t border-white/10">
                <p className="text-xs font-mono text-slate-400 mb-4">Professional Profiles:</p>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="key-cap p-3 text-xs text-slate-200 hover:text-white flex flex-col items-center gap-1.5 group"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                    <span className="text-[10px] font-mono">GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="key-cap p-3 text-xs text-slate-200 hover:text-white flex flex-col items-center gap-1.5 group"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-sky-400" />
                    <span className="text-[10px] font-mono">LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socials.hackerrank}
                    target="_blank"
                    rel="noreferrer"
                    className="key-cap p-3 text-xs text-slate-200 hover:text-white flex flex-col items-center gap-1.5 group"
                    aria-label="HackerRank Profile"
                  >
                    <HackerRank className="w-5 h-5 text-slate-300 group-hover:text-emerald-400" />
                    <span className="text-[10px] font-mono">HackerRank</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-slate-400 font-mono mb-6">
              Fill in the form below and I'll get back to you as soon as possible.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-xs text-emerald-200 font-mono">
                  Thank you for reaching out. Shashank R N will respond soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-2">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 font-sans text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-2">Your Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 font-sans text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-2">Message *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows="5"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 font-sans text-sm resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
