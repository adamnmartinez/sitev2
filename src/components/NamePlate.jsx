import { useState } from "react";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import pageicon from "../assets/icons/page.png";
import resume from "../assets/documents/Resume.pdf";

export default function NamePlate() {
  //State for link hover
  const [hover, setHover] = useState("");

  function LinkBubble({ link, icon, name, last = false }) {
    const imgclass = last ? "icon last" : "icon";
    return (
      <a
        href={link}
        target="_blank"
        // onMouseEnter={() => setHover(name)}
        // onMouseLeave={() => setHover("")}
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
      <div className="namePlateHead">
        <h1>Hello! My name is</h1>
        <header>
          <span className="highlight">Adam Martinez</span>
        </header>
        I'm a full time student pursuing an M.S. in Computer Science at the University of California, Santa Cruz. I work as an assistant researcher in the AIEA Lab at UCSC, where we study transparent, explainable AI in the context of autonomous vehicle control. 
        <br /><br /> Currently, my work is in the development of sensible control systems and graph search algorithms for AVs in urban environments. 
        <br/><br/> In my free time I build things I think would be cool. 
      </div>
      <div className="namePlateBody">
        adammartinezdev@gmail.com <br />
        (310) 383-0682
        
        <Links />
        {/* <br /> */}
        <p className="hoverText">{hover}</p>
      </div>
    </div>
  );
}
