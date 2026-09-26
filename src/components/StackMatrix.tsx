import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const StackMatrix: React.FC = () => {
  return (
    <section className="w-full py-12" id="skills">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs text-[#c0c1ff] font-bold uppercase tracking-widest">
            Technical Repertoire
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#dfe2ee] tracking-tight">
            Stack Matrix &amp; Toolchain
          </h2>
        </div>
        <span className="font-mono text-xs text-[#908fa0]">
          Production proven through 5+ enterprise years
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_CATEGORIES.map((cat) => {
          const accentColor =
            cat.id === '01'
              ? 'text-[#c0c1ff]'
              : cat.id === '02'
              ? 'text-[#7bd0ff]'
              : cat.id === '03'
              ? 'text-[#4edea3]'
              : 'text-[#c0c1ff]';

          return (
            <div
              key={cat.id}
              className="p-6 rounded-xl bg-[#181c24] border border-[#262a33] shadow-sm flex flex-col justify-between hover:bg-[#1c2028] hover:border-[#8083ff]/30 transition-all duration-200 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold ${accentColor}`}>
                    {cat.id} / STACK
                  </span>
                  <span className="material-symbols-outlined text-[#908fa0] group-hover:text-white transition-colors text-[20px]">
                    {cat.icon}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#dfe2ee]">{cat.name}</h3>

                <p className="text-xs text-[#c7c4d7] leading-relaxed">{cat.description}</p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#1c2028] text-[#dfe2ee] border border-[#262a33] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`mt-5 pt-3 border-t border-[#262a33] font-mono text-[11px] flex items-center gap-1.5 ${accentColor}`}
              >
                <span className="material-symbols-outlined text-[14px]">
                  {cat.id === '01'
                    ? 'bolt'
                    : cat.id === '02'
                    ? 'api'
                    : cat.id === '03'
                    ? 'cloud_sync'
                    : 'terminal'}
                </span>
                <span>{cat.badge}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
