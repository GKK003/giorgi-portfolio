import { useScrollReveal } from "../hooks/useScrollReveal";

const skills = [
  { name: "HTML", icon: "</>" },
  { name: "CSS", icon: "{ }" },
  { name: "JavaScript", icon: "( )" },
  { name: "React", icon: "<R/>" },
  { name: "Git", icon: "~/>" },
  { name: "Responsive", icon: "[ ]" },
  { name: "REST APIs", icon: "=>" },
  { name: "Problem Solving", icon: "?!" },
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills">
      <div className={`reveal${isVisible ? " visible" : ""}`} ref={ref}>
        <div className="section-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
