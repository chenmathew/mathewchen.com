import React, { useState } from "react";

const projects = [
  {
    id: 0,
    title: "Album Library",
    desc: "Keeps track of what albums you listened to!",
    langs: "Made using HTML, CSS, and Javascript",
    link: "/projects/albumlibrary",
    demo: "/albumlibrary.gif",
  },
  {
    id: 1,
    title: "Video Compression Bot",
    desc: "This compresses videos to 8mb",
    langs: "Made using Python",
    link: "/projects/compressor",
    demo: "/compressor.gif",
  },
];

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
