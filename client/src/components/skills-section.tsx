import { useEffect, useRef } from "react";
import { Palette, Server, Settings } from "lucide-react";

export function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 70 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              if (width) {
                (bar as HTMLElement).style.width = width;
              }
            });
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6" ref={skillsRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card p-8 rounded-3xl">
              <div className="text-center mb-6">
                <category.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2 bg-muted rounded-full">
                      <div
                        className="skill-progress w-0 h-full rounded-full"
                        data-width={`${skill.level}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
