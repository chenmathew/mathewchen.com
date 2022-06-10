import React from "react";

interface resumeProps {}

const Resume: React.FC<resumeProps> = ({}) => {
  return (
    <div>
      <div className="font-light">
        <h1 className="font-light text-xl underline underline-offset-2 decoration-1">
          Education
        </h1>
        <p className="text-left">
          Portland State University
          <span className="float-right text-sm">2019 - 2023</span>
        </p>
        <div className="text-sm">
          <span className="italic">
            Bachelor of Science in Computer Science
          </span>
          <span className="float-right">Portland, OR</span>
          <ul>
            <li>Major GPA: 3.46</li>
            <li>
              Relevant Coursework: Data Structures, Algorithms, Software
              Engineering, Discrete Math, Computer Systems Programming, Object
              Oriented Programming, Linear Algebra, Operating Systems
            </li>
          </ul>
        </div>
        <hr></hr>
        <h1 className="font-light text-xl underline underline-offset-2 decoration-1">
          Experience
        </h1>
        <p className="text-left">
          Student Course Migration Specialist
          <span className="float-right text-sm">Aug 2021 - Present</span>
        </p>
        <div className="text-sm">
          <span className="italic">Office of Academic Innovation @ PSU</span>
          <span className="float-right">Portland, OR</span>
          <ul>
            <li>
              Worked on migrating D2L Brightspace courses to Canvas courses
              using existing D2L packages with administrative privileges
            </li>
            <li>
              Collaborated with team members through Zoom to diagnose and solve
              issues regarding errors in the migration
            </li>
            <li>
              Documented, logged, and resolved migration issues using Salesforce
              and Notion
            </li>
            <li>
              Coded HTML and CSS to replicate and replace nontransferable D2L
              content
            </li>
          </ul>
        </div>
        <p className="text-left">
          Computer Action Team
          <span className="float-right text-sm">Oct 2019 - June 2020</span>
        </p>
        <div className="text-sm">
          <span className="italic">
            Maseeh College of Engineering and CS @ PSU
          </span>
          <span className="float-right">Portland, OR</span>
          <ul className="text-sm">
            <li>
              Learned useful shell commands, scripting, and the infrastructure
              of the college’s computer network to perform routine checks on the
              college’s servers and printers
            </li>
            <li>
              Resolved school software issues for faculty and students
              successfully
            </li>
          </ul>
        </div>
        <hr></hr>
        <h1 className="font-light text-xl underline underline-offset-2 decoration-1">
          Projects
        </h1>
        <div>Personal Website (NextJS, Typescript) - Personal Project</div>
        <ul className="text-sm">
          <li>
            Learned React with Typescript to make code modular and have type
            checking
          </li>
          <li>Styled components with TailwindCSS to make website responsive</li>
          <li>Deployed website using Google&apos;s Firebase</li>
        </ul>
        ChocoAn Project (C++) - School Project
        <ul className="text-sm">
          <li>
            Reached out to the team initially and established the means of
            communication for team meetings
          </li>
          <li>
            Programmed unit tests to test the quality of the code and refactored
            program to make the functions more testable
          </li>
        </ul>
        Translator bot (Python) - Personal Project
        <ul className="text-sm">
          <li>
            Developed a translator bot that calls multiple web APIs for the
            objective of making communication between languages more simple and
            convenient
          </li>
          <li>
            Utilized by multiple communities in order to increase productivity
            and collaboration between community members
          </li>
        </ul>
        8MB Video Compressor (Python) - Personal Project
        <ul className="text-sm">
          <li>
            Automates compressing video files in a queue using multiple APIs
            that communicates with each other to download and compress to the
            desired file size
          </li>
          <li>
            Increased productivity for multiple users due to its compatibility
            to communicate and upload to a major online social networking
            platform
          </li>
        </ul>
        <hr></hr>
        <h1 className="font-light text-xl underline underline-offset-2 decoration-1">
          Skills
        </h1>
        <div className="text-sm">
          <p>
            Languages: Python, C++/C, Javascript/Typescript, HTML/CSS, Java,
            React
          </p>
          <p>Tools: Git, Vim, VSCode, GDB, Salesforce, Notion, Google Suite</p>
        </div>
      </div>
      <a
        href="/resume.pdf"
        download="Chen Mathew Resume"
        className="flex justify-center m-5"
      >
        Download my resume! (PDF)
      </a>
    </div>
  );
};

export default Resume;
