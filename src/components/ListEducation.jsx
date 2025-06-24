import React from "react";
import purwalogo from "../assets/purwadhika_logo.jpeg";
import sman2 from "../assets/sma_negeri_2_cimahi_logo.jpeg";

const ListEducation = () => {
  return (
    <div className="w-full lg:w-[50%]">
      <div className="w-full bg-slate-200 h-auto flex-wrap  sm:flex-nowrap justify-between sm:h-[100px] rounded-xl flex items-center  gap-4  p-4 border mb-4">
        <div className="flex gap-4 ">
          <img
            src={purwalogo}
            alt="Purwadhika Logo"
            className="w-14 h-14 object-contain rounded-full bg-white p-1"
          />

          <div className="flex flex-col">
            <h3 className=" text-slate-700 font-semibold tracking-tight text-sm sm:text-xl whitespace-nowrap">
              Purwadhika Digital Technology School
            </h3>
            <p className="text-slate-700 font-semibold tracking-tight text-sm">
              Bootcamp Fullstack Web Development ( June 2023 - Dec 2023 )
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-200 h-auto flex flex-wrap items-center gap-4 p-4 border rounded-xl sm:flex-nowrap sm:justify-between sm:h-[100px] justify-between">
        <div className="flex gap-4 ">
          <img
            src={sman2}
            alt="Sman 2 logo"
            className="w-14 h-14 object-contain rounded-full bg-white p-1"
          />

          <div className="flex flex-col">
            <h3 className="  text-slate-700 whitespace-nowrap font-semibold tracking-tight text-xl">
              SMA Negeri 2 Cimahi
            </h3>
            <p className="text-slate-700 font-semibold tracking-tight text-sm">
              Faculty of Mathematics and Natural Sciences ( Aug 2019 - May 2022
              )
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEducation;
