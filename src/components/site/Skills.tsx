import { skills } from "@/data/site";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-border bg-secondary/25 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-mono text-primary">Skills</p>
          <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
            Tools I work with
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 60} as="li">
              <div className="card-3d p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-xl tracking-tight">{s.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                </div>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary shadow-[var(--shadow-glow)]"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}