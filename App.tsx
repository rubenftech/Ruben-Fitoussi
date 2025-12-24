
import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from './constants';
import { Project, Metric } from './types';
import { TechBadge } from './components/TechBadge';
import { AIChatAssistant } from './components/AIChatAssistant';

const TechnicalGraph: React.FC<{ type: Project['graphType'] }> = ({ type }) => {
  const points = {
    performance: "10,90 30,50 50,70 70,30 90,10",
    loss: "10,10 30,30 50,45 70,60 90,85",
    latency: "10,20 30,22 50,19 70,21 90,20",
    accuracy: "10,80 30,85 50,88 70,92 90,95"
  };

  const colors = {
    performance: "#3b82f6",
    loss: "#ef4444",
    latency: "#10b981",
    accuracy: "#8b5cf6"
  };

  return (
    <div className="w-full h-56 bg-slate-900 rounded-3xl p-6 flex flex-col justify-between border border-slate-700 shadow-inner">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live System Analytics</span>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="w-2 h-2 rounded-full bg-slate-700"></span>
        </div>
      </div>
      <svg viewBox="0 0 100 100" className="w-full flex-1 overflow-visible">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors[type]} stopOpacity="1" />
            <stop offset="100%" stopColor={colors[type]} stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke={colors[type]}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points[type]}
          className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        />
        <line x1="0" y1="100" x2="100" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />
      </svg>
      <div className="mt-4 flex justify-between text-[8px] font-bold text-slate-600 uppercase tracking-tighter">
        <span>T-Initialization</span>
        <span>Stable State</span>
        <span>Peak Performance</span>
      </div>
    </div>
  );
};

