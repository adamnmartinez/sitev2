import { useState } from "react";
import cssicon from "../assets/icons/css.svg";
import htmlicon from "../assets/icons/html.svg";
import javaicon from "../assets/icons/java.svg";
import jsicon from "../assets/icons/javascript.svg";
import nodeicon from "../assets/icons/nodejs.svg";
import reacticon from "../assets/icons/react.svg";
import npmicon from "../assets/icons/npm.svg";
import webpackicon from "../assets/icons/webpack.svg";
import pythonicon from "../assets/icons/python.svg";

export default function Skills() {
  const [hover, setHover] = useState("");

  function SkillIcon({ icon, name, last = false }) {
    const imgclass = last ? "icon last" : "icon";
    return (
      <li onMouseEnter={() => setHover(name)} onMouseLeave={() => setHover("")}>
        <img className={imgclass} src={icon}></img>
      </li>
    );
  }

  function SkillList() {
    return (
      <ul className="iconList">
        <SkillIcon icon={javaicon} name="Java" />
        <SkillIcon icon={pythonicon} name="Python" />
        <SkillIcon icon={jsicon} name="JavaScript" />
        <SkillIcon icon={nodeicon} name="NodeJS" />
        <SkillIcon icon={reacticon} name="ReactJS" />
        <SkillIcon icon={htmlicon} name="HTML" />
        <SkillIcon icon={cssicon} name="CSS" />
        <SkillIcon icon={webpackicon} name="Webpack" />
        <SkillIcon icon={npmicon} name="npm" last={true} />
      </ul>
    );
  }

  return (
    <div id="skills">
      <h1>Here are some of the technologies I've been working with.</h1>
      <hr />
      <SkillList />
      <br />
      <p className="hoverText">{hover}</p>
    </div>
  );
}
