import React from "react";

export default function Entry({ title, subtitle, tags, children }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-1 ">
        <div className="font-redhat text-xl sm:text-2xl leading-8 text-slate-700">
          {title}
          {subtitle && (
            <span className="py-2 whitespace-nowrap sm:py-0 italic text-xl sm:text-2xl text-slate-600 font-normal inline">
              {" - " + subtitle}
            </span>
          )}
        </div>
        {/* <div className="pl-2 italic text-lg text-right text-slate-500 font-light inline">
          {details}
        </div> */}
        <div className="hidden sm:flex pl-4 flex-1 flex-wrap gap-2 ">
          {tags && (
            <>
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="whitespace-nowrap py-1 px-3 rounded-full text-xs sm:text-md text-white bg-slate-400"
                >
                  {tag}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="pl-2 text-md sm:text-lg whitespace-pre-wrap">
        {children}
      </div>
    </div>
  );
}
