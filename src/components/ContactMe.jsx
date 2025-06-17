import React from "react";

import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
  return (
    <section className="" data-aos="fade-up">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            How can I help you?
          </h2>
          <p className="text-gray-600">Fill in the form or drop an email 💬</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaInstagram size={24} />
              <p className="text-gray-700 text-sm">@rafansaoktaviano</p>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin size={24} />
              <p className="text-gray-700 text-sm">Rafansa Oktaviano</p>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp size={24} />
              <p className="text-gray-700 text-sm">+62 81296086227</p>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail size={24} />
              <p className="text-gray-700 text-sm">
                rafansaoktaviano@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          action="https://formspree.io/f/meokzjqb" // <-- Replace with your actual Formspree ID
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md text-sm transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
