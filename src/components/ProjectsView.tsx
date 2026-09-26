import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsViewProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Telecom Edge Infrastructure',
    'Distributed Systems & Data',
    'Network Edge Automation',
    'Security & Microservices',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full py-8 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#c0c1ff] font-bold uppercase tracking-widest">
            Production Implementations
          </span>
          <span className="text-[#464554]">•</span>
          <span className="font-mono text-[11px] text-[#4edea3]">Architectural Case Studies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#dfe2ee] tracking-tight">
          Featured Engineering Projects
        </h1>
        <p className="text-base text-[#c7c4d7] max-w-3xl leading-relaxed">
          Deep-dive into production systems built to withstand high concurrency, distributed network
          faults, and strict enterprise SLA parameters.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <span className="text-xs text-[#908fa0] font-mono shrink-0 mr-1">Category:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-lg border transition-all shrink-0 ${
              selectedCategory === cat
                ? 'bg-[#1c2028] text-[#c0c1ff] border-[#8083ff]/60 shadow-[0_0_10px_rgba(192,193,255,0.15)] font-semibold'
                : 'bg-[#181c24] text-[#c7c4d7] border-[#262a33] hover:border-[#31353e]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`rounded-2xl bg-[#181c24] border border-[#262a33] hover:border-[#8083ff]/40 transition-all duration-200 overflow-hidden shadow-xl flex flex-col justify-between group ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Top Image or Header Bar */}
            {project.image && (
              <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-[#0a0e16]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181c24] via-[#181c24]/40 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#0a0e16]/80 backdrop-blur-md text-[#4edea3] border border-[#4edea3]/30 font-semibold">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#8083ff]/80 backdrop-blur-md text-[#1000a9] font-bold">
                      FLAGSHIP
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Content Area */}
            <div className="p-6 sm:p-8 flex flex-col gap-4">
              {!project.image && (
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[#262a33] text-[#4edea3] font-semibold border border-[#31353e]">
                    {project.category}
                  </span>
                </div>
              )}

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#dfe2ee] group-hover:text-white transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs font-mono text-[#c0c1ff] mt-1">{project.tagline}</p>
              </div>

              <p className="text-sm text-[#c7c4d7] leading-relaxed">{project.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-xl bg-[#1c2028] border border-[#262a33] flex flex-col"
                  >
                    <span className="text-xl font-bold text-[#4edea3]">{m.value}</span>
                    <span className="font-mono text-[11px] text-[#908fa0]">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Architecture highlights bullet list */}
              <div className="flex flex-col gap-1.5 pt-2">
                <span className="font-mono text-xs text-[#908fa0] uppercase tracking-wider font-semibold">
                  Architectural Pillars
                </span>
                <ul className="flex flex-col gap-1.5">
                  {project.architecturePoints.slice(0, 3).map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#c7c4d7]">
                      <span className="material-symbols-outlined text-[15px] text-[#7bd0ff] mt-0.5 shrink-0">
                        check
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#262a33]">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#1c2028] text-[#dfe2ee] border border-[#262a33]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="px-6 py-4 bg-[#141820] border-t border-[#262a33] flex items-center justify-between">
              <span className="text-xs font-mono text-[#908fa0]">
                {project.codeSnippet ? 'Includes Live Syntax Trace' : 'Production Verified'}
              </span>
              <button
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#262a33] hover:bg-[#8083ff] hover:text-[#1000a9] text-[#dfe2ee] font-mono text-xs font-semibold transition-all duration-200"
              >
                <span>View Full Architecture Spec</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
