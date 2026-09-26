import React from 'react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#181c24] border border-[#262a33] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#141820] border-b border-[#262a33] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#262a33] text-[#4edea3] font-semibold border border-[#31353e]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#908fa0]">Architecture Specification</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#908fa0] hover:text-white hover:bg-[#262a33] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 flex flex-col gap-6 text-[#dfe2ee]">
          {project.image && (
            <div className="relative h-48 sm:h-60 rounded-xl overflow-hidden border border-[#262a33]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16] via-[#0a0e16]/30 to-transparent flex items-end p-4">
                <span className="font-mono text-xs text-[#4edea3] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                  Production Environment Segment
                </span>
              </div>
            </div>
          )}

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#dfe2ee]">
              {project.title}
            </h1>
            <p className="text-sm font-mono text-[#c0c1ff] mt-1">{project.tagline}</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="p-4 rounded-xl bg-[#1c2028] border border-[#262a33] flex flex-col"
              >
                <span className="text-2xl font-bold text-[#4edea3]">{m.value}</span>
                <span className="font-mono text-xs text-[#908fa0] mt-0.5">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Deep dive narrative */}
          <div className="flex flex-col gap-2">
            <h3 className="font-mono text-xs text-[#c0c1ff] font-bold uppercase tracking-wider">
              System Context &amp; Problem Statement
            </h3>
            <p className="text-sm text-[#c7c4d7] leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Architectural Blueprint */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs text-[#c0c1ff] font-bold uppercase tracking-wider">
              Architectural Invariants &amp; Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecturePoints.map((pt, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#1c2028] border border-[#262a33] flex items-start gap-2.5"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#4edea3] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-xs text-[#c7c4d7] leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code snippet if present */}
          {project.codeSnippet && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#908fa0]">
                <span className="flex items-center gap-1.5 text-[#c0c1ff]">
                  <span className="material-symbols-outlined text-[15px]">code</span>
                  {project.codeSnippet.filename}
                </span>
                <span className="text-[#4edea3]">Production Sample</span>
              </div>
              <pre className="p-4 rounded-xl bg-[#0a0e16] border border-[#262a33] font-mono text-xs text-[#c7c4d7] overflow-x-auto leading-relaxed">
                {project.codeSnippet.code}
              </pre>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#262a33]">
            <span className="font-mono text-xs text-[#908fa0]">Full Technology Stack:</span>
            {project.technologies.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1 rounded bg-[#1c2028] text-[#dfe2ee] border border-[#262a33]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#141820] border-t border-[#262a33] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] font-mono text-xs transition-colors"
          >
            Close Specification
          </button>
        </div>
      </div>
    </div>
  );
};
