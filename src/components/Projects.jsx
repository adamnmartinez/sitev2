import { useState } from "react";
import hotg from "../assets/images/hotgss.png";
import compendium from "../assets/images/compendiumss.png";
import etrss from "../assets/images/etrss.png"
import guitarism from "../assets/images/guitarism.png"
import asteroids from "../assets/images/asteroids_screenshot.png"

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
          {/* <img className="projectScreenshot" src={img}></img> */}
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
        <ProjectItem
          name="Guitarism"
          desc="A powerful tool for writing, editing, and sharing guitar tablature. The app is equipped with an immersive notation builder designed to unlock user creativity. Built with React and Firebase, written in Typescript."
          img={guitarism}
          repo="https://github.com/adamnmartinez/guitarism"
          live="https://guitarism.netlify.app/"
        />
        <ProjectItem
          name="Asteroids"
          desc="A shower of asteroids is on a collision path with earth, and there's only one pilot who can stop it from destroying everything. How long can you hold out? Asteroids is a 2D pixel-graphics arcade game made in Unity, written in C#."
          img={asteroids}
          repo="https://github.com/adamnmartinez/AsteroidGame"
          live="https://github.com/adamnmartinez/AsteroidGame"
        />
        <ProjectItem
          name="Escape the Rift"
          desc="Escape the Rift is a gravity-bending platformer game built in Unity. This solo project was completed in under 96 hours for the Macro Jam #2 Game Jam hosted by benZamg."
          img={etrss}
          repo="https://github.com/adamnmartinez/DistortionGame"
          live="https://kaymati.itch.io/escape-the-rift"
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
