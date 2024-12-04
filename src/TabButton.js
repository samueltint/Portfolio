import React from "react";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function TabButton({ children }) {
  return (
    <Tab
      className=" px-2 sm:px-4 py-1 sm:py-2 rounded-full mx-1 font-redhat font-semibold text-slate-500"
      as={Fragment}
    >
      {({ selected }) => (
        <button
          className={` transition-all duration-200 ${
            selected
              ? "bg-white"
              : "bg-slate-400 text-white hover:bg-slate-300/50"
          }`}
        >
          {children}
        </button>
      )}
    </Tab>
  );
}
