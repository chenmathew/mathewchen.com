import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <div>
        <About />
      </div>
    </div>
  );
};

export default Index;
