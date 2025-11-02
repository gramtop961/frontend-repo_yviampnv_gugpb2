import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-50 py-20 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-2 text-slate-600">My journey, vision, and the meaning behind Vyartisk</p>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[280px,1fr]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 p-1 shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/90">
                <User className="h-16 w-16 text-slate-600" />
              </div>
            </div>
            <p className="text-center text-sm text-slate-500">Illustrated-style avatar placeholder</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              I’m Divyanshu, a Frontend Developer at GreenSage AI. I build fast, accessible, and visually rich interfaces — and I bring the same love for craft to my creative work across design and 3D.
            </p>
            <p className="leading-relaxed text-slate-700">
              Vyartisk blends two worlds: <span className="font-semibold">Vy-</span> for velocity and vision, and <span className="font-semibold">-artisk</span> for the artistic spirit. It’s where code meets creativity.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">Development</h3>
                <ul className="flex flex-wrap gap-2 text-sm text-slate-600">
                  {[
                    'React','Vite','Zustand','Node.js','Express','MongoDB','DaisyUI','PyQt','Docker',
                  ].map((item) => (
                    <li key={item} className="rounded-full bg-slate-100 px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">Creative</h3>
                <ul className="flex flex-wrap gap-2 text-sm text-slate-600">
                  {[
                    'Graphic Design','Animation','Blender 3D','Illustration','Sketching',
                  ].map((item) => (
                    <li key={item} className="rounded-full bg-slate-100 px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
