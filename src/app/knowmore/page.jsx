import React from "react";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Page = () => {
  return (
    <div className="p-6">
      <Navbar />
      <div className="md:flex items-center">
      <div className="md:w-2/3 h-full">
      <h1 className="text-2xl font-bold mt-6 p-6">Know More</h1>
      <hr />
      <div className="p-6">
        <p className="text-lg">
          This is a NextJS app with Firebase and Tailwind CSS. It is a simple
          app that gathers all the resources and study material required to you
          in 1st year all at one place. Hope you find it useful. Any type of
          feedback and contribution is welcomed.
        </p>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold">Features</h2>
        <ul className="list-disc list-inside">
          <li>NextJS</li>
          <li>Firebase</li>
          <li>Tailwind CSS </li>
        </ul>
      </div></div>

      <div className="aboutme md:w-1/3 bg-blue-100 rounded p-3 h-full">
        <h1 className="font-bold text-xl mt-3 mb-3">About Me</h1>
        <span className="mb-3">
          I'm a undergrad at NIT Hamirpur. I love to code and build new things.
          I'm always looking for new opportunities to learn and grow. I'm
          passionate about technology and how it can be used to make the world a
          better place.
        </span>
      </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Page;
