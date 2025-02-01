import React from "react";
import ThreeScene from "./ThreeScene";
import Hero_BG from "../assets/videos/Hero-Bg.mp4";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between">
      <ParticleBackground />

      {/* 3D Scene */}
      <div className="flex-grow overflow-auto z-10">
        <ThreeScene />
      </div>

      {/* Description Section */}
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center mt-8 px-4 max-w-lg w-full z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Discover the Future of Robotics
        </h1>
        <p className="text-lg sm:text-xl text-white mb-6">
          This 3D scene showcases a futuristic mech drone design. Explore the
          intricate details of robotics technology and its potential in the real
          world.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
