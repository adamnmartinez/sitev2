import { useState } from "react";
import hotg from "../assets/images/hotgss.png";
import compendium from "../assets/images/compendiumss.png";

export default function Projects() {
  function ProjectItem({ name, desc, img, tags = [], repo, live }) {
    return (
      <li className="projectListElement">
        <div className="projectDetails">
          <header>{name}</header>
          <span className="projectLinks">
            <a href={repo} target="_blank">
              GitHub
            </a>{" "}
            |{" "}
            <a href={live} target="_blank">
              Live
            </a>
          </span>
          <p>{desc}</p>
        </div>
        <a href={live} target="_blank">
          <img className="projectScreenshot" src={img}></img>
        </a>
      </li>
    );
  }

  function ProjectList() {
    return (
      <ul className="projectList">
        <ProjectItem
          name="Heart of the Gulf"
          desc="A mock restaurant website I built using React. The site has a contact form for customer inquiries and a takeout shopping cart that clients can place orders through."
          img={hotg}
          repo="https://github.com/adamnmartinez/heartofthegulfv2"
          live="https://heartofthegulf.netlify.app/"
        />
        <ProjectItem
          name="Compendium"
          desc="A feature-rich note-taking app for books and novels. Take comprehensive, organized notes for essays, writing projects, personal study and more. Designed for readers, writers and students."
          img={compendium}
          repo="https://github.com/adamnmartinez/compendium"
          live="https://compendiumapp.netlify.app/"
        />
      </ul>
    );
  }

  return (
    <div id="projects">
      <header>Here are some projects I've been developing.</header>
      <hr />
      <ProjectList />
    </div>
  );
}
