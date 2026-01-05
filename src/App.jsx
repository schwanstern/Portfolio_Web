import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EasterEgg from './components/EasterEgg';
import data from './data.json';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <div className="bg-slate-950 min-h-screen"></div>;

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-emerald-500/30">
      <Hero profile={data.profile} />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      {/* <EasterEgg /> */}

      <footer className="py-8 text-center text-slate-600 font-mono text-sm border-t border-slate-900 mt-20">
        <p>SYSTEM_SHUTDOWN_SEQUENCE_INITIATED</p>
        <p className="mt-2 text-xs opacity-50">© {new Date().getFullYear()} {data.profile.name}</p>
      </footer>
    </div>
  );
}

export default App;
