import React from "react";

const projects = [
  {
    name: "Hystruct",
    description: "Scrape structured data from the web with AI",
    image: "/images/hystruct.png",
  },
  {
    name: "Linky",
    description:
      "A super simple way to create beautiful personal landing pages.",
    image: "/images/linky.png",
  },
  {
    name: "FlagDB",
    description:
      "A personal project to build a database of flags from around the world",
    image: "/images/flagdb.png",
  },
  {
    name: "Awesome Design Systems",
    description: "A curated list of design systems",
    image: "/images/awesome-design-systems.png",
  },
];

const ProjectList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map((project, idx) => (
        <div key={idx} className=" p-6 bg-slate-200 rounded-xl">
          <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-slate-800">
              {project.name}
            </h3>
            <p className="text-slate-600 text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
