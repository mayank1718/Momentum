import React from "react";
import GlassCard from "./GlassCard";
import { ArrowUpRight } from "lucide-react";

const Recent = () => {
  const activities = [
    { title: "Completed project brief", detail: "5 mins ago" },
    { title: "Saved 3 focus clips", detail: "21 mins ago" },
    { title: "Updated weekly plan", detail: "1 hr ago" },
  ];
  return (
    <GlassCard>
      <p className="text-sm font-semibold text-slate-100">Recent Activity</p>
      <div className="mt-4 space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex items-start gap-3 rounded-2xl border border-slate-700/70 bg-slate-800/70 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-300 transition duration-300 group-hover:scale-110">
              <ArrowUpRight size={16} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-100">
                {activity.title}
              </p>
              <p className="mt-1 text-sm text-slate-400">{activity.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default Recent;
