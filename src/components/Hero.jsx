import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, HackerRank } from './Icons';
import {
  ArrowRight,
  Sparkles,
  Download,
  Brain,
  BarChart3,
  Code2,
  CheckCircle2,
  FileText,
  ExternalLink
} from 'lucide-react';

const Hero = () => {
  const roles = [
    "AI & Data Science Student",
    "Data Science Enthusiast",
    "Machine Learning Explorer",
    "Full-Stack Developer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">

      {/* Ambient light blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-sky-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-purple-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Main Content */}
          <div className="lg:col-span-7 text-left">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>B.Tech AI & DS • REVA University (2025–2029)</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              Hi, I'm <br className="hidden sm:block" />
              <span className="animate-text-shimmer drop-shadow-sm">
                {personalInfo.name}
              </span>
            </h1>

            {/* Typewriter subtitle */}
            <div className="h-12 flex items-center mb-4">
              <span className="text-xl sm:text-2xl font-semibold text-slate-300 font-mono flex items-center gap-2">
                <span className="text-indigo-400">&gt;</span>
                <span className="text-sky-400 font-bold">{displayText}</span>
                <span className="w-0.5 h-7 bg-indigo-400 animate-pulse inline-block" />
              </span>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mb-4 leading-relaxed italic">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>

            {/* Short intro */}
            <p className="text-sm text-slate-400 max-w-xl mb-8 leading-relaxed">
              I'm an Artificial Intelligence and Data Science student passionate about programming, data, machine learning, and building practical technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => handleScrollTo('projects')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
                aria-label="Explore my work"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="mailto:shashankrn88@gmail.com?subject=Resume Request — Shashank R N"
                className="px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-slate-200 font-semibold text-sm border border-white/10 hover:border-indigo-500/40 transition-all flex items-center gap-2"
                aria-label="Download Resume"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icon Links */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-500 font-mono">Find me:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all text-xs font-mono"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/30 transition-all text-xs font-mono"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={personalInfo.socials.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-xs font-mono"
                aria-label="HackerRank Profile"
              >
                <HackerRank className="w-4 h-4" />
                HackerRank
              </a>
            </div>
          </div>

          {/* Right: Floating Profile Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative">

              {/* Floating keyboard key decorators */}
              <div className="absolute -top-8 -left-4 key-cap px-4 py-2 text-sm text-sky-400 font-mono animate-float-slow z-20 shadow-xl">
                Python
              </div>
              <div className="absolute -bottom-8 -right-2 key-cap px-4 py-2 text-xs text-indigo-300 font-mono animate-float-medium z-20 shadow-xl">
                AI &amp; ML
              </div>
              <div className="absolute -top-4 right-4 key-cap px-3 py-1.5 text-xs text-emerald-300 font-mono z-20" style={{ animationDelay: '2s' }}>
                Data
              </div>

              {/* Main floating paper/profile card */}
              <div className="floating-paper-card p-6 sm:p-8 rounded-3xl relative z-10 hover:-translate-y-2 transition-transform duration-500">

                {/* Paper header strip - window dots */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-indigo-400" /> shashank_profile.py
                  </span>
                </div>

                {/* Profile Avatar placeholder */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-sky-500/30 border border-indigo-500/30 flex items-center justify-center text-2xl font-bold text-indigo-300 font-mono shrink-0">
                    SRN
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">{personalInfo.name}</p>
                    <p className="text-xs text-slate-400 font-mono">B.Tech AI & Data Science</p>
                    <p className="text-xs text-indigo-400 font-mono">REVA University</p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between hover:border-indigo-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                        <Brain className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-mono">Course</p>
                        <p className="text-sm font-semibold text-white">B.Tech AI & Data Science</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20">
                      REVA
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors">
                      <p className="text-[11px] text-slate-400 font-mono">Current CGPA</p>
                      <p className="text-2xl font-bold text-emerald-400 mt-1 font-mono">{personalInfo.cgpa}</p>
                      <p className="text-[10px] text-slate-500">3rd Semester</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-sky-500/30 transition-colors">
                      <p className="text-[11px] text-slate-400 font-mono">12th Score</p>
                      <p className="text-2xl font-bold text-sky-400 mt-1 font-mono">{personalInfo.twelfthScore}</p>
                      <p className="text-[10px] text-slate-500">Board Distinction</p>
                    </div>
                  </div>
                </div>

                {/* Career interests */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <p className="text-xs font-mono text-slate-400 mb-2">Aspiring to become:</p>
                  {['Data Scientist', 'Data Analyst', 'Full-Stack Developer'].map((role, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="font-semibold text-white">{role}</span>
                    </div>
                  ))}
                </div>

                {/* Paper tape visual */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-white/8 backdrop-blur-md border border-white/15 rotate-[-1deg] rounded-sm pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
