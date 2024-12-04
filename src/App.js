import profile from "./assets/images/profile.jpg";
import { Tab } from "@headlessui/react";
import TabPanel from "./TabPanel";
import TabButton from "./TabButton";
import Entry from "./Entry";
import "./App.css";
import { EmailIcon, GithubIcon, LinkedInIcon } from "./assets/Icons.js";
import Icon from "./Icon.js";
import {
  educationEntries,
  experienceEntries,
  projectEntries,
} from "./Entries.js";
import { useState } from "react";

function App() {
  const [emailMessageVisible, setEmailMessageVisible] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("samueltint2@gmail.com");
    setEmailMessageVisible(true);
    setTimeout(() => {
      setEmailMessageVisible(false);
    }, 1000);
  };
  return (
    <div className="relative bg-slate-200 min-h-screen p-4 sm:p-10 w-full flex flex-col">
      <div className="flex flex-col md:flex-row w-full justify-between md:px-12">
        <div className="flex flex-row justify-end md:justify-start md:flex-col gap-4 md:order-2">
          <div
            className={
              "absolute top-5 right-5 text-md px-4 py-2 bg-white rounded-md shadow-sm transition-all " +
              (emailMessageVisible ? "opacity-100" : "opacity-0")
            }
          >
            Email Copied
          </div>
          <div
            className="w-10 stroke-slate-600 hover:stroke-slate-500"
            onClick={() => {
              copyEmail();
            }}
          >
            <EmailIcon />
          </div>
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
        <div className="bg-white items-center justify-center flex md:w-fit rounded-2xl shadow-xl m-5 md:order-1">
          <img
            src={profile}
            className="hidden md:block h-48 shadow-lg my-[-200px] ml-[-40px] rounded-full overflow-hidden "
            alt="Profile"
          />
          <div className="flex flex-col items-center p-5 gap-2">
            <div className="px-3 font-redhat font-light text-4xl sm:text-6xl">
              Samuel Tint
            </div>
            <hr className="w-full border-black"></hr>
            <div className="font-redhat text-md sm:text-xl">
              Sydney based Software Engineer
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 pt-10">
        <Tab.Group>
          <Tab.List className="bg-slate-400 p-2 rounded-full w-fit shadow-md mb-2 mx-auto sm:mx-0 ">
            <TabButton>Experience</TabButton>
            <TabButton>Projects</TabButton>
            <TabButton>Education</TabButton>
          </Tab.List>
          <Tab.Panels className="pt-2">
            <TabPanel>
              {experienceEntries.map(
                ({ title, subtitle, tags, details, description }) => (
                  <Entry
                    title={title}
                    subtitle={subtitle}
                    tags={tags}
                    details={details}
                  >
                    {description}
                  </Entry>
                )
              )}
            </TabPanel>
            <TabPanel>
              {projectEntries.map(
                ({ title, subtitle, tags, details, link, description }) => (
                  <Entry
                    title={title}
                    subtitle={subtitle}
                    tags={tags}
                    details={details}
                    link={link}
                  >
                    {description}
                  </Entry>
                )
              )}
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
  );
}

export default App;
