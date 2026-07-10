import React from "react";
import { Flame, MoonStar, Sparkles, Target } from "lucide-react";
import FloatingBtn from "./model/FloatingBtn";

const NavBar = ({setPortalModel, portalModel}) => {

  return (
    <nav className="sticky bottom-2 mt-2 flex items-center justify-between rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-3 shadow-[0_20px_60px_-24px_rgba(2,6,23,0.85)] backdrop-blur-xl sm:px-6 lg:hidden">
      <button className="flex flex-col items-center rounded-2xl px-2 py-2 text-xs font-medium transition duration-300 hover:scale-115">
        <Sparkles size={25} />
        Home{" "}
      </button>
      <button className="flex flex-col items-center rounded-2xl px-2 py-2 text-xs font-medium transition duration-300 hover:scale-115">
        {" "}
        <Target size={25} /> Tasks{" "}
      </button>
     <div className="ml-3 mr-3">
       <FloatingBtn setPortalModel={setPortalModel} portalModel={portalModel}  />
     </div>
      <button className="flex flex-col items-center rounded-2xl px-2 py-2 text-xs font-medium transition duration-300 hover:scale-115">
        {" "}
        <Flame size={25} /> Focus{" "}
      </button>
      <button className="flex flex-col items-center rounded-2xl px-2 py-2 text-xs font-medium transition duration-300 hover:scale-115">
        {" "}
        <MoonStar size={25} />
        Profile{" "}
      </button>
    </nav>
  );
};

export default NavBar;
