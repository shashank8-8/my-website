import React from 'react';
import { Github } from './Icons';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers, Cpu } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-3xl glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-8">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-mono border border-indigo-500/20 mb-3">
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>{project.category}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-indigo-400 mt-1">{project.subtitle}</p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
              <p className="text-[11px] text-slate-400 font-mono">{m.label}</p>
              <p className="text-lg font-bold text-emerald-400 font-mono mt-0.5">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Full Description */}
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" /> Architecture Overview
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Tech Stack Keycaps */}
        <div className="mb-8">
          <h4 className="text-xs font-mono text-slate-400 mb-3">Technologies Employed:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span key={idx} className="key-cap px-3 py-1 text-xs text-sky-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-indigo-600/30"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application Demo</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
