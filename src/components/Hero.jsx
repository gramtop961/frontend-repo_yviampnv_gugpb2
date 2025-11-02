import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Send } from 'lucide-react';

const Hero = ({ onExplore, onHire }) => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-6 py-16 md:flex-row md:py-24">
        <div className="z-10 w-full md:w-1/2">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
            <div>
              <p className="text-sm font-semibold tracking-wide">Vyartisk</p>
              <p className="text-xs text-white/70">Where Code Meets Creativity</p>
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hi, I’m Divyanshu
          </h1>
          <p className="mb-8 max-w-prose text-lg text-white/80">
            Frontend Developer at GreenSage AI — crafting seamless web experiences and immersive art.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 shadow-sm ring-1 ring-white/10 transition hover:shadow-lg"
            >
              Explore My Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={onHire}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Hire Me
              <Send className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-white/70 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">React • Vite • Tailwind</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">Node.js • MongoDB</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">Blender • Design • Art</div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 md:h-[70vh] lg:h-[80vh] h-[40vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-fuchsia-500/10" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent" />
    </section>
  );
};

export default Hero;
