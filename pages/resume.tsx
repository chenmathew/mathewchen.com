import React from "react";
import Favicon from "./components/favicon";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Resume from "./components/resume";
import Wrapper from "./utility/wrapper";

interface programsProps {}

const Programs: React.FC<programsProps> = ({}) => {
  return (
    <div>
      <Favicon title="Resume" />
      <Navbar />
      <Wrapper>
        <Resume />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Programs;
