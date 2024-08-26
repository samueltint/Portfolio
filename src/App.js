import profile from "./assets/images/profile.jpg";
import { Tab } from "@headlessui/react";
import TabPanel from "./TabPanel";
import TabButton from "./TabButton";
import Entry from "./Entry";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-100 h-screen p-10">
      <div className="w-full flex flex-col">
        <div className="mx-auto bg-white items-center flex w-fit bg-white rounded-2xl shadow-xl m-5">
          <img
            src={profile}
            className="h-48 shadow-lg my-[-200px] ml-[-40px] rounded-full overflow-hidden "
            alt="Profile Picture"
          />
          <div className="flex flex-col p-5 gap-2">
            <div className="font-redhat font-light text-6xl">Samuel Tint</div>
            <hr className="border-black"></hr>
            <div className="px-1 font-redhat text-xl">
              Sydney based Software Engineer
            </div>
          </div>
        </div>
        <div className="p-5 pt-10">
          <Tab.Group>
            <Tab.List className="bg-slate-400 p-2 rounded-full w-fit shadow-md mb-2">
              <TabButton>Experience</TabButton>
              <TabButton>Projects</TabButton>
              <TabButton>Education</TabButton>
            </Tab.List>
            <Tab.Panels className="pt-2">
              <Tab.Panel>
                <TabPanel>
                  <Entry company="Chaos 1 - " position="Software Engineer Intern">
                    Worked on the prototype for a web-based problem solving
                    platform.
                  </Entry>
                  <Entry company="Chaos 1 - " position="Software Engineer Intern">
                    Worked on the prototype for a web-based problem solving
                    platform.
                  </Entry>
                </TabPanel>
              </Tab.Panel>
              <Tab.Panel>
                <TabPanel>
                  <Entry company="RBT/RDT Digital Entry - " position="NSW Police">
                    Developed a React Native application to record 
                  </Entry>
                </TabPanel>
              </Tab.Panel>
              <Tab.Panel>
                <TabPanel>
                  <Entry company="Bachelors of Engineering (Software)" position="Universit"/>
                </TabPanel>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default App;
