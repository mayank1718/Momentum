import React from "react";
import GlassCard from "./GlassCard";

const Timer = () => {
  return (
    <GlassCard highlighted>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Pomodoro Timer</p>
          <p className="text-sm text-slate-400">
            Stay in the flow for 25 minutes.
          </p>
        </div>
        <div className="rounded-full bg-amber-500/15 px-3 py-1 text-sm font-medium text-amber-300">
          Focus
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full border-xl border-sky-400/20 bg-gradient-to-br from-sky-700 to-violet-500 text-3xl font-semibold text-white shadow-lg shadow-sky-900/40">
          25:00
        </div>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 transition-all duration-500" />
      </div>
      <p className="mt-3 text-sm text-slate-400">Session progress</p>
    </GlassCard>
  );
};

export default Timer;
