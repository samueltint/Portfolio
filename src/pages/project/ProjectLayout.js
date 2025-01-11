import { Undo2 } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

function ProjectLayout() {
  return (
    <div className="relative bg-white p-4 shadow-md rounded-2xl">
      <Link to={"/"} className="hidden sm:block absolute top-4 right-4 h-12 w-12">
        <Undo2 className="h-full w-full aspect-square p-2 rounded-full  stroke-white bg-slate-600 hover:bg-slate-500 transition-all" />
      </Link>
      <Outlet />
    </div>
  );
}

export default ProjectLayout;
