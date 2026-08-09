import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { contact } from "@/data/site";

export function Footer() {
  const socials = [
    { icon: Mail, href: `mailto:${contact.email}`, label: "Email Gokulprasath" },
    { icon: MessageCircle, href: contact.whatsapp, label: "Chat on WhatsApp" },
    { icon: Github, href: contact.github, label: "GitHub profile" },
    { icon: Instagram, href: contact.instagram, label: "Instagram profile" },
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-[1fr_auto] sm:items-center sm:px-8">
        <div className="min-w-0">
          <p className="font-display text-2xl tracking-tight">
            Gokul<span className="text-primary">prasath.</span>
          </p>
          <p className="label-mono mt-2 text-muted-foreground">Freelance web designer</p>
        </div>
        <ul className="flex gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <s.icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gokulprasath. All rights reserved.
      </p>
    </footer>
  );
}