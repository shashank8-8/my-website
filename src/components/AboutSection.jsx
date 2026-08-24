import React from 'react';
import { personalInfo, currentlyLearning } from '../data/portfolioData';
import {
  Brain,
  BarChart3,
  Code2,
  GraduationCap,
  Target,
  Sparkles,
  BookOpen,
  Layers
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { value: personalInfo.cgpa, label: 'CGPA', sub: '3rd Semester', color: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5' },
    { value: personalInfo.twelfthScore, label: '12th Score', sub: 'Board Distinction', color: 'text-sky-400', border: 'border-sky-500/20', bg: 'bg-sky-500/5' },
    { value: personalInfo.studyPeriod, label: 'Academic Journey', sub: 'B.Tech Batch', color: 'text-indigo-400', border: 'border-indigo-500/20', bg: 'bg-indigo-500/5' },
    { value: '3rd', label: 'Semester', sub: 'Currently Active', color: 'text-purple-400', border: 'border-purple-500/20', bg: 'bg-purple-500/5' },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About <span className="animate-text-shimmer">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Who I am, what I study, and where I'm headed.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">

          {/* Bio Card */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-indigo-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">About Shashank R N</h3>
                <p className="text-xs font-mono text-slate-400">REVA University • B.Tech AI & Data Science</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-base mb-8">
              {personalInfo.bio}
            </p>

            {/* Floating stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`floating-paper-card p-4 rounded-2xl ${stat.bg} border ${stat.border}
                             hover:-translate-y-1 transition-transform duration-300 text-center group relative`}
                >
                  {/* Mini tape */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-white/8 border border-white/15 rounded-sm rotate-[-1deg] pointer-events-none" />
                  <p className={`text-2xl font-extrabold ${stat.color} mt-1 font-mono`}>{stat.value}</p>
                  <p className="text-xs font-semibold text-white mt-1">{stat.label}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Aspirations */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
              <Target className="w-4 h-4 text-sky-400" /> Career Aspirations
            </h3>

            {[
              { icon: Brain, title: 'Data Scientist', desc: 'Building machine learning models and AI solutions to solve real-world problems.', color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
              { icon: BarChart3, title: 'Data Analyst', desc: 'Transforming raw data into meaningful insights and visual dashboards.', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
              { icon: Code2, title: 'Full-Stack Developer', desc: 'Crafting complete web applications from idea to production.', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel-hover p-5 rounded-2xl border border-white/10 flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl border ${item.bg} ${item.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
