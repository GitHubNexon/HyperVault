import React from "react";
import Project1 from "../assets/image/projects/project1.png";
import Project2 from "../assets/image/projects/project1.png";
import Project3 from "../assets/image/projects/project1.png";

import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiGithubBadge,
  DiAndroid,
  DiJavascript,
  DiIllustrator,
  DiPhp,
  DiPhotoshop,
  DiDotnet,
  DiGit,
  DiWindows,
  DiNpm,
  DiPython,
  DiSnapSvg,
  DiNetmagazine,
  DiUnitySmall,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";

// Icons Component
// Icons Component
// Icons Component
const Icons = ({ icons }) => (
    <div className="flex flex-wrap gap-4 justify-center text-2xl sm:text-3xl md:text-4xl">
      {icons.map((Icon, index) => (
        <div key={index} className="m-2 transform transition-all duration-300 hover:scale-125 hover:animate-ping">
          <Icon className="text-2xl sm:text-3xl md:text-4xl" />
        </div>
      ))}
    </div>
  );
  
const Skills = () => {
  const commonIcons = [
    DiHtml5,
    DiCss3,
    DiJavascript,
    DiPhp,
    DiSass,
    DiBootstrap,
    DiReact,
    DiNodejs,
    DiGithubBadge,
    DiGit,
    DiIllustrator,
    DiPhotoshop,
    DiDotnet,
    DiPython,
    DiNpm,
    DiAndroid,
    DiWindows,
    DiSnapSvg,
    DiUnitySmall,
    DiMongodb,
  ];

  const projectDetails = [
    {
      img: Project1,
      title: "Full Stack Development",
      description:
        "My tech stack is MERN (MongoDB, Express.js, React, Node.js). It allows me to build full-stack web applications, with React for the front-end, Node.js and Express for the back-end, and MongoDB for data storage..",
      icons: [DiMongodb, DiNodejs, DiReact, DiGithubBadge],
    },
    {
      img: Project2,
      title: "Skills",
      description:
        "Excellent interpersonal skills, demonstrated by communicating with clients, colleagues, and non-technical professionals on a daily basis.",
      icons: commonIcons,
    },
    {
      img: Project3,
      title: "Graphic Visual Design",
      description:
        "Graphic visual design is a vital discipline that combines artistry and functionality to convey messages effectively.",
      icons: [DiIllustrator, DiPhotoshop, DiSnapSvg, DiUnitySmall],
    },
  ];

  return (
    <div className="max-w-[90vw] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center justify-center items-center">
      {projectDetails.map((project, index) => (
        <React.Fragment key={index}>
          {/* Project Image */}
          <div className="relative group mb-8 md:mb-0">
            <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div
              className="relative w-full p-4  bg-opacity-10 backdrop-blur-lg rounded-lg"
              data-aos="flip-up"
            >
              <img
                src={project.img}
                alt={`Project${index + 1}`}
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Project Text */}
          <div
            className="p-6 flex flex-col items-center text-center md:text-left"
            data-aos="zoom-in-up"
          >
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className=" mb-4">{project.description}</p>
            <Icons icons={project.icons} />
          </div>
        </React.Fragment>
      ))}
      <hr className="my-8 border-t-2 border-gray-600 w-full" />
      <hr className="my-8 border-t-2 border-gray-600 w-full" />
    </div>
  );
};

export default Skills;
