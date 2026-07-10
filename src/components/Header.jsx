import { Search, Sparkles } from "lucide-react";
import React from "react";
import AddTaskBtn from "./model/AddTaskBtn";

const Header = ({setPortalModel, portalModel}) => {
  return (
    <header className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4 shadow-[0_20px_60px_-24px_rgba(2,6,23,0.85)] backdrop-blur-xl sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-sky-400">Good morning</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Marco, let’s stay on track.
          </h1>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-300/40 transition duration-300 hover:scale-110">
          <Sparkles className="h-5 w-5" />
        </div>
      </div>
     <div className="lg:flex lg:w-full justify-between items-center">
       <div className="group mt-4 flex items-center gap-2 rounded-2xl border border-slate-600/70 bg-slate-800/70 px-3 py-3 shadow-inner shadow-slate-600/40 lg:w-[70%]">
        <Search className="h-4 w-4 text-slate-400 transition duration-300 group-hover:scale-110" />
        <input
          type="search"
          placeholder="Search tasks, notes, or plans"
          className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-400"
        />
      </div>
      <AddTaskBtn setPortalModel={setPortalModel} portalModel={portalModel} />
     </div>
    </header>
  );
};

export default Header;
