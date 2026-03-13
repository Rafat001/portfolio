import { experiences } from "@/data/portfolio";

/** Renders markdown-style **bold** as <strong> with primary color */
const renderBullet = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const Experience = () => (
  <section className="py-16">
    <p className="text-sm font-medium uppercase tracking-widest text-primary">
      Where I've Worked
    </p>
    <h2 className="mt-2 font-heading text-2xl font-semibold">Experience</h2>

    <div className="mt-8 space-y-6">
      {experiences.map((exp, idx) => (
        <div
          key={exp.company}
          className="group relative rounded-lg border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
        >
          {/* Active indicator for current role */}
          {idx === 0 && (
            <span className="absolute -top-2.5 right-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-medium text-primary-foreground">
              Current
            </span>
          )}

          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
            <div>
              <h3 className="font-heading text-lg font-semibold">{exp.role}</h3>
              <p className="text-sm text-primary">{exp.company}</p>
            </div>
            <span className="shrink-0 text-sm text-muted-foreground">{exp.period}</span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
            {exp.summary}
          </p>

          <ul className="mt-4 space-y-2.5">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span>{renderBullet(b)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {exp.techStack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
