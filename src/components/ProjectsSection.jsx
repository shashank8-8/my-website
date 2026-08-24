import React, { useState } from 'react';
import { projectsData, projectPlaceholders } from '../data/portfolioData';
import { Github } from './Icons';
import {
  Briefcase,
  ExternalLink,
  ArrowUpRight,
  Layers,
  Plus,
  HeartHandshake,
  Globe,
  Stethoscope
} from 'lucide-react';

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div
      className="glass-panel p-8 rounded-3xl border border-white/10 relative flex flex-col justify-between
                 hover:border-indigo-500/40 transition-all duration-500 group
                 hover:-translate-y-2 hover:rotate-[0.3deg] hover:shadow-2xl hover:shadow-indigo-500/10"
      style={{ transformOrigin: 'center bottom' }}
    >
      {/* Tape / paper fold at top */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/8 backdrop-blur-sm border border-white/15 rotate-[-1deg] rounded-sm pointer-events-none" />

      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Stethoscope className="w-4 h-4" />
            </div>
            <span className="px-3 py-1 text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
              {project.badge}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-sky-400" /> {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-indigo-400 font-mono mb-1">
          {project.subtitle}
        </p>
        <p className="text-xs text-slate-400 font-mono mb-5">
          Role: <span className="text-slate-300">{project.role}</span>
        </p>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <p className="text-xs font-mono text-slate-400 mb-3">Potential Features:</p>
          <div className="flex flex-wrap gap-2">
            {project.features.map((f, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-[11px] text-slate-300 bg-white/[0.03] border border-white/10 rounded-lg font-mono"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="key-cap px-2.5 py-1 text-[11px] text-sky-300 group-hover:border-indigo-500/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions Footer */}
      <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500
                     text-white font-semibold text-xs shadow-lg shadow-indigo-600/30
                     hover:shadow-indigo-500/50 hover:scale-[1.03] active:scale-[0.97] transition-all"
          aria-label="View MediScan.ai on GitHub"
        >
          <Github className="w-4 h-4" />
          <span>View on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-colors"
            aria-label="View Live Demo"
          >
            <Globe className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const PlaceholderCard = () => (
  <div className="glass-panel p-8 rounded-3xl border border-white/5 border-dashed relative flex flex-col items-center justify-center min-h-[320px] opacity-50 hover:opacity-70 transition-opacity">
    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/5 border border-white/10 rotate-[1deg] rounded-sm" />
    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-4">
      <Plus className="w-6 h-6 text-slate-500" />
    </div>
    <p className="text-slate-500 font-mono text-sm text-center">Next Project</p>
    <p className="text-slate-600 text-xs font-mono text-center mt-1">Coming soon...</p>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5 text-sky-400" />
            <span>03 // Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            My <span className="animate-text-shimmer">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real projects I've built and explored. More coming as I continue learning.
          </p>
        </div>

        {/* Featured Project label */}
        <div className="flex items-center gap-3 mb-8">
          <HeartHandshake className="w-5 h-5 text-indigo-400" />
          <h3 className="text-xl font-bold text-white">Featured Project</h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {projectPlaceholders.map((p) => (
            <PlaceholderCard key={p.id} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
