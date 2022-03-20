import React from "react";
import Wrapper from "../utility/wrapper";

interface aboutProps {}

const About: React.FC<aboutProps> = ({}) => {
  return (
    <>
      <Wrapper>
        <p className="text-2xl">Mathew Chen, class of 2023</p>
        <h1 className="font-light text-xl">About me</h1>
        <div className="font-extralight text-lg">
          <p className="indent-4">
            I'm Mathew Chen, a computer science student and a developer.
            Interested in fullstack web development, but I am open for any
            software development opportunity as I am still exploring.
          </p>
          <hr></hr>

          <h1 className="font-light text-xl">What I Do</h1>
          <p className="indent-4">
            I am currently learning web development. Outside of programming, I'm
            interested in are trivia, video games, and working out. In the
            summers, I enjoy brewing my own kombucha.
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
