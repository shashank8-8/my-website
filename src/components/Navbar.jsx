import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, HackerRank } from './Icons';
import {
  Code2,
  Terminal,
  User,
  Briefcase,
  GraduationCap,
  Cpu,
  Mail,
  Menu,
  X,
  Trophy,
  Award,
  BookOpen,
  Compass
} from 'lucide-react';

const Navbar = ({ onOpenKeyExplorer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy: detect which section is in view
      const sections = ['home', 'about', 'skills', 'projects', 'learning', 'education', 'achievements', 'certifications', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: User, id: 'home' },
    { name: 'About', href: '#about', icon: User, id: 'about' },
    { name: 'Skills', href: '#skills', icon: Cpu, id: 'skills' },
    { name: 'Projects', href: '#projects', icon: Briefcase, id: 'projects' },
    { name: 'Education', href: '#education', icon: GraduationCap, id: 'education' },
    { name: 'Achievements', href: '#achievements', icon: Trophy, id: 'achievements' },
    { name: 'Certifications', href: '#certifications', icon: Award, id: 'certifications' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'py-2 bg-[#0b0f17]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-indigo-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0b0f17] rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-white group-hover:text-sky-300 transition-colors">
                {personalInfo.name}
              </span>
              <p className="text-[11px] text-slate-400 font-mono hidden md:block">
                AI & DS @ REVA Univ
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-[#111724]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-500/20 text-sky-300 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Area: Social Links */}
          <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors"
              aria-label="HackerRank"
            >
              <HackerRank className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                    isActive
                      ? 'bg-indigo-500/15 text-sky-300 border border-indigo-500/20'
                      : 'text-slate-200 hover:bg-indigo-500/10 hover:text-sky-300'
                  }`}
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/10 flex items-center justify-between px-2 mt-2">
              <span className="text-xs text-slate-400 font-mono">REVA Univ • 9.1 CGPA</span>
              <div className="flex items-center gap-3">
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-sky-400" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={personalInfo.socials.hackerrank} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400" aria-label="HackerRank">
                  <HackerRank className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
