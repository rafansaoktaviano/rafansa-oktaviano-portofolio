import React from "react";
import ArticleUi from "../components/ArticleUi";
import SocialSection from "../components/SocialSection";

import Lottie from "lottie-react";
import animationData from "../assets/animation-expe.json";
import SkillsMarquee from "../components/SkillsMarquee";
import ListsExperience from "../components/ListsExperience";
import ProjectList from "../components/ProjectList";
import ContactMe from "../components/ContactMe";
import Title from "../components/Title";

export const Home = () => {
  return (
    <>
      <div className=" px-4 md:px-0 max-w-2xl xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto pb-40">
        <div className="grid grid-cols-1  lg:grid-cols-2" data-aos="fade-up">
          <div className="text-3xl font-saans font-bold leading-10 text-gray-800 md:font-extrabold lg:text-[2.5rem] lg:leading-[3.5rem] mt-[50px] mb-20 lg:mb-0">
            <p className="text-3xl lg:text-[2.1rem] font-extrabold text-gray-900">
              Hello,
            </p>
            <p>
              This is{" "}
              <span className="text-indigo-600 hover:text-indigo-700 transition">
                Rafansa Oktaviano
              </span>
              , I'm a Professional
            </p>
            <p>
              <span className="text-teal-600">Software Developer</span>.
            </p>

            <SocialSection />
            <a
              class="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
              href="#contactme"
            >
              Contact Me{" "}
              <span class="inline-block group-hover:translate-x-2 transition-transform">
                --→
              </span>
            </a>
          </div>

          <ArticleUi />
        </div>

        <Title idHref={"experience"}>Experiences</Title>

        <div
          className="flex flex-col gap-16 lg:gap-0 lg:flex-row"
          data-aos="fade-up"
        >
          <div className="h-[400px] w-full lg:w-[50%] mt-[-100px] sm:mt-[-100px]">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
          <ListsExperience />
        </div>

        <Title idHref={"myskills"}>My Skills</Title>

        <SkillsMarquee />

        <Title idHref={"projects"}>Projects</Title>

        <ProjectList />

        {/* <Title idHref={"education"}>Education</Title> */}

        <Title idHref={"contactme"}>Contact Me</Title>

        <ContactMe />
      </div>
    </>
  );
};
