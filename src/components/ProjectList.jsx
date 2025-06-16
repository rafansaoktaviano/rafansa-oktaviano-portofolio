import React from "react";

import SocialAppImage from "../assets/socialappimage.png";
import BoostingEloImage from "../assets/boostingeloimage.png";
import TechHouseImage from "../assets/techhouseimage.png";
import TechHavenImage from "../assets/techhavenimage.png";

const projects = [
  {
    name: "Social App",
    description:
      "Built with React Native, Expo, and Convex as the backend, this app includes features like push notifications, deep linking, smooth navigation, and custom-built screens.",
    image: SocialAppImage,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7320662408664952835/",
  },
  {
    name: "Boosting Elo",
    description:
      "BoostingElo is a web app built with React and Express, using Supabase for backend services. It allows users to order elo boosting, view dynamic pricing, and pay securely via Stripe. Deployed on Vercel.",
    image: BoostingEloImage,
    link: "https://boostingelo-client.vercel.app/",
  },
  {
    name: "Tech House",
    description:
      "Tech House is a modern company profile website built with React, showcasing our brand, services, and digital capabilities through a clean and responsive interface.",
    image: TechHouseImage,
    link: "https://tech-house-lime.vercel.app/",
  },
  {
    name: "Multi Warehouse E-commerce",
    description:
      "A multi-storage e-commerce app using React.js, Express.js, and MySQL, with geolocation, real-time alerts, RAJAONGKIR shipping, and full order management.",
    image: TechHavenImage,
    link: "https://tech-haven-client.vercel.app/",
  },
];

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105 cursor-pointer"
        >
          <div className="p-6 bg-slate-200 rounded-xl">
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
        </a>
      ))}
    </div>
  );
};

export default ProjectList;
