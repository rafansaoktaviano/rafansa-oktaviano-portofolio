import React from "react";

export const Navbar = () => {
  return (
    <nav
      className="px-4  pt-8 md:pt-16 pb-8 md:pb-16"
      aria-label="Main navigation"
    >
      <div className=" max-w-2xl xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto  flex justify-between items-center">
        <div>
          <div></div>
          <div className=" text-[24px] text-base font-mono font-semibold text-slate-950">
            Rafansa{" "}
            <span className=" inline md:hidden lg:inline">Oktaviano</span>
          </div>
        </div>

        <ul className="hidden sm:flex font-mono text-950 text-sm tracking-tighter font-semibold gap-6">
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#myskills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contactme">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
