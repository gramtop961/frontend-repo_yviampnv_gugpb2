import React, { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    // Focus the first field after a brief delay to ensure into view
    setTimeout(() => {
      const input = el?.querySelector('input');
      input?.focus();
    }, 500);
  };

  return (
    <div className="font-inter antialiased">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-b-2xl border border-slate-200/60 bg-white/80 px-6 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
          <div>
            <div className="text-sm font-bold tracking-wide text-slate-900">Vyartisk</div>
            <div className="text-xs text-slate-500">Where Code Meets Creativity</div>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-slate-900">Home</button>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#portfolio" className="hover:text-slate-900">Work</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <button onClick={openContact} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">Hire Me</button>
      </header>

      <main className="mt-20">
        <Hero onExplore={scrollToPortfolio} onHire={openContact} />
        <About />
        <Projects ref={portfolioRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  );
}

export default App;
