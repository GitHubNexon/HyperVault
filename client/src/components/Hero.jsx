import React from "react";
import ThreeScene from "./ThreeScene";
import Carousel from "../components/Carousel.jsx";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between">
      {/* 3D Scene */}
      <ThreeScene />

      {/* Description Section */}
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center mt-8 px-4 max-w-lg w-full z-10 ">
        <p className="text-[0.9rem] sm:text-xl mb-6">
          "Hi, I'm John Mark Lilio Pulmano — a passionate programmer and tech
          enthusiast dedicated to crafting innovative solutions.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 px-6 py-3 rounded-lg text-lg  transition duration-300">
            Join Me
          </button>
          <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-lg transition duration-300">
            Contact Me
          </button>
        </div>
      </div>
      {/* <div className="mt-10">
        <Carousel />
      </div> */}
    </div>
  );
};

export default Hero;
