import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    title: ".NET Developer",
    institution: "IT-Högskolan",
    period: "2024 - Present",
    type: "degree",
    current: true,
  },
  {
    title: "Cybersecurity - Fundamentals",
    institution: "Linköping University",
    period: "2025",
    type: "certificate",
    current: false,
  },
  {
    title: "AI Fundamentals",
    institution: "Linköping University",
    period: "2025",
    type: "certificate",
    current: false,
  },
  {
    title: "Team-Leader (Union Representative)",
    institution: "Byggnads",
    period: "2022",
    type: "certificate",
    current: false,
  },
  {
    title: "Supervisor Training",
    institution: "Byggnads",
    period: "2022",
    type: "certificate",
    current: false,
  },
  {
    title: "Carpentry Vocational Education",
    institution: "Dragonskolan",
    period: "2017 - 2020",
    type: "degree",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-14 relative">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary/85 dark:text-foreground">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu) => (
            <div
              key={edu.title}
              className="p-6 rounded-xl border bg-primary/15 border-primary/30 hover:border-primary hover:bg-primary/25 transition-all duration-300 glow-effect group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {edu.type === "degree" ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : (
                    <Award className="w-5 h-5" />
                  )}
                </div>
                {edu.current && (
                  <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                {edu.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {edu.institution}
              </p>
              <p className="text-primary font-mono text-xs">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
