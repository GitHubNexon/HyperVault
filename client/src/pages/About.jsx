import React from "react";
import Typing from "../components/Typing";
import Card1 from "../components/CustomCards.jsx/Card1";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center w-full min-h-screen  flex-col space-x-6"
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl p-4 gap-10 justify-center items-center">
        {/* About Me Section */}
        <div className="flex flex-col w-full md:w-3/5 space-y-6 text-center md:text-left">
          <Typing />

          <div
            className="text-lg sm:text-base md:text-xl leading-relaxed flex flex-col items-center space-y-5"
            data-aos="zoom-in"
          >
            <p>
              "I specialize in Web Development, always sharpening my skills to
              deliver better experiences... <a>interlinked</a>, like every line
              of code. Each click, each page, all part of the greater design.
              It's all... <a>interlinked</a>."
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div
          className="w-full md:w-2/5 xl:w-1/3 mt-6 md:mt-0 flex justify-center"
          data-aos="zoom-in"
        >
          <Card1
            imageSrc="https://endertech.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ffswbkokbwqb5%2F4vBAsCbQ9ITwI7Ym0MtXgY%2F96c4ec25d505f1b702f46a5a3d9dbe77%2FAI-Article-00.png&w=3840&q=75"
            title="Card 1 Title"
            content="This is the content for card 1."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
