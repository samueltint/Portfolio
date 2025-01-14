import { Tab } from "@headlessui/react";
import TabPanel from "../components/TabPanel.js";
import TabButton from "../components/TabButton.js";
import Entry from "../components/Entry.js";
import { entries } from "../Entries.js";

function Home() {
  return (
    <Tab.Group>
      <Tab.List className="bg-slate-400 p-2 rounded-full w-fit shadow-md mb-2 mx-auto sm:mx-0 ">
        <TabButton>Experience</TabButton>
        <TabButton>Projects</TabButton>
        <TabButton>Education</TabButton>
      </Tab.List>
      <Tab.Panels className="pt-2">
        <TabPanel>
          {entries
            .filter((entry) => entry.type === "experience")
            .map(
              ({ title, subtitle, tags, details, link, description, page }) => (
                <Entry
                  title={title}
                  subtitle={subtitle}
                  tags={tags}
                  details={details}
                  link={link}
                  page={page}
                >
                  {description}
                </Entry>
              )
            )}
        </TabPanel>
        <TabPanel>
          {entries
            .filter((entry) => entry.type === "project")
            .map(
              ({ title, subtitle, tags, details, link, description, page }) => (
                <Entry
                  title={title}
                  subtitle={subtitle}
                  tags={tags}
                  details={details}
                  link={link}
                  page={page}
                >
                  {description}
                </Entry>
              )
            )}
        </TabPanel>
        <TabPanel>
          {entries
            .filter((entry) => entry.type === "education")
            .map(
              ({ title, subtitle, tags, details, link, description, page }) => (
                <Entry
                  title={title}
                  subtitle={subtitle}
                  tags={tags}
                  details={details}
                  link={link}
                  page={page}
                >
                  {description}
                </Entry>
              )
            )}
        </TabPanel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Home;
