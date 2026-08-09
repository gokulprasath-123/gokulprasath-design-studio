import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { contact } from "@/data/site";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.phone,
    href: contact.whatsapp,
  },
  {
    icon: Github,
    label: "GitHub",
    value: contact.githubHandle,
    href: contact.github,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: contact.instagramHandle,
    href: contact.instagram,
  },
];

export function Contact() {
  return (
    <section id="contact" className="hero-gradient scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-primary uppercase">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Let's build your website together
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell me about your business and what you need. I usually reply the same day.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="card-3d flex items-center gap-4 p-6"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <item.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                    {item.label}
                  </span>
                  <span className="block truncate font-medium">{item.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}