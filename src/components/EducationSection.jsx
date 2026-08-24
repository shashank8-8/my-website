import React from 'react';
import { educationData } from '../data/portfolioData';
import {
  GraduationCap,
  CheckCircle2,
  BookOpen,
  Calendar,
  Award
} from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            <span>04 // Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education <span className="animate-text-shimmer">Timeline</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My academic journey — building a strong foundation in AI & Data Science.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto relative border-l-2 border-indigo-500/20 ml-8 space-y-12 pl-10">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative group">

              {/* Timeline node */}
              <div className="absolute -left-[49px] top-4 w-6 h-6 rounded-full bg-[#0b0f17] border-2 border-indigo-400 group-hover:border-sky-400 group-hover:scale-125 transition-all flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 group-hover:bg-sky-400 transition-colors" />
              </div>

              {/* Floating paper card */}
              <div className="floating-paper-card p-7 rounded-2xl border border-white/10
                             hover:border-indigo-500/30 transition-all duration-400
                             hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10
                             relative group">

                {/* Tape at top */}
                <div className="absolute -top-2.5 left-8 w-14 h-5 bg-white/8 border border-white/15 rotate-[-1deg] rounded-sm pointer-events-none" />

                {/* Header badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    <Award className="w-3 h-3" />
                    {edu.grade}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                  {edu.degree}
                </h4>
                <p className="text-sm text-slate-400 font-mono mb-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-indigo-400 font-mono mb-5">
                  {edu.status}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
