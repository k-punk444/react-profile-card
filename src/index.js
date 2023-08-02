import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skill = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#FFAA2E",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#FFFA2E",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#149ECA",
  },
  {
    skill: "Ruby",
    level: "beginner",
    color: " #9B1C16",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#6A00F5",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./230802.jpg" alt="avatar" className="avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Zhengkai Wang</h1>
      <p>
        Now I'm Learning full-stack web development. When not coding, I like to
        reading books, or play RPG games, or photographing.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skill.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skills" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
