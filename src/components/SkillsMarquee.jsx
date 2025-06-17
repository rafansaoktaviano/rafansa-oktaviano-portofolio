import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGitAlt,  } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiJquery,
  SiLaravel,
  SiExpress,
  SiMysql,
  SiSequelize,
  SiSupabase,
  SiFigma,
  SiPhp
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#264de4" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38bdf8" /> },
  { name: "JavaScript", icon: <FaHtml5 size={40} color="#f7df1e" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178c6" /> },
  { name: "React.js", icon: <FaReact size={40} color="#61dafb" /> },
  { name: "React Native", icon: <FaReact size={40} color="#61dafb" /> },
  { name: "jQuery", icon: <SiJquery size={40} color="#0769ad" /> },
  { name: "Laravel", icon: <SiLaravel size={40} color="#ff2d20" /> },
  { name: 'PHP', icon: <SiPhp size={40} color="#777bb4" /> },
  { name: "Node.js", icon: <FaNode size={50} color="#339933" /> },
  { name: "Express.js", icon: <SiExpress size={40} color="black" /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#00758f" /> },
  { name: "Sequelize", icon: <SiSequelize size={40} color="#3f62ad" /> },
  { name: "Supabase", icon: <SiSupabase size={40} color="#3ecf8e" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#f05032" /> },
  { name: "Figma", icon: <SiFigma size={40} color="#f24e1e" /> },
];

const SkillsMarquee = () => {
  return (
    <div className="py-6 " data-aos="fade-up">
      <Marquee gradient={false} speed={50}>
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-[#1e293b] mx-3 p-4 border border-[#d3dce6] rounded-lg w-32 h-28 bg-white shadow-sm"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
