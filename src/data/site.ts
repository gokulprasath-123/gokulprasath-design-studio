import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4-newleaf-clinic.svg";

/** Contact details — edit these in one place. */
export const contact = {
  email: "gokulprasath617@gmail.com",
  phone: "+91 6379310429",
  whatsapp: "https://wa.me/916379310429",
  github: "https://github.com/gokulprasath-123",
  githubHandle: "gokulprasath-123",
  instagram: "https://instagram.com/web____design___",
  instagramHandle: "web____design___",
};

/**
 * Projects list. To add a real project: copy one object, change the text,
 * drop your image in src/assets and import it above.
 *
 * liveUrl + githubUrl are optional — when both are set, the card shows
 * separate "Live Demo" and "View Code" buttons instead of the single
 * "View Live" link.
 */
export const projects = [
  {
    name: "Business Landing Page",
    description:
      "A clean one-page site for a local business with clear pricing and an enquiry section.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: project1,
    link: "#contact",
  },
  {
    name: "Responsive Store Front",
    description:
      "Mobile-first product showcase that adapts smoothly from phone to desktop widths.",
    tech: ["HTML", "CSS", "Responsive Design"],
    image: project2,
    link: "#contact",
  },
  {
    name: "UI/UX Concept Layout",
    description:
      "A layout study exploring spacing, type scale and component states before build.",
    tech: ["UI/UX", "Figma", "CSS"],
    image: project3,
    link: "#contact",
  },
  {
    name: "NewLeaf Clinic — Regenerative Medicine",
    description:
      "An immersive, 3D-animated website for a regenerative and integrative medicine clinic, with smooth Lenis-powered scrolling, interactive Three.js visuals and a clean, premium clinical UI.",
    tech: ["React", "Three.js", "Tailwind CSS"],
    image: project4,
    link: "https://newleafclinic.vercel.app/",
    liveUrl: "https://newleafclinic.vercel.app/",
    githubUrl: "https://github.com/gokulprasath-123/clinic-web-",
  },
];

export const services = [
  {
    title: "Business Website Design",
    description: "Modern, trust-building websites that present your business clearly.",
  },
  {
    title: "Responsive Web Design",
    description: "Layouts that look right on mobile, tablet and desktop screens.",
  },
  {
    title: "UI/UX Design",
    description: "Simple structure, readable type and interfaces people understand fast.",
  },
  {
    title: "Website Deployment",
    description: "Getting your site live on a fast host with a domain connected.",
  },
  {
    title: "Basic SEO",
    description: "Titles, meta descriptions, headings and alt text set up properly.",
  },
  {
    title: "WhatsApp & Maps Integration",
    description: "One-tap chat buttons and an embedded map so customers can reach you.",
  },
];

export const skills = [
  { name: "HTML", level: 92 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "Java (Basics)", level: 55 },
  { name: "Git & GitHub", level: 78 },
  { name: "UI/UX Basics", level: 75 },
  { name: "AI Tools", level: 88 },
];
