import { Tab } from "@headlessui/react";

export default function TabPanel({ children }) {
  return (
    <Tab.Panel>
      <div className="flex flex-col gap-6  font-semibold text-slate-500">
        {children}
      </div>
    </Tab.Panel>
  );
}
