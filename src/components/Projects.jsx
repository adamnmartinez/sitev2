import kioptrix_1_wu from "../assets/documents/kioptrix_1_wu.pdf"

export default function Projects() {
  function ProjectItem({ name, desc, tags = [], repo, live, doc }) {
    return (
      <li className="projectListElement">
        <div className="projectDetails">
          <header>{name}</header>
          <span className="projectLinks">
            {repo ? <a href={repo} target="_blank">Github</a> : ""} {repo && live ? " | " : ""}
            {live ? <a href={live} target="_blank">Live</a> : ""} {live && doc ? " | " : ""}
            {doc ? <a href={doc} target="_blank">Writeup</a> : ""}
          </span>
          <p>{desc}</p>
        </div>
        <TagList tags={tags}/>
      </li>
    );
  }

  function TagList({tags}) {
    let tagsUL = [];
    for (let i = 0; i < tags.length; i++){
      tagsUL.push(<li className="tagBubble">{tags[i]}</li>)
    }
    return (
      <ul className="tagList">
        {tagsUL}
      </ul>
    )
  }

  function ProjectList() {
    return (
      <ul className="projectList">
        <ProjectItem
          name="Heart of the Gulf"
          desc="A mock restaurant website I built using React. The site has a contact form for customer inquiries and a takeout shopping cart that clients can place orders through."
          tags={["UI/UX", "Frontend", "JavaScript", "Web Development", "ReactJS"]}
          repo="https://github.com/adamnmartinez/heartofthegulfv2"
          live="https://heartofthegulf.netlify.app/"
        />
        <ProjectItem
          name="Compendium"
          desc="A feature-rich note-taking app for books and novels. Take comprehensive, organized notes for essays, writing projects, personal study and more. Designed for readers, writers and students."
          tags={["JavaScript", "TypeScript", "ReactJS", "Web Development", "Full Stack", "NodeJS", "API"]}
          repo="https://github.com/adamnmartinez/compendium"
          live="https://compendiumapp.netlify.app/"
        />
        <ProjectItem
          name="Guitarism"
          desc="A powerful tool for writing, editing, and sharing guitar tablature. The app is equipped with an immersive notation builder designed to unlock user creativity. Built with React and Firebase, written in Typescript."
          tags={["JavaScript", "TypeScript", "ReactJS", "Web Development", "Full Stack", "NodeJS", "API"]}
          repo="https://github.com/adamnmartinez/guitarism"
          live="https://guitarism.netlify.app/"
        />
        <ProjectItem
          name="Asteroids"
          desc="A shower of asteroids is on a collision path with earth, and there's only one pilot who can stop it from destroying everything. How long can you hold out? Asteroids is a 2D pixel-graphics arcade game made in Unity, written in C#."
          tags={["Unity", "Game Development", "C#"]}
          repo="https://github.com/adamnmartinez/AsteroidGame"
        />
        <ProjectItem
          name="Escape the Rift"
          desc="Escape the Rift is a gravity-bending platformer game built in Unity. This solo project was completed in under 96 hours for the Macro Jam #2 Game Jam hosted by benZamg."
          tags={["Unity", "Game Development", "C#", "Game Jam"]}
          repo="https://github.com/adamnmartinez/DistortionGame"
          live="https://kaymati.itch.io/escape-the-rift"
        />
        <ProjectItem
          name="SecureAPI"
          desc="A secure backend web authentication API built with NodeJS, designed to be resilient against misuse and common cyberattacks."
          tags={["NodeJS", "Backend", "API", "Cybersecurity"]}
          repo="https://github.com/adamnmartinez/SecureAPI"
        />
        <ProjectItem
          name="Exploitation Analysis: Kioptrix #1"
          desc="Hacking a compromised virtual machine by exploiting vulnerable services."
          tags={["Red Teaming", "Exploitation", "Writeup", "Cybersecurity"]}
          doc={kioptrix_1_wu}
        />
      </ul>
    );
  }

  return (
    <div id="projects">
      <header>What I've been working on</header>
      <hr />
      <ProjectList />
    </div>
  );
}
