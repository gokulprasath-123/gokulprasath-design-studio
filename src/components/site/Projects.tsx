import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-sm tracking-[0.2em] text-primary uppercase">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Selected work</h2>
        <p className="mt-4 text-muted-foreground">
          Placeholder previews for now — real client projects go here as they launch.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <article className="card-3d group flex h-full flex-col overflow-hidden">
              <img
                src={p.image}
                alt={`Preview of the ${p.name} web design project`}
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {p.liveUrl && p.githubUrl ? (
                  <div className="mt-6 flex flex-wrap items-center gap-5">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-0.5"
                    >
                      Live Demo <ExternalLink className="size-4" />
                    </a>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-transform hover:translate-x-0.5 hover:text-primary"
                    >
                      View Code <Github className="size-4" />
                    </a>
                  </div>
                ) : (
                  <a
                    href={p.link}
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-transform hover:translate-x-0.5"
                  >
                    View Live <ExternalLink className="size-4" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
