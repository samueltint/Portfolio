import React from "react";
import { Tab } from "@headlessui/react";

export default function TabPanel({ children }) {
  return (
    <Tab.Panel>
      <div className="flex flex-col gap-10 bg-white p-4 shadow-md rounded-2xl min-h-40 font-redhat font-semibold text-slate-500">
        {children}
      </div>
    </Tab.Panel>
  );
}
