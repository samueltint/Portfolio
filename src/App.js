import profile from "./assets/images/profile.jpg";
import { Tab } from "@headlessui/react";
import "./App.css";

function App() {
  return (
    <div className="bg-teal-50 h-screen p-10">
      <div className="w-full flex flex-col">
        <div className="mx-auto flex w-fit">
          <img
            src={profile}
            className="h-40 shadow-xl rounded-full overflow-hidden "
            alt="Profile Picture"
          />
          <div className="flex flex-col py-10 pl-5 gap-2">
            <div className="font-redhat font-light text-6xl">Samuel Tint</div>
            <hr className="border-black"></hr>
            <div className="pl-1 font-redhat text-xl">
              Sydney based Software Engineer
            </div>
          </div>
        </div>
          <Tab.Group>
            <Tab.List>
              <Tab className="bg-white hover:bg-slate-100 px-4 py-2 shadow-md rounded-full mx-1 font-redhat font-semibold text-slate-500 transition-all duration-200">Experience</Tab>
              <Tab className="bg-white hover:bg-slate-100 px-4 py-2 shadow-md rounded-full mx-1 font-redhat font-semibold text-slate-500 transition-all duration-200">Projects</Tab>
              <Tab className="bg-white hover:bg-slate-100 px-4 py-2 shadow-md rounded-full mx-1 font-redhat font-semibold text-slate-500 transition-all duration-200">Education</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
      </div>
    </div>
  );
}

export default App;
