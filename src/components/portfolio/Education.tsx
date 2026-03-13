import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

const Education = () => (
  <section className="py-16">
    <p className="text-sm font-medium uppercase tracking-widest text-primary">
      Background
    </p>
    <h2 className="mt-2 font-heading text-2xl font-semibold">Education</h2>
    <div className="mt-6 space-y-4">
      {education.map((edu) => (
        <div
          key={edu.institution}
          className="flex items-start gap-4 rounded-lg border bg-card p-5"
        >
          <div className="rounded-md bg-secondary p-2.5">
            <GraduationCap size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold">{edu.degree}</h3>
            <p className="text-sm text-muted-foreground">{edu.institution}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{edu.period}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
