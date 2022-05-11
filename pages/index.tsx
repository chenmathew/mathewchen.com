import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Favicon from "./components/favicon";
import Footer from "./components/footer";
import Wrapper from "./utility/wrapper";
import Projects from "./components/projs";
import { NowPlaying } from "./components/nowplaying";
import Spotify from "./components/spotify";
import useSWR from "swr";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  return (
    <div>
      <Favicon title="Home" />
      <Navbar />
      <Wrapper>
        <About />
        <Footer />
        {/*<NowPlaying />*/}
      </Wrapper>
    </div>
  );
};

export default Index;
