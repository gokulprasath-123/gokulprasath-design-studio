import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="hero-gradient relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs tracking-wide text-muted-foreground uppercase">
            <Sparkles className="size-3.5 text-primary" />
            Available for freelance projects
          </p>
          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            Gokulprasath
            <span className="text-gradient block">Freelance Web Designer</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I build modern, responsive websites for businesses.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              View My Work <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              Let's Work Together
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Mobile-first", v: "Every layout tested from 320px up" },
            { k: "Fast delivery", v: "Simple sites live in days, not months" },
            { k: "Clear pricing", v: "Fixed quotes with no surprises" },
          ].map((item) => (
            <div key={item.k} className="card-3d p-6">
              <p className="font-display text-base font-semibold">{item.k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.v}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}