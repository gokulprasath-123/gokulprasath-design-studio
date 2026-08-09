import { services } from "@/data/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-y border-border bg-secondary/25 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-mono text-primary">Services</p>
          <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
            What I can build for you
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="card-3d h-full p-7">
                <span className="label-mono text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}