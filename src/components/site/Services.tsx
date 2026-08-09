import { services } from "@/data/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-y border-border bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-primary uppercase">Services</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">What I can build for you</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="card-3d h-full p-7">
                <span className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
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