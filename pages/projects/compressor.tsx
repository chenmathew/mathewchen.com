import Link from "next/link";
import React from "react";
import About from "../components/about";
import Favicon from "../components/favicon";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Wrapper from "../utility/wrapper";

interface compressorProps {}

const Compressor: React.FC<compressorProps> = ({}) => {
  return (
    <div>
      <Favicon title="Home" />
      <Navbar />
      <Wrapper>
        <Link href="/projects" passHref>
          <button className="mb-5 p-1">
            &lt; <span className="underline underline-offset-2">Back</span>
          </button>
        </Link>
        <div>Why I Made This</div>
        <p>
          My friends and I would always complain about how Twitter and Tiktok
          videos are terribly integrated with Discord because you are unable to
          view the video in discord.
        </p>
        <hr></hr>
        <div>Purpose</div>
        <p>
          Discord limits files to 8mb for bots. Using multiple libraries, I was
          able to compress videos to less than 8mb and have the bot
          automatically send the compressed video whenever it detects a Twitter
          or Tiktok video.
        </p>
        <hr></hr>
        <p></p>
        <a
          href="https://github.com/chenmathew/Discord-Compressor"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github repo
        </a>
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Compressor;
