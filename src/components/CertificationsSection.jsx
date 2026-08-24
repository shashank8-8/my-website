import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, ExternalLink, Clock, Plus } from 'lucide-react';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>06 // Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            <span className="animate-text-shimmer">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Certifications earned in 2026. Details will be updated soon.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="floating-paper-card rounded-3xl border border-white/10 p-7 relative
                         hover:border-indigo-500/30 transition-all duration-400 group hover:-translate-y-1"
            >
              {/* Tape aesthetic */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/8 border border-white/15 rotate-[1deg] rounded-sm pointer-events-none" />

              {cert.placeholder ? (
                /* Placeholder card */
                <div className="flex flex-col items-center justify-center min-h-[150px] opacity-60">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-4">
                    <Plus className="w-6 h-6 text-slate-500" />
                  </div>
                  <p className="text-slate-500 font-mono text-sm font-semibold">Certification</p>
                  <p className="text-slate-600 text-xs font-mono mt-1">Details coming in 2026</p>
                  <div className="flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span className="text-[11px] text-slate-500 font-mono">2026</span>
                  </div>
                </div>
              ) : (
                /* Filled certificate card */
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2 py-1 rounded-md border border-white/10">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mb-4">{cert.organization}</p>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <button
                    className="flex items-center gap-2 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors mt-2"
                    disabled
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Certificate
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-600 font-mono mt-8">
          ※ Certification details will be added once available. This section is editable and up-to-date friendly.
        </p>

      </div>
    </section>
  );
};

export default CertificationsSection;
