import Link from "next/link";
import React from "react";
import Favicon from "../../components/favicon";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Wrapper from "../../components/utility/wrapper";

interface dropperProps {}

export const Dropper: React.FC<dropperProps> = ({}) => {
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
        <div>Why I Made This and Purpose</div>
        <p>
          I finished making a beat and wanted to upload it somewhere on the
          internet quick without needing to make an account or have a commitment
          to an account. So a website where people can upload their MP3 files
          quickly with everyone that goes on the website being able to see it is
          a good idea.
        </p>
        <hr></hr>
        <a
          href="https://github.com/chenmathew/beatshare"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github repo (private)
        </a>
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Dropper;
