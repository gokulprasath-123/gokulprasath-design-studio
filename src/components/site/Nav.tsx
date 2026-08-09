import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled && !open
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <a href="#top" className="min-w-0 font-display text-2xl tracking-tight">
            Gokul<span className="text-primary">prasath.</span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label-mono text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="overlay-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-card/70 text-foreground backdrop-blur transition-colors hover:border-primary/60 hover:text-primary"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <div
        id="overlay-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="hero-gradient absolute inset-0 bg-background/95 backdrop-blur-2xl" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 sm:px-8">
          <nav aria-label="Overlay navigation">
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{ transitionDelay: `${open ? 120 + i * 60 : 0}ms` }}
                    className={`group flex items-baseline gap-4 py-2 font-display text-4xl tracking-tight transition-all duration-500 sm:text-6xl ${
                      open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <span className="label-mono text-primary/70">
                      0{i + 1}
                    </span>
                    <span className="transition-colors group-hover:text-primary">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-12 space-y-1">
            <p className="label-mono text-muted-foreground">Let&apos;s work together</p>
            <a href={`mailto:${contact.email}`} className="block font-mono text-sm text-primary">
              {contact.email}
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="block font-mono text-sm text-muted-foreground">
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}