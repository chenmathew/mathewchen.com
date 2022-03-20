import React from "react";

interface aboutProps {}

const About: React.FC<aboutProps> = ({}) => {
  return (
    <div>
      <h1 className="font-light text-xl">About me</h1>
      <p className="indent-4 font-extralight">
        I&apos;m Mathew Chen, a computer science student graduating in 2023 and
        a developer. Interested in fullstack web development, but I am open for
        any software development opportunity as I am still exploring.
      </p>
      <hr></hr>

      <h1 className="font-light text-xl">What I Do</h1>
      <p className="indent-4 font-extralight">
        I&apos;m currently learning web development. Outside of programming,
        I&apos;m interested in are trivia, video games, and working out. In the
        summers, I enjoy brewing my own kombucha.
      </p>
    </div>
  );
};

export default About;
