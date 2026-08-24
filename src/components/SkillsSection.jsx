import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Cpu, Code2, Brain, Wrench, Database } from 'lucide-react';

const levelConfig = {
  Intermediate: {
    label: 'Intermediate',
    color: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    dotColor: 'bg-sky-400',
    dots: 3
  },
  Beginner: {
    label: 'Beginner',
    color: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    dotColor: 'bg-amber-400',
    dots: 1
  }
};

const LevelBadge = ({ level }) => {
  const config = levelConfig[level] || levelConfig.Beginner;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold rounded-full border ${config.color}`}>
      <span className="flex gap-0.5">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${i < config.dots ? config.dotColor : 'bg-slate-700'}`}
          />
        ))}
      </span>
      {config.label}
    </span>
  );
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Skills', icon: Cpu },
    { id: 'programming', label: 'Programming', icon: Code2 },
    { id: 'aiml', label: 'AI / ML', icon: Brain },
    { id: 'data', label: 'Data', icon: Database },
    { id: 'development', label: 'Development', icon: Wrench },
  ];

  const categoryConfig = {
    programming: { label: 'Programming Languages', color: 'border-indigo-500/20', accent: 'bg-indigo-500/10 text-indigo-400' },
    aiml: { label: 'AI / Machine Learning', color: 'border-sky-500/20', accent: 'bg-sky-500/10 text-sky-400' },
    data: { label: 'Data Science & Analytics', color: 'border-purple-500/20', accent: 'bg-purple-500/10 text-purple-400' },
    development: { label: 'Development & Tools', color: 'border-emerald-500/20', accent: 'bg-emerald-500/10 text-emerald-400' },
  };

  const getFilteredGroups = () => {
    if (activeTab !== 'all') {
      return [{ key: activeTab, items: skillsData[activeTab] }];
    }
    return ['programming', 'aiml', 'data', 'development'].map(k => ({ key: k, items: skillsData[k] }));
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>02 // Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="animate-text-shimmer">Expertise</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            An honest snapshot of my current technical skills — continuously growing through projects and study.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30 scale-105'
                    : 'glass-panel text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups */}
        <div className="space-y-10">
          {getFilteredGroups().map(({ key, items }) => {
            const cfg = categoryConfig[key];
            return (
              <div key={key} className={`glass-panel p-8 rounded-3xl border ${cfg.color} relative`}>
                <div className="flex items-center gap-3 mb-8">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${cfg.accent}`}>
                    {cfg.label}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 group floating-paper-card"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          {/* 3D Keycap Badge */}
                          <span className="key-cap min-w-[40px] h-9 px-2.5 text-xs text-sky-300 group-hover:border-indigo-400 font-mono">
                            {skill.keyCap}
                          </span>
                          <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                        <LevelBadge level={skill.level} />
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note about honest representation */}
        <p className="text-center text-xs text-slate-500 font-mono mt-10">
          ※ Skill levels reflect honest self-assessment. Actively learning and improving daily.
        </p>

      </div>
    </section>
  );
};

export default SkillsSection;
