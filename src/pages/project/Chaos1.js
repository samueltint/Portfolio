import ImageGallery from "react-image-gallery";
import ChaosDashboard from "../../assets/images/Chaos-Dashboard.png";
import ChaosKanban from "../../assets/images/Chaos-Kanban.png";
import "react-image-gallery/styles/css/image-gallery.css";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
const images = [
  {
    original: ChaosDashboard,
    description: `Simple display and management of a user's projects. The website also supports individually shared projects and organisation level resources.`,
  },
  {
    original: ChaosKanban,
    description: `Kanban board, with rearrangable cards to represent tasks. These tasks can then be imported into the main project framework.`,
  },
];

const skills = [
  "TypeScript",
  "React",
  "Tailwind",
  "Google Cloud Platform",
  "Docker",
  "Figma",
  "Scrum Management",
  "Client Consultation",
  "Team Leadership",
];

function Chaos1() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col gap-2 p-4">
        <h1 className=" text-2xl md:text-4xl xl:text-5xl leading-8 text-slate-700 ">
          {"Project Management Website with AI Integration"}
          <span className="py-2 whitespace-nowrap sm:py-0 italic text-2xl md:text-4xl xl:text-5xl text-slate-600 font-light inline">
            {" - Chaos 1"}
          </span>
        </h1>

        <p className="pl-2 text-md sm:text-lg whitespace-pre-wrap">
          The core of the project was creating a user friendly experience to
          digitise and support the company's proprietary problem solving
          framework.
        </p>
        <h2 className=" text-2xl pt-6">{`My Contributions\n`}</h2>
        <p className="pl-2 text-md sm:text-lg whitespace-pre-wrap italic">{`Under NDA - original screenshots cannot be disclosed. Recreated designs have been provided.\n`}</p>

        <div className="max-w-4xl relative md:px-24">
          <ImageGallery
            items={images}
            showNav={true}
            autoPlay={true}
            slideDuration={800}
            slideInterval={6000}
            onScreenChange={(isFull) => setIsFullscreen(isFull)}
            renderLeftNav={(onClick) => (
              <div
                className={`hidden md:flex h-full absolute ${
                  isFullscreen ? "left-0" : "-left-24"
                }  items-center`}
              >
                <ChevronLeft
                  className=" z-20 w-24 h-24 stroke-slate-500 hover:stroke-slate-400 transition-all"
                  onClick={onClick}
                />
              </div>
            )}
            renderRightNav={(onClick) => (
              <div
                className={`hidden md:flex h-full absolute ${
                  isFullscreen ? "right-0" : "-right-24"
                } items-center`}
              >
                <ChevronRight
                  className=" z-20 w-24 h-24 stroke-slate-500 hover:stroke-slate-400 transition-all"
                  onClick={onClick}
                />
              </div>
            )}
          />
        </div>

        <h2 className="pt-6 text-2xl">{`Background\n`}</h2>
        <p className="pl-2 text-md sm:text-lg whitespace-pre-wrap">
          I was connected to Chaos 1 through the Green Gate internship program,
          a joint program between UTS and USYD students. Our team was tasked
          with acting as the company's consultants, designers and developers. I
          was selected as team leader, which added additional organisation and
          project management duties on top of my contributions to the website
          development. After completing the program, I was rehired individually
          and continued the project alongside a team of senior developers.
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-col gap-2 border-l-0 lg:border-l-2  p-4 border-slate-500">
        {skills.map((tag) => (
          <div
            key={tag}
            className="whitespace-nowrap py-1 w-fit px-3 rounded-full text-sm sm:text-lg text-white bg-slate-400"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chaos1;
