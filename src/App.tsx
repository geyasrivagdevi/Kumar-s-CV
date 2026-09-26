import React, { useState, useEffect } from 'react';
import { ActiveScreen, Project } from './types';
import { PROJECTS } from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsRibbon } from './components/MetricsRibbon';
import { RogersHighlight } from './components/RogersHighlight';
import { ArchitecturalPrinciples } from './components/ArchitecturalPrinciples';
import { StackMatrix } from './components/StackMatrix';
import { WorkAuthorization } from './components/WorkAuthorization';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ExperienceView } from './components/ExperienceView';
import { ProjectsView } from './components/ProjectsView';
import { ContactView } from './components/ContactView';
import { CvModal } from './components/CvModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('overview');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLiveTerminalOpen, setIsLiveTerminalOpen] = useState(false);

  // Sync window hash or scroll position when switching screens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeScreen]);

  return (
    <div className="min-h-screen bg-[#0f131c] text-[#dfe2ee] font-sans flex flex-col selection:bg-[#8083ff] selection:text-[#0d0096]">
      {/* Fixed Header */}
      <Header
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeScreen === 'overview' && (
            <div className="flex flex-col gap-6">
              {/* 1. Hero Section */}
              <Hero
                setActiveScreen={setActiveScreen}
                onOpenCvModal={() => setIsCvModalOpen(true)}
                onOpenLiveTerminal={() => setIsLiveTerminalOpen(true)}
              />

              {/* 2. Production Impact Metrics Ribbon */}
              <MetricsRibbon />

              {/* 3. Flagship Enterprise Highlight Banner */}
              <RogersHighlight
                onOpenDeepDive={() => setSelectedProject(PROJECTS[0])}
              />

              {/* 4. Engineering Philosophy & Systems Reliability */}
              <ArchitecturalPrinciples />

              {/* 5. Technical Stack Matrix */}
              <StackMatrix />

              {/* 6. Work Authorization & Setup Photo */}
              <WorkAuthorization />

              {/* 7. Call To Action Banner */}
              <CtaSection
                setActiveScreen={setActiveScreen}
                onOpenCvModal={() => setIsCvModalOpen(true)}
              />
            </div>
          )}

          {activeScreen === 'experience' && <ExperienceView />}

          {activeScreen === 'projects' && (
            <ProjectsView onSelectProject={(p) => setSelectedProject(p)} />
          )}

          {activeScreen === 'contact' && <ContactView />}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <InteractiveTerminalModal
        isOpen={isLiveTerminalOpen}
        onClose={() => setIsLiveTerminalOpen(false)}
        onOpenCvModal={() => {
          setIsLiveTerminalOpen(false);
          setIsCvModalOpen(true);
        }}
      />
    </div>
  );
}
