import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { Trophy, Star, Medal } from 'lucide-react';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-mono mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>05 // Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            My <span className="animate-text-shimmer">Achievements</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Recognition earned through dedication and hard work.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="flex justify-center">
          <div className="max-w-2xl w-full space-y-6">
            {achievementsData.map((achievement) => (
              <div
                key={achievement.id}
                className="relative group"
              >
                {/* Tape / paper aesthetic */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-400/10 backdrop-blur-sm border border-amber-400/20 rotate-[-1.5deg] rounded-sm pointer-events-none z-20" />

                {/* Main award card */}
                <div className="floating-paper-card p-8 rounded-3xl border border-amber-500/20
                               bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent
                               hover:border-amber-400/40 transition-all duration-500
                               hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10
                               group relative overflow-hidden">

                  {/* Ambient glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/8 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 flex items-start gap-6">
                    {/* Trophy icon */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20
                                      border border-amber-500/30 flex items-center justify-center text-3xl
                                      group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/10">
                        {achievement.emoji}
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-mono font-bold bg-amber-500/10 text-amber-300 rounded-full border border-amber-500/20">
                          🥇 {achievement.category}
                        </span>
                        <span className="px-3 py-1 text-xs font-mono text-slate-400 bg-white/[0.03] rounded-full border border-white/10">
                          {achievement.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 leading-tight group-hover:text-amber-200 transition-colors">
                        {achievement.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Star decoration */}
                      <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-white/10">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-amber-400 fill-amber-400"
                          />
                        ))}
                        <span className="ml-2 text-xs text-slate-400 font-mono">University Level Award</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
