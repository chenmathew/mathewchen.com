import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Favicon from "./components/favicon";
import Footer from "./components/footer";
import Wrapper from "./utility/wrapper";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  return (
    <div>
      <Favicon title="Home" />
      <Navbar />
      <Wrapper>
        <About />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Index;
