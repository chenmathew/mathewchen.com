import React from "react";
import Favicon from "../components/favicon";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Projs from "../components/projs";
import Wrapper from "../components/utility/wrapper";

interface projectsProps {}

const Projects: React.FC<projectsProps> = ({}) => {
  return (
    <div>
      <Favicon title="Home" />
      <Navbar />
      <Wrapper>
        <Projs />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Projects;
