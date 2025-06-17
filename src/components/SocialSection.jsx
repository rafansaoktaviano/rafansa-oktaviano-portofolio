import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";


const SocialSection = () => {
  return (
    <div className="flex gap-2 mt-4 items-center text-[14px]">
      {/* Twitter */}
      <a
        href="https://wa.me/6281296086227"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-green-500 hover:opacity-80 transition"
      >
        <FaWhatsapp size={20} />
        <span className="">WhatsApp</span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/ravansaoktaviano"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-pink-500 hover:opacity-80 transition"
      >
        <FaInstagram size={20} />
        <span>Instagram</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/rafansaoktaviano"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-blue-600 hover:opacity-80 transition"
      >
        <FaLinkedin size={20} />
        <span>LinkedIn</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/rafansaoktaviano"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 hover:opacity-80 transition"
      >
        <FaGithub size={20} />
        <span>GitHub</span>
      </a>
    </div>
  );
};

export default SocialSection;
