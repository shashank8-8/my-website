import React from 'react';
import { currentlyLearning } from '../data/portfolioData';
import { BookOpen, Sparkles } from 'lucide-react';

const CurrentlyLearningSection = () => {
  return (
    <section id="learning" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>04 // Learning Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Currently <span className="animate-text-shimmer">Learning</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A continuous journey of building skills and exploring technologies.
          </p>
        </div>

        {/* Sticky note grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentlyLearning.map((item, idx) => (
            <div
              key={idx}
              className={`floating-paper-card rounded-2xl p-6 relative
                         bg-gradient-to-br ${item.color}
                         border ${item.borderColor}
                         hover:-translate-y-2 transition-all duration-400 group`}
              style={{
                transform: `rotate(${(idx % 3 === 0 ? -1 : idx % 3 === 1 ? 0.5 : -0.7)}deg)`,
                transformOrigin: 'center bottom'
              }}
            >
              {/* Pin / tape */}
              <div className={`absolute -top-2 left-6 w-12 h-4 bg-white/10 border border-white/20 rounded-sm pointer-events-none
                              ${idx % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1.5deg]'}`} />

              <div className="flex items-center justify-between mb-4">
                <span className={`key-cap px-2.5 py-1 text-xs ${item.accent} font-mono group-hover:border-opacity-60`}>
                  {item.keyCap}
                </span>
                <Sparkles className={`w-4 h-4 ${item.accent} opacity-50 group-hover:opacity-100 transition-opacity`} />
              </div>

              <h4 className="text-base font-bold text-white mb-2">{item.topic}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>

              <div className={`mt-4 pt-3 border-t border-white/10 flex items-center gap-2 ${item.accent} text-[11px] font-mono`}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                <span>In Progress</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurrentlyLearningSection;
