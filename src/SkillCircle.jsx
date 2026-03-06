import { useEffect, useState } from "react";

export default function SkillCircle({ name, value }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev < value) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 20);
  }, [value]);

  return (
    <div className="professional-card">
      <div
        className="circle"
        style={{
          background: `conic-gradient(
      #f70178 ${percent * 3.6}deg,
      #a0089c ${percent * 3.6}deg,
      #630db2ff 360deg`,
        }}
      >
        <div className="inner">{percent}%</div>
      </div>
      <h3>{name}</h3>
    </div>
  );
}
