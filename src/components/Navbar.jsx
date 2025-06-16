import React from "react";

export const Navbar = () => {
  return (
    <div className="px-4  pt-8 md:pt-16 pb-16">
      <div className=" max-w-2xl xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto  flex justify-between items-center">
        <div>
          <div></div>
          <div className=" text-[24px] text-base font-mono font-semibold text-slate-950">
            Rafansa{" "}
            <span className=" inline md:hidden lg:inline">Oktaviano</span>
          </div>
        </div>

        <div className=" hidden sm:flex font-mono text-950 text-sm tracking-tighter  font-semibold  gap-6">
          <div>About</div>
          <div>Experience</div>
          <div>Skills</div>
          <div>Education</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};
