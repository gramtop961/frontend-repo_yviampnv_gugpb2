import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Dashboard UI',
    role: 'Lead Frontend',
    tags: ['React', 'Tailwind', 'Zustand'],
    desc: 'Modular, accessible components powering complex data views with buttery-smooth interactions.',
    live: '#',
    code: '#',
    image: 'https://images.unsplash.com/photo-1690743300330-d190ad8f97dc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwV2ViJTIwQXBwJTIwJTI4TUVSTiUyOXxlbnwwfDB8fHwxNzYyMTE1ODI3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'SaaS Web App (MERN)',
    role: 'Full-stack',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    desc: 'Account management, billing, and analytics with robust auth and delightful UX.',
    live: '#',
    code: '#',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AI Content Microservice',
    role: 'Integration',
    tags: ['Python', 'FastAPI', 'Docker'],
    desc: 'Microservice pipeline for data-driven content with scalable containerized deployment.',
    live: '#',
    code: '#',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="portfolio" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-2 text-slate-600">Selected work across web apps, UI components, and AI integrations</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:shadow-md">
              <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="mb-1 text-xs font-medium text-indigo-600">{p.role}</div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mb-4 text-sm text-slate-600">{p.desc}</p>
                <ul className="mb-4 flex flex-wrap gap-2 text-xs text-slate-600">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">{t}</li>
                  ))}
                </ul>
                <div className="flex items-center gap-3">
                  <a href={p.live} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                  <a href={p.code} className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Creative Works Gallery */}
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-bold text-slate-900">Creative Works Gallery</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
            ].map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl">
                <img src={src} alt="Creative work" className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
