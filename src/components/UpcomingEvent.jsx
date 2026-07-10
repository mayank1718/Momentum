import React from "react";
import GlassCard from "./GlassCard";

const UpcomingEvent = () => {
  const events = [
    { title: "Product launch", time: "Tomorrow · 10:00" },
    { title: "Coffee with Maya", time: "Thursday · 16:00" },
  ];
  return (
    <GlassCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">
            Upcoming Events
          </p>
          <p className="text-sm text-slate-400">
            Next milestones on your calendar.
          </p>
        </div>
        <div className="rounded-full bg-pink-500/15 px-3 py-1 text-sm font-medium text-pink-300">
          2 events
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {events.map((event) => (
          <div
            key={event.title}
            className="rounded-2xl border border-slate-700/70 bg-slate-800/70 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-medium text-slate-100">{event.title}</p>
            <p className="mt-1 text-sm text-slate-400">{event.time}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default UpcomingEvent;
