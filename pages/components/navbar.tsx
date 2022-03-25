import Link from "next/link";
import React from "react";

interface navbarProps {}

const Navbar: React.FC<navbarProps> = ({}) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex-1 max-w-xl">
          <nav className="flex items-center justify-between flex-wrap  p-6">
            <div className="flex items-center flex-shrink-0 mr-6">
              <Link href="/">
                <a className="text-2xl hover:text-rose-400">Mathew Chen</a>
              </Link>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <Link href="/resume">
                  <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-rose-400 mr-4">
                    Resume
                  </a>
                </Link>
                <Link href="/projects">
                  <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-rose-400 mr-4">
                    Projects
                  </a>
                </Link>
                <Link href="https://github.com/chenmathew/">
                  <a
                    target="_blank"
                    className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-rose-400"
                  >
                    Github
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/mathew-chen-597a08157/">
                  <a
                    target="_blank"
                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-rose-400"
                  >
                    Linkedin
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
