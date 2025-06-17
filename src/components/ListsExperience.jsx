import React from "react";
import logosenja from "../assets/logo-senja.png";

const ListsExperience = () => {
  return (
    <div className="w-full lg:w-[50%]">
      <div className="w-full bg-slate-200 h-[100px] rounded-xl flex items-center justify-between gap-4  p-4 border mb-4">
        <div className="flex gap-4 ">
          <img
            src={logosenja}
            alt="Senja Logo"
            className="w-14 h-14 object-contain rounded-full bg-white p-1"
          />

          <div className="flex flex-col">
            <h3 className="  text-slate-700 font-semibold tracking-tight text-xl whitespace-nowrap">
              Full Stack Web Developer
            </h3>
            <p className="text-slate-700 font-semibold tracking-tight text-sm">
              Senja Solution ( May 2024 - March 2025 )
            </p>
          </div>
        </div>
        <a
          href="https://dashboard.rebill-pos.com/demo"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-[40px] sm:ml-0 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition"
        >
          Demo
        </a>
      </div>
      <div className="w-full bg-slate-200 h-[100px] rounded-xl flex items-center justify-between gap-4  p-4 border ">
        <div className="flex gap-4 ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // briefcase
            alt="Freelance Logo"
            className="w-14 h-14 object-contain rounded-full bg-white p-1"
          />

          <div className="flex flex-col">
            <h3 className="  text-slate-700 font-semibold tracking-tight text-xl">
              Frontend Developer
            </h3>
            <p className="text-slate-700 font-semibold tracking-tight text-sm">
              Freelance ( 2 Months )
            </p>
          </div>
        </div>
        <a
          href="https://hummerdream.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" ml-[40px] sm:ml-0  bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ListsExperience;
