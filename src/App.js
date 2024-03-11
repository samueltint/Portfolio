import profile from "./assets/images/profile.jpg";
import "./App.css";

function App() {
  return (
    <div className="bg-teal-50 h-screen p-10">
      <div className="w-full">
        <div className="mx-auto flex w-fit">
          <img
            src={profile}
            className="h-40 shadow-xl rounded-full overflow-hidden "
            alt="Profile Picture"
          />
          <div className="flex flex-col py-10 pl-5 gap-2">
            <div className="font-redhat font-light text-6xl">Samuel Tint</div>
            <hr className="border-black"></hr>
            <div className="pl-1 font-redhat text-xl">Sydney based Software Engineer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
