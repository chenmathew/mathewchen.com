import React from "react";
import { projects } from "./projectdata/projects";

function ProjectItem(props: any) {
  return (
    <div className="mb-10 p-2 border-t border-b">
      <div>
        <a href={props.link}>
          <p>{props.title}</p>
          <p>{props.desc}</p>
          <p>{props.langs}</p>
        </a>
      </div>
    </div>
  );
}

function Projs() {
  const projs = projects.map(({ id, title, desc, langs, link, demo }) => (
    <ProjectItem
      key={id}
      title={title}
      desc={desc}
      langs={langs}
      link={link}
      demo={demo}
    />
  ));

  return <div className="p-2">{projs}</div>;
}

export default Projs;
