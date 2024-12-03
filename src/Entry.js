import React from "react";

export default function Entry({ title, subtitle, details, tags, children }) {
  return (
    <div>
      <div className="flex items-center p-1 ">
        <pre className="font-redhat text-2xl">
          {subtitle ? title + " - " : title}
        </pre>
        <div className="italic text-2xl text-slate-400 font-normal">
          {subtitle}
        </div>
        {tags && (
          <div className="pl-4 flex-1 flex flex-row gap-2 ">
            {tags.map((tag) => (
              <div className="py-1 px-3 rounded-full text-md text-white bg-slate-400">
                {tag}
              </div>
            ))}
          </div>
        )}
        <div className="pl-2 italic text-lg text-slate-500 font-light">
          {details}
        </div>
      </div>
      <div className="pl-2 text-lg">{children}</div>
    </div>
  );
}