const ProjectDetailView: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-900 hover:text-blue-600 font-bold transition-all group">
            <i className="fa-solid fa-chevron-left group-hover:-translate-x-1 transition-transform"></i> Back to Portfolio
          </button>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 hidden md:block">|</span>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-lg flex items-center gap-2">
              <i className="fa-brands fa-github"></i> GitHub Repo
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          
          {/* Main Content (2/3) */}
          <div className="lg:col-span-2 space-y-16">
            <header className="space-y-6">
              <div className="flex items-center gap-3">
                 <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest">{project.year}</span>
                 <span className="h-px w-12 bg-slate-300"></span>
                 <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Case Study</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">{project.title}</h1>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t, i) => <TechBadge key={i} label={t} />)}
              </div>
            </header>

            <section className="space-y-8 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                <span className="w-1 h-8 bg-blue-600 rounded-full"></span> Project Vision
              </h2>
              <p className="text-slate-600 leading-relaxed text-xl font-medium">{project.longDescription}</p>
            </section>

            <section className="space-y-10">
              <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                <span className="w-1 h-8 bg-blue-600 rounded-full"></span> Architecture & Logic
              </h2>
              <div className="grid gap-6">
                {project.technicalDetails.map((detail, idx) => {
                  const [title, desc] = detail.split(':');
                  return (
                    <div key={idx} className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <span className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center shrink-0 font-black text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">0{idx + 1}</span>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
                          <p className="text-slate-500 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="p-12 bg-slate-900 rounded-[3rem] text-white">
               <h2 className="text-2xl font-black mb-8 italic">Technical Challenges</h2>
               <div className="space-y-6 opacity-80">
                  <p className="leading-relaxed border-l-2 border-blue-500 pl-6">
                    One of the greatest challenges in this project was optimizing real-world performance, 
                    particularly managing critical latency and maintaining algorithmic precision in the face of noisy data.
                  </p>
                  <p className="leading-relaxed border-l-2 border-blue-500 pl-6">
                    We had to iterate through several architectures before finding the ideal compromise between inference speed and robustness.
                  </p>
               </div>
            </section>
          </div>

          {/* Sidebar / Stats (1/3) */}
          <div className="space-y-8 sticky top-32">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white rotate-1 group hover:rotate-0 transition-transform duration-500">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl space-y-10">
              <div className="space-y-6">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Performance KPIs</h3>
                <div className="grid grid-cols-2 gap-6">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.label}</p>
                      <p className="text-3xl font-black text-blue-600 tracking-tighter">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-8 border-t border-slate-100">
                <h4 className="text-xs font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span> Model Evolution
                </h4>
                <TechnicalGraph type={project.graphType} />
                <p className="mt-4 text-[10px] text-slate-400 leading-tight italic">
                  Visualization generated from production logs and validation benchmarks.
                </p>
              </div>

              <div className="pt-8">
                 <button onClick={() => window.open(project.githubUrl, '_blank')} className="w-full py-4 bg-slate-50 border-2 border-slate-900 rounded-2xl font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-3">
                   View Source Code <i className="fa-solid fa-code"></i>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer minimal */}
      <footer className="py-20 text-center border-t border-slate-200 bg-white">
         <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">© {new Date().getFullYear()} Ruben Fitoussi - Project Showcase</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (selectedProject) {
      setSelectedProject(null);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (selectedProject) {
    return (
      <>
        <ProjectDetailView project={selectedProject} onBack={() => setSelectedProject(null)} />
        <AIChatAssistant />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 glass-effect border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight text-slate-900 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            RUBEN<span className="text-blue-600">.</span>
          </span>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-blue-600 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">Contact</button>
          </div>

          <div className="flex items-center gap-4">
            <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="hidden sm:block bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
              Let's Talk
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-900 text-xl p-2">
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            <button onClick={() => scrollToSection('about')} className="text-left font-semibold text-slate-700">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-left font-semibold text-slate-700">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-left font-semibold text-slate-700">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-left font-semibold text-slate-700">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="about" className="py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-black tracking-widest uppercase border border-blue-100">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Technion Computer Engineer
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.8] tracking-tighter">
              Ruben <br />
              <span className="text-blue-600">Fitoussi</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 font-medium leading-tight">
              Head of AI & Data @ <span className="text-slate-900 underline decoration-blue-600 decoration-4 underline-offset-8">Subscribfy</span>.
            </p>
            <p className="text-slate-500 max-w-lg leading-relaxed text-xl">{RESUME_DATA.summary}</p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button onClick={() => scrollToSection('projects')} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-blue-200 group">
                Portfolio 2025 <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </button>
              <div className="flex gap-6 items-center">
                <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-slate-900 transition-colors text-4xl"><i className="fa-brands fa-github"></i></a>
                <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-slate-900 transition-colors text-4xl"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
             <div className="relative aspect-square md:aspect-[4/5] bg-slate-200 rounded-[4rem] overflow-hidden border-[16px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="Code Ruben" className="w-full h-full object-cover" />
                <div className="absolute bottom-10 left-10 text-white">
                   <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">Technion Alumnus</p>
                   <p className="text-3xl font-black tracking-tighter italic">Innovating AI Systems.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6 bg-slate-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center md:text-left">
            <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">Featured Work</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 tracking-tighter">Engineering Showcase</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {RESUME_DATA.projects.map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-[3.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col cursor-pointer"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md px-6 py-2 rounded-full text-xs font-black text-slate-900 shadow-xl">
                    {project.year}
                  </div>
                </div>
                <div className="p-12 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-black group-hover:text-blue-600 transition-colors leading-tight">{project.title}</h3>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
                    </div>
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-4 py-1.5 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest border border-slate-100 rounded-xl">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 text-center mb-24 tracking-tighter">Professional Journey</h2>
          <div className="space-y-24">
            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-16 border-l-4 border-slate-100 pb-12 group">
                <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-white border-4 border-slate-200 group-hover:border-blue-600 transition-colors ring-8 ring-white"></div>
                <div className="flex flex-wrap justify-between items-start gap-6 mb-8">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 leading-none mb-4">{exp.role}</h3>
                    <p className="text-blue-600 font-black text-xl italic">{exp.company}</p>
                  </div>
                  <span className="text-sm font-black text-slate-400 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 uppercase tracking-widest">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-4 mt-8">
                  {exp.description.map((item, iIdx) => (
                    <li key={iIdx} className="text-slate-600 text-lg leading-relaxed flex items-start gap-6">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
           <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">Let's build <br /> the <span className="text-blue-500">future.</span></h2>
           <div className="flex flex-wrap justify-center gap-8 mb-24">
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="px-10 py-6 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all text-center">
                 <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Write me</p>
                 <p className="text-2xl font-bold">{RESUME_DATA.contact.email}</p>
              </a>
              <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="px-10 py-6 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all text-center">
                 <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Connect</p>
                 <p className="text-2xl font-bold">LinkedIn Profile</p>
              </a>
           </div>
           <p className="text-slate-500 font-black uppercase tracking-[0.5em] text-[10px]">Designed & Engineered by Ruben Fitoussi</p>
        </div>
      </section>

      <AIChatAssistant />
    </div>
  );
};

export default App;
