import React, { useState, useEffect } from 'react';
import { interactiveKeys, personalInfo } from '../data/portfolioData';
import { Terminal, Sparkles, Command, Keyboard, Check, RefreshCw } from 'lucide-react';

const KeyExplorerPlayground = () => {
  const [activeKey, setActiveKey] = useState('P');
  const [activeFact, setActiveFact] = useState(interactiveKeys[0].fact);
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: 'DevDesk Interactive Terminal v2.5 initialized...' },
    { type: 'info', text: 'Press any 3D key below or type on your keyboard to explore secrets.' },
    { type: 'success', text: 'Active key selected: [P] -> Python & ML Ecosystem' }
  ]);

  const handleKeyClick = (keyObj) => {
    setActiveKey(keyObj.key);
    setActiveFact(keyObj.fact);
    setTerminalLogs((prev) => [
      ...prev.slice(-6),
      { type: 'exec', text: `> exec_key_action(${keyObj.key})` },
      { type: 'success', text: `[${keyObj.key}] ${keyObj.label}: ${keyObj.fact}` }
    ]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const pressed = e.key.toUpperCase();
      const match = interactiveKeys.find(
        (k) => k.key.toUpperCase() === pressed || (pressed === 'ENTER' && k.key === 'Enter')
      );
      if (match) {
        handleKeyClick(match);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="playground" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>05 // Interactive Key Desk</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Developer <span className="animate-text-shimmer">Keyboard Playground</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Click floating 3D keycaps or press keys on your physical keyboard to trigger workspace shortcuts & insights.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Keycaps Grid (Left 6 Cols) */}
          <div className="lg:col-span-6 glass-panel p-8 rounded-3xl border border-white/10 relative">
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white font-mono">Floating 3D Keyboard</h3>
              </div>
              <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" /> Real-time listener active
              </span>
            </div>

            {/* Virtual Keycaps Array */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {interactiveKeys.map((k) => {
                const isSelected = activeKey === k.key;
                return (
                  <button
                    key={k.key}
                    onClick={() => handleKeyClick(k)}
                    className={`key-cap p-4 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'key-cap-pressed border-sky-400 bg-indigo-900/60 shadow-indigo-500/30 text-white scale-95 ring-2 ring-sky-400/50' 
                        : 'text-slate-200 hover:text-sky-300'
                    }`}
                  >
                    <span className="text-lg font-bold font-mono text-indigo-300">{k.key}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{k.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 flex items-center gap-2">
              <Command className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Tip: You can press <strong>P</strong>, <strong>A</strong>, <strong>S</strong>, <strong>D</strong>, <strong>R</strong> or <strong>Enter</strong> directly on your keyboard!</span>
            </div>

          </div>

          {/* Simulated Terminal & Output Log (Right 6 Cols) */}
          <div className="lg:col-span-6 glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            
            {/* Terminal Header */}
            <div className="px-6 py-4 bg-[#0b0f17]/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-400 ml-2">shashank_cli.sh</span>
              </div>
              <button 
                onClick={() => setTerminalLogs([{ type: 'sys', text: 'Terminal output cleared.' }])}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 font-mono cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Clear
              </button>
            </div>

            {/* Active Highlight Banner */}
            <div className="p-6 bg-indigo-950/40 border-b border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="key-cap px-2.5 py-1 text-xs text-sky-300">{activeKey}</span>
                <span className="text-sm font-bold text-white font-mono">Active Key Output:</span>
              </div>
              <p className="text-sm text-sky-200 leading-relaxed font-sans font-medium">
                "{activeFact}"
              </p>
            </div>

            {/* Scrollable Terminal Stream */}
            <div className="p-6 font-mono text-xs space-y-2 h-56 overflow-y-auto bg-[#070a0f]/90">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  {log.type === 'exec' && <span className="text-indigo-400">&gt;</span>}
                  {log.type === 'success' && <span className="text-emerald-400">✔</span>}
                  {log.type === 'sys' && <span className="text-amber-400">⚡</span>}
                  {log.type === 'info' && <span className="text-sky-400">ℹ</span>}
                  <span className={
                    log.type === 'exec' ? 'text-indigo-300 font-bold' :
                    log.type === 'success' ? 'text-slate-200' :
                    log.type === 'sys' ? 'text-amber-300' : 'text-slate-400'
                  }>
                    {log.text}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default KeyExplorerPlayground;
