import React, { useRef, useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const nameRef = useRef(null);
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — I will get back to you shortly!');
    if (nameRef.current) nameRef.current.blur();
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-transparent to-indigo-500/10" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let’s work together</h2>
          <p className="mt-2 text-white/70">Reach out for collaborations, freelance work, or speaking gigs.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm text-white/80">Name</label>
              <input ref={nameRef} type="text" required className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm text-white/80">Email</label>
              <input type="email" required className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-white/80">Message</label>
              <textarea required rows={5} className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Tell me about your project..." />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-4">
              <div className="text-sm text-white/70">
                <a className="inline-flex items-center gap-2 underline-offset-2 hover:underline" href="mailto:hello@vyartisk.com">
                  <Mail className="h-4 w-4" /> hello@vyartisk.com
                </a>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:brightness-110">
                Send Message <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
          {status && (
            <div className="mt-4 rounded-lg border border-white/10 bg-white/10 p-3 text-sm text-white/90">
              {status}
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Vyartisk — Where Code Meets Creativity
        </div>
      </div>
    </section>
  );
};

export default Contact;
