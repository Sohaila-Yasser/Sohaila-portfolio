import React from "react";
import { useInView } from "react-intersection-observer";
import "./skills.css";

const SkillProgressBar = ({ skill, level, isVisible }) => {
  return (
    <div className={`skill-progress-bar ${isVisible ? "visible" : ""}`}>
      <div className="skill-name">{skill}</div>
      <div className="level">{level}%</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="skills">
      <h2 className="skill-title">My Skills</h2>
      <SkillProgressBar skill="Html" level={80} isVisible={inView} />
      <SkillProgressBar skill="Css" level={75} isVisible={inView} />
      <SkillProgressBar skill="Java Script" level={90} isVisible={inView} />
      <SkillProgressBar skill="React js" level={90} isVisible={inView} />
      <SkillProgressBar skill="Bootstrap" level={90} isVisible={inView} />
    </div>
  );
};