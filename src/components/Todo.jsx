import {
  ArrowUpRight,
  Clock3,
  Flame,
  MoonStar,
  Search,
  Section,
  Sparkles,
  Target,
  TreePalm,
  Trophy,
  Waves,
} from "lucide-react";
import React from "react";
import GlassCard from "./GlassCard";

const Todo = () => {
  const tasks = [
    { title: "Design review", time: "09:30", done: true },
    { title: "Write sprint notes", time: "11:00", done: false },
    { title: "Inbox cleanup", time: "15:00", done: false },
  ];

  return (
    <GlassCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Today’s Tasks</p>
          <p className="text-sm text-slate-400">
            A calm and focused plan for the day.
          </p>
        </div>
        <div className="rounded-full bg-sky-500/15 px-3 py-1 text-sm font-medium text-sky-300">
          3 items
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-800/70 px-3 py-3 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${task.done ? "bg-emerald-500/15 text-emerald-300" : "bg-slate-700/80 text-slate-300"}`}>
                {task.done ? <Sparkles size={14} /> : <Clock3 size={14} />}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-100">
                  {task.title}
                </p>
                <p className="text-xs text-slate-500">{task.time}</p>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-400">
              {task.done ? "Done" : "Pending"}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default Todo;
