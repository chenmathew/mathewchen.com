import Link from "next/link";
import React from "react";
import About from "../components/about";
import Favicon from "../components/favicon";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Wrapper from "../utility/wrapper";

interface albumlibraryProps {}

const AlbumLibrary: React.FC<albumlibraryProps> = ({}) => {
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
          This was a small project that I made to learn the basics of
          Javascript, HTML, and CSS.
        </p>
        <hr></hr>
        <div>Purpose</div>
        <p>
          As a music enjoyer, I want a way to keep track of what albums I
          listened to and a way to visualize it. This simple program does that
          job. You are able to add albums, remove albums, and toggle if you
          listened to it or not.
        </p>
        <hr></hr>
        <div>Improvements</div>
        <p>
          Since this is project&apos;s purpose was to let me learn the basics of
          Javascript, HTML, and CSS, I have not implemented the backend yet.
          Ideally, there will be a database that will store the user&apos;s
          input.
        </p>
        <hr></hr>
        <p>
          <a
            href="https://chenmathew.github.io/library/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live
          </a>
        </p>
        <a
          href="https://github.com/chenmathew/library"
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

export default AlbumLibrary;
