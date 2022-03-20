import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Favicon from "./components/favicon";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  return (
    <div>
      <Favicon title="Home" />
      <Navbar />
      <div>
        <About />
      </div>
    </div>
  );
};

export default Index;
