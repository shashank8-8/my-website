import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, HackerRank } from './Icons';
import { Code2, ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#070a0f]/90 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 p-[1px]">
              <div className="w-full h-full bg-[#0b0f17] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-sky-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white tracking-tight">{personalInfo.name}</p>
              <p className="text-xs text-slate-400 font-mono">AI & Data Science Student</p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xs text-slate-500 font-mono italic text-center hidden sm:block">
            &ldquo;{personalInfo.tagline}&rdquo;
          </p>

          {/* Social Links + Back to Top */}
          <div className="flex items-center gap-4">
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer"
               className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer"
               className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={personalInfo.socials.hackerrank} target="_blank" rel="noreferrer"
               className="text-slate-400 hover:text-emerald-400 transition-colors" aria-label="HackerRank">
              <HackerRank className="w-4 h-4" />
            </a>
            <a href={`mailto:${personalInfo.email}`}
               className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>

            <div className="w-px h-4 bg-white/10" />

            <button
              onClick={scrollToTop}
              className="key-cap px-3.5 py-2 text-xs text-indigo-300 hover:text-white flex items-center gap-2 cursor-pointer"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-600 font-mono">
          <p>© 2026 {personalInfo.name}. All rights reserved. &nbsp;•&nbsp; Built with passion for AI & Data Science.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
