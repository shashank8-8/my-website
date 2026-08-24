import React from 'react';
import { careerGoals } from '../data/portfolioData';
import { Brain, BarChart3, Code2, Compass, ArrowRight } from 'lucide-react';

const iconMap = {
  Brain,
  BarChart3,
  Code2,
};

const CareerGoalsSection = () => {
  return (
    <section id="career" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>07 // Career Vision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Where I'm <span className="animate-text-shimmer">Heading</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Three career paths I'm actively exploring and building skills toward.
          </p>
        </div>

        {/* Career Goal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerGoals.map((goal, idx) => {
            const Icon = iconMap[goal.icon] || Brain;
            return (
              <div
                key={idx}
                className={`floating-paper-card rounded-3xl p-7 relative
                           bg-gradient-to-br ${goal.color}
                           border ${goal.borderColor}
                           hover:border-opacity-60 transition-all duration-500
                           hover:-translate-y-2 hover:shadow-xl group`}
              >
                {/* Tape */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/8 border border-white/15 rotate-[-1deg] rounded-sm pointer-events-none" />

                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-2xl border ${goal.iconBg} ${goal.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-mono font-extrabold text-white/10">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className={`text-xl font-extrabold text-white mb-3 group-hover:${goal.accentColor} transition-colors`}>
                  {goal.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {goal.description}
                </p>

                <div className={`flex items-center gap-2 mt-6 pt-4 border-t border-white/10 ${goal.accentColor} text-xs font-mono`}>
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Actively building skills</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CareerGoalsSection;
