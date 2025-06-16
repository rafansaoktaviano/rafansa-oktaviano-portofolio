import React from "react";
import ArticleUi from "../components/ArticleUi";
import SocialSection from "../components/SocialSection";

import Lottie from "lottie-react";
import animationData from "../assets/animation-expe.json";
import SkillsMarquee from "../components/SkillsMarquee";
import ListsExperience from "../components/ListsExperience";
import ProjectList from "../components/ProjectList";

export const Home = () => {
  return (
    <>
      <div className="max-w-2xl xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto pb-56">
        <div className=" px-4 md:px-0 grid grid-cols-2">
          <div className="text-3xl font-saans font-bold leading-10 text-gray-800 md:font-extrabold lg:text-[2.5rem] lg:leading-[3.5rem] mt-[50px]">
            <p className="text-3xl lg:text-[2.1rem] font-extrabold text-gray-900">
              Hello,
            </p>
            <p>
              This is <span className="text-pink-600">Rafansa Oktaviano</span>,
              I'm a Professional
            </p>
            <p>
              <span className="text-teal-600">Software Developer</span>.
            </p>

            <SocialSection />
            <a
              class="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
              href="/"
            >
              Contact Me{" "}
              <span class="inline-block group-hover:translate-x-2 transition-transform">
                --→
              </span>
            </a>
          </div>

          <ArticleUi />
        </div>
        <div class="flex justify-center my-5 lg:py-8 font-mono">
          <div class="flex  items-center">
            <span class=" w-fit text-darkText font-semibold p-2 px-5 text-xl rounded-md">
              Experiences
            </span>
          </div>
        </div>

        <div className="flex">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: "50%", height: 400 }}
          />
          <ListsExperience />
        </div>

        <div class="flex justify-center mb-5 pt-8 lg:py-8 font-mono">
          <div class="flex  items-center">
            <span class=" w-fit text-darkText font-semibold p-2 px-5 text-xl rounded-md">
              My Skills
            </span>
          </div>
        </div>

        <SkillsMarquee />

        <div class="flex justify-center my-5 lg:py-8 font-mono">
          <div class="flex  items-center">
            <span class=" w-fit text-darkText font-semibold p-2 px-5 text-xl rounded-md">
              Projects
            </span>
          </div>
        </div>

        <ProjectList />
      </div>
    </>
  );
};
