import { Undo2 } from "lucide-react";
import { Link } from "react-router-dom";
import { entries } from "../Entries";
import Gallery from "../components/Gallery";

function ProjectLayout({ entryId }) {
  const entry = entries.find((e) => e.id === entryId);
  return (
    <div className="relative bg-white p-2 sm:p-4 shadow-md rounded-2xl">
      <Link
        to={"/"}
        className="hidden sm:block absolute top-4 right-4 h-12 w-12"
      >
        <Undo2 className="h-full w-full aspect-square p-2 rounded-full  stroke-white bg-slate-600 hover:bg-slate-500 transition-all" />
      </Link>
      {entry && (
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col p-4">
            <h1 className="text-3xl md:text-4xl xl:text-5xl xl:leading-normal text-slate-700 ">
              {entry.title}
              <span className="py-2 whitespace-nowrap sm:py-0 italic text-2xl md:text-4xl xl:text-5xl text-slate-600 font-light inline">
                {" - " + entry.subtitle}
              </span>
            </h1>
            {entry.body}
            <Gallery items={entry.images} />
          </div>
          <div className="flex flex-wrap lg:flex-col gap-2 border-l-0 lg:border-l-2  p-4 border-slate-500">
            {entry.fullTags.map((tag) => (
              <div
                key={tag}
                className="whitespace-nowrap py-1 w-fit px-3 rounded-full text-sm sm:text-lg text-white bg-slate-400"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectLayout;
