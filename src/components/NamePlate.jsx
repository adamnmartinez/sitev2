import { useState } from "react";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import pageicon from "../assets/icons/page.png";
import resume from "../assets/Resume.pdf";

export default function NamePlate() {
  //State for link hover
  const [hover, setHover] = useState("");

  function LinkBubble({ link, icon, name, last = false }) {
    const imgclass = last ? "icon last" : "icon";
    return (
      <a
        href={link}
        target="_blank"
        onMouseEnter={() => setHover(name)}
        onMouseLeave={() => setHover("")}
      >
        <img className={imgclass} src={icon}></img>
      </a>
    );
  }

  function Links() {
    return (
      <ul className="iconList">
        <li>
          <LinkBubble
            link={"https://github.com/adamnmartinez"}
            icon={github}
            name="GitHub"
          />
        </li>
        <li>
          <LinkBubble
            link={"https://www.linkedin.com/in/adam-martinez-2762b3286/"}
            icon={linkedin}
            name="LinkedIn"
          />
        </li>
        <li>
          <LinkBubble link={resume} icon={pageicon} name="Resume" last={true} />
        </li>
      </ul>
    );
  }

  return (
    <div id="namePlate">
      <h1>Welcome! My name is</h1>
      <header>
        <span className="highlight">Adam Martinez</span>.
      </header>
      <h1>
        I'm a <span className="highlight">web developer</span>.
      </h1>
      <hr />
      <p>
        I design and develop experiences on the ever-changing medium of the web.
      </p>
      <Links />
      <br />
      <p className="hoverText">{hover}</p>
    </div>
  );
}