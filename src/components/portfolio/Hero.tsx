import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const Hero = () => (
  <section className="pb-12 pt-20 sm:pt-28">
    <p className="text-sm font-medium uppercase tracking-widest text-primary">
      {profile.title}
    </p>
    <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
      {profile.name}
    </h1>
    <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
      {profile.intro}
    </p>

    {/* Stat highlights */}
    <div className="mt-8 flex gap-8">
      {profile.highlights.map((h) => (
        <div key={h.label}>
          <p className="font-heading text-2xl font-semibold text-foreground">{h.value}</p>
          <p className="text-xs text-muted-foreground">{h.label}</p>
        </div>
      ))}
    </div>

    {/* Links */}
    <div className="mt-8 flex gap-3">
      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 rounded-md border px-3.5 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Github size={15} /> GitHub <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 rounded-md border px-3.5 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    </div>
  </section>
);

export default Hero;
