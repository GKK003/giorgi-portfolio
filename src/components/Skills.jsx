export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Responsive Design",
    "REST APIs",
    "Problem Solving",
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
