import React, { useState } from "react";
import Computer from "../components/3D/Computer";

const Platform = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative w-full h-screen flex flex-col items-center justify-between">
        {/* <Computer /> */}
        {/* Description Section */}
        <div className="absolute top-64 transform -translate-y-1/2 text-center mt-8 px-4 max-w-lg w-full z-10 ">
          <p
            className="text-[0.9rem] sm:text-xl mb-6"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            Services built for the next generation—each project, each line of
            code..., <a>interlinked</a>, part of the greater vision. Always...{" "}
            <a>interlinked</a>.
          </p>
          <div className="flex justify-center gap-4">
            <button
              className=" px-6 py-3 rounded-lg text-lg  transition duration-300"
              data-aos="flip-up"
              data-aos-delay="200"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              View My Projects
            </button>
            <button
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-lg transition duration-300"
              data-aos="flip-up"
              data-aos-delay="300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;
