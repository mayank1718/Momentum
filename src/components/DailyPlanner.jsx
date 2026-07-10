import React from "react";
import GlassCard from "./GlassCard";

const DailyPlanner = () => {
  const planner = [
    { time: "08:00", title: "Morning planning", tag: "Mindset" },
    { time: "10:30", title: "Client sync", tag: "Work" },
    { time: "19:00", title: "Workout", tag: "Wellness" },
  ];

  return (
    <GlassCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Daily Planner</p>
          <p className="text-sm text-slate-400">
            Structured flow for the next few hours.
          </p>
        </div>
        <div className="rounded-full bg-violet-500/15 px-3 py-1 text-sm font-medium text-violet-300">
          Balanced
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {planner.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-800/70 px-3 py-3 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.time}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                {item.title}
              </p>
            </div>
            <div className="rounded-full bg-slate-700/80 px-3 py-1 text-xs font-medium text-slate-300">
              {item.tag}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default DailyPlanner;
