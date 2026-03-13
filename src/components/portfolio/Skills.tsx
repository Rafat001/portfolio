import { topSkills, additionalSkills } from "@/data/portfolio";

const Skills = () => (
  <section className="py-16">
    <p className="text-sm font-medium uppercase tracking-widest text-primary">
      What I Work With
    </p>
    <h2 className="mt-2 font-heading text-2xl font-semibold">Tech Stack</h2>

    {/* Primary skills — logo grid */}
    <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
      {topSkills.map((skill) => (
        <div
          key={skill.name}
          className="group flex flex-col items-center gap-2.5 rounded-lg border bg-card p-4 transition-all hover:border-primary/40 hover:-translate-y-0.5"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="h-9 w-9 opacity-75 transition-opacity group-hover:opacity-100 dark:invert"
            loading="lazy"
          />
          <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            {skill.name}
          </span>
        </div>
      ))}
    </div>

    {/* Additional skills — flowing tags */}
    <div className="mt-6 flex flex-wrap gap-2">
      {additionalSkills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
