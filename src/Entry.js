import React from "react";

export default function Entry({ company, position, children }) {
  return (
    <div>
      <div className="flex items-center p-1 ">

        <pre className="font-redhat text-xl">{company}</pre>
        <div className="italic text-xl text-slate-400 font-light">{position} </div>
      </div>
      <div className="pl-2 text-sm">{children}</div>
    </div>
  );
}
