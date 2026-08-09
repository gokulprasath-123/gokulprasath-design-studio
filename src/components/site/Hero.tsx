import { ArrowRight, Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { contact } from "@/data/site";
import { Reveal } from "./Reveal";

const socials = [
  { icon: Mail, href: `mailto:${contact.email}`, label: "Email Gokulprasath" },
  { icon: MessageCircle, href: contact.whatsapp, label: "Chat on WhatsApp" },
  { icon: Github, href: contact.github, label: "GitHub profile" },
  { icon: Instagram, href: contact.instagram, label: "Instagram profile" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="hero-gradient relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Sliim-style dot grid accent */}
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute top-24 left-4 h-40 w-32 opacity-30 sm:left-10"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-4xl">
          <p className="label-mono flex items-center gap-3 text-muted-foreground">
            <span className="inline-block size-1.5 rounded-full bg-primary" />
            Available for freelance projects
          </p>
          <h1 className="mt-7 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            Hi ! I&apos;m <span className="text-primary">Gokulprasath.</span>
            <span className="mt-3 block text-3xl text-muted-foreground italic sm:text-5xl lg:text-6xl">
              Freelance web designer.
            </span>
          </h1>
          <p className="mt-7 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            I design and build modern, responsive websites for small businesses — based in India,
            working worldwide.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="label-mono inline-flex items-center gap-2 bg-primary px-7 py-4 text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              View my work <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="label-mono inline-flex items-center gap-2 border border-border px-7 py-4 text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              Let&apos;s work together
            </a>
          </div>
        </Reveal>

        {/* Framer-style glossy 3D panel */}
        <Reveal delay={150} className="relative mt-16 sm:mt-20">
          <div className="glass-gradient relative overflow-hidden rounded-[2rem] border border-border p-1 shadow-[var(--shadow-cool)]">
            <div
              aria-hidden
              className="glow-line absolute top-1/3 left-0 h-px w-full opacity-80 blur-[1px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/4 h-56 w-[60%] rounded-full bg-accent/40 blur-3xl"
            />
            <div className="relative grid gap-px overflow-hidden rounded-[1.8rem] bg-background/40 backdrop-blur-xl sm:grid-cols-3">
              {[
                { k: "Mobile-first", v: "Every layout tested from 320px up" },
                { k: "Fast delivery", v: "Simple sites live in days, not months" },
                { k: "Clear pricing", v: "Fixed quotes with no surprises" },
              ].map((item, i) => (
                <div key={item.k} className="p-8 sm:p-10">
                  <span className="label-mono text-primary">0{i + 1}</span>
                  <p className="mt-4 font-display text-2xl tracking-tight">{item.k}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-mono text-muted-foreground">Let&apos;s work together</p>
            <a href={`mailto:${contact.email}`} className="mt-1 block font-mono text-sm text-primary">
              {contact.email}
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="block font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {contact.phone}
            </a>
          </div>
          <ul className="flex gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}