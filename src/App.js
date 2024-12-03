import profile from "./assets/images/profile.jpg";
import { Tab } from "@headlessui/react";
import TabPanel from "./TabPanel";
import TabButton from "./TabButton";
import Entry from "./Entry";
import "./App.css";
import { GithubIcon, LinkedInIcon } from "./assets/Icons.js";
import Icon from "./Icon.js";
import {
  educationEntries,
  experienceEntries,
  projectEntries,
} from "./Entries.js";
function App() {
  return (
    <div className="bg-slate-200 h-screen p-10">
      <div className="w-full flex flex-col">
        <div className="flex w-full justify-between px-12">
          <div className="bg-white items-center flex w-fit rounded-2xl shadow-xl m-5">
            <img
              src={profile}
              className="h-48 shadow-lg my-[-200px] ml-[-40px] rounded-full overflow-hidden "
              alt="Profile"
            />
            <div className="flex flex-col items-center p-5 gap-2">
              <div className="px-3 font-redhat font-light text-6xl">
                Samuel Tint
              </div>
              <hr className="w-full border-black"></hr>
              <div className="font-redhat text-xl">
                Sydney based Software Engineer
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Icon className="w-10" link="https://github.com/samueltint">
              <GithubIcon />
            </Icon>
            <Icon
              className="w-10"
              link="https://www.linkedin.com/in/samuel-tint/"
            >
              <LinkedInIcon />
            </Icon>
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
              <TabPanel>
                {experienceEntries.map((entry) => (
                  <Entry
                    title={entry.title}
                    subtitle={entry.subtitle}
                    tags={entry.tags}
                    details={entry.details}
                  >
                    {entry.description}
                  </Entry>
                ))}
              </TabPanel>
              <TabPanel>
                {projectEntries.map((entry) => (
                  <Entry
                    title={entry.title}
                    subtitle={entry.subtitle}
                    tags={entry.tags}
                    details={entry.details}
                  >
                    {entry.description}
                  </Entry>
                ))}
              </TabPanel>
              <TabPanel>
                {educationEntries.map((entry) => (
                  <Entry
                    title={entry.title}
                    subtitle={entry.subtitle}
                    tags={entry.tags}
                    details={entry.details}
                  >
                    {entry.description}
                  </Entry>
                ))}
              </TabPanel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default App;
