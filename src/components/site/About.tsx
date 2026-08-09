import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <Reveal>
          <p className="label-mono text-primary">About me</p>
          <h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">
            Design that helps small businesses look established online.
          </h2>
        </Reveal>
        <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm Gokulprasath, a freelance web designer focused on clean, modern websites for
            small businesses and personal brands. I handle the whole process — structure,
            layout, visuals and getting the site live.
          </p>
          <p>
            My work covers web design and responsive websites built with HTML, CSS and
            JavaScript, along with UI/UX basics like readable typography, sensible spacing and
            clear navigation. I also use AI-assisted development to move faster without cutting
            quality, so you get a polished result in less time.
          </p>
          <p>
            If you need a website that loads fast, reads well on a phone and makes it easy for
            customers to contact you, that's exactly what I do.
          </p>
        </Reveal>
      </div>
    </section>
  );
}