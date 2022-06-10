import Link from "next/link";
import React from "react";
import Favicon from "../../components/favicon";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Wrapper from "../../components/utility/wrapper";

interface StudyspacesProps {}

const Studyspaces: React.FC<StudyspacesProps> = ({}) => {
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
          For my full stack web development course, we had to create a final
          project that implemented a front end, back end, and a database. I was
          responsible for creating the front end.
        </p>
        <hr></hr>
        <div>Purpose</div>
        <p>
          Because of the pandemic, students were stuck inside their residences
          and there were only certain areas that students were allowed to go to
          to study. With Study Spaces, students can find what buildings and
          areas they are able to study at.
        </p>
        <hr></hr>
        <a
          href="https://www.youtube.com/watch?v=JQy_7PIM8jM"
          target="_blank"
          rel="noreferrer noopener"
        >
          Video Presentation
        </a>
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Studyspaces;
