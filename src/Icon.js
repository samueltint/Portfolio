import React from "react";

export default function Icon({ className, link, children }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={" fill-slate-600 hover:fill-slate-500"}
    >
      <div className={className}>{children}</div>
    </a>
  );
}
