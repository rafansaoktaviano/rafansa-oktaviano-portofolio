import React from "react";

const Footer = () => {
  return (
    <footer className=" text-center py-6 text-sm text-gray-500 bg-white">
      © {new Date().getFullYear()} — Built by{" "}
      <span className="font-medium text-gray-700">Rafansa Oktaviano</span>
    </footer>
  );
};

export default Footer;
