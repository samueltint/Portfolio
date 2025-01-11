import profile from "./../assets/images/profile.jpg";
import { EmailIcon, GithubIcon, LinkedInIcon } from "../assets/Icons.js";
import Icon from "../components/Icon.js";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Mail } from "lucide-react";

function Layout() {
  const [emailMessageVisible, setEmailMessageVisible] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("samueltint2@gmail.com");
    setEmailMessageVisible(true);
    setTimeout(() => {
      setEmailMessageVisible(false);
    }, 1000);
  };
  return (
    <div className="font-redhat relative bg-slate-200 min-h-screen p-4 sm:p-10 w-full flex flex-col">
      <div className="flex flex-col md:flex-row w-full justify-between md:px-12">
        <div className="flex flex-row justify-end md:justify-start md:flex-col gap-4 md:order-2">
          <div
            className={
              "absolute top-5 left-5 sm:right-5 text-md px-4 py-2 w-fit bg-white rounded-md shadow-sm transition-all " +
              (emailMessageVisible ? "opacity-100" : "hidden opacity-0")
            }
          >
            Email Copied
          </div>
          <div
            className="w-10 h-10 my-[-4px] "
            onClick={() => {
              copyEmail();
            }}
          >
            <Mail className="h-full w-full stroke-slate-600 hover:stroke-slate-500" />
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
            <div className="px-3  font-light text-4xl sm:text-6xl">
              Samuel Tint
            </div>
            <hr className="w-full border-black"></hr>
            <div className=" text-md sm:text-xl">
              Sydney based Software Engineer
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 pt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
