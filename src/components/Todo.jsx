import {
  ArrowUpRight,
  BadgeCheck,
  CircleDashed,
  Clock3,
  Flame,
  MoonStar,
  RotateCw,
  Search,
  Section,
  Sparkles,
  Target,
  TreePalm,
  Trophy,
  Waves,
} from "lucide-react";
import React, { useContext } from "react";
import GlassCard from "./GlassCard";
import TaskContext from "../context/TaskContext";

const Todo = () => {
  const { taskData } = useContext(TaskContext);

  return (
    <GlassCard className="min-h-76">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold text-slate-100">Today’s Tasks</p>
          <p className="text-sm text-slate-400">
            A calm and focused plan for the day.
          </p>
        </div>
        <div className="rounded-full bg-sky-500/15 px-3 py-1 text-sm font-medium text-sky-300">
          {taskData.length} items
        </div>
      </div>
      <div className="mt-4 space-y-3 overflow-auto">
        {taskData.map((task) => {
          return (
            <div
              key={task.title}
              className="flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-800/70 px-3 py-3 transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${task.progressState === "complete" ? "bg-emerald-500/15 text-emerald-300" : "bg-slate-700/80 text-slate-300"}`}>
                  {task.progressState == "complete" ? (
                    <BadgeCheck size={14} />
                  ) : task.progressState == "pending" ? (
                    <Clock3 size={14} />
                  ) : (
                    <CircleDashed size={14} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-100">
                    {task.title}
                  </p>
                  <p className="text-xs text-slate-500">{task.time}</p>
                </div>
              </div>
              <div
                className={
                  task.progressState === "pending"
                    ? "text-sm font-medium text-slate-200 px-2 py-1.5 rounded-xl bg-linear-to-l from-[#0EA5E9] to-[#60A5FA]"
                    : task.progressState === "complete"
                      ? "text-sm font-medium text-slate-200 px-2 py-1.5 rounded-xl bg-linear-to-l from-[#059669] to-[#34D399]"
                      : "text-sm font-medium text-slate-200 px-2 py-1.5 rounded-xl bg-linear-to-r from-[#D99706] to-[#F59E0B]"
                }>
                {task.progressState === "complete"
                  ? "Completed"
                  : task.progressState === "pending"
                    ? "Pending"
                    : "In Progress"}
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
};

export default Todo;
