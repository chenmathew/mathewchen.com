import React from "react";

interface resumeProps {}

const Resume: React.FC<resumeProps> = ({}) => {
  return (
    <div>
      <div>
        <img src="/resume1.jpg" alt="resume"/>
      </div>
      <div>
        <a
          href="/resume.pdf"
          download="Chen Mathew Resume"
          className="flex justify-center m-5"
        >
          Download my resume! (PDF)
        </a>
      </div>
    </div>
  );
};

export default Resume;
