import SkillCircle from "./SkillCircle";

export default function SkillsSection() {
  const professional = [
    { name: "Team Work", value: 90, color: "#ff5722" },
    { name: "Creativity", value: 85, color: "#2196f3" },
    { name: "Project Management", value: 85, color: "#f7df1e" },
    { name: "Adaptability", value: 80, color: "#61dafb" },
  ];

  return (
    <section className="professional-section">
      <div className="professional-grid">
        {professional.map((skill, index) => (
          <SkillCircle
            key={index}
            name={skill.name}
            value={skill.value}
            color={skill.color}
          />
        ))}
      </div>
    </section>
  );
}
