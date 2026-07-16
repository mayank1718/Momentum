import {
  ArrowUpRight,
  BadgeCheck,
  CircleDashed,
  ClipboardList,
  Clock3,
  Flame,
  MoonStar,
  RotateCw,
  Search,
  Section,
  Sparkles,
  SquarePen,
  Target,
  Trash,
  TreePalm,
  Trophy,
  Waves,
} from "lucide-react";
import React, { useContext } from "react";
import GlassCard from "./GlassCard";
import TaskContext from "../context/TaskContext";

const Todo = () => {
  const { taskData, setShowPortalForm, setTaskData, setIsEdit, setEditId, setFormData } =
    useContext(TaskContext);

  const handleDelete = (idx) => {
    const copy = [...taskData];
    copy.splice(idx, 1);
    setTaskData(copy);
  };

  const handleEdit = (task) => {
    setEditId(task.id);
    setIsEdit(true);
    setShowPortalForm(true);
    setFormData(task)
  };

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
      <div className="mt-3 space-y-3 lg:max-h-55 max-h-65  overflow-auto scrollbar-thumb-gray-800 p-1.5">
        {taskData.length === 0 ? (
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-slate-500 text-sm">
              <ClipboardList size={25} />
            </p>
            <p className="text-slate-500 text-sm"> Nothing here yet-</p>
            <p className="text-slate-500 text-sm">
              {" "}
              Add your first task to start your progress.{" "}
            </p>
            <button
              onClick={() => setShowPortalForm(true)}
              className="mt-4 px-5 py-2 border rounded-xl border-sky-400/20 bg-sky-400/10 hover:bg-sky-400/20 transition text-sky-200 text-sm font-medium cursor-pointer hover:-translate-y-1 active:scale-95 duration-300 hover:shadow-lg hover:shadow-sky-400/20">
              Add Task
            </button>
          </div>
        ) : (
          taskData.map((task, idx) => {
            return (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-800/70 px-3 py-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-sky-500/15">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${task.progressState === "complete" ? "bg-emerald-500/15  text-emerald-300" : task.progressState === "pending" ? "text-sky-400 bg-blue-100/15" : "text-orange-400 bg-orange-100/15"}`}>
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
                    <p className="text-sm line-clamp-1 w-30 text-slate-400">
                      {task.description}
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

                <div className="flex gap-2.5">
                  <button className="text-slate-500 bg-white/5 hover:text-sky-400 p-2 rounded-full hover:scale-105 cursor-pointer">
                    {" "}
                    <SquarePen
                      onClick={() => handleEdit(task)}
                      size={18}
                    />{" "}
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="text-slate-500 bg-white/5 hover:text-orange-400 p-2 rounded-full hover:scale-105 cursor-pointer">
                    {" "}
                    <Trash size={18} />{" "}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </GlassCard>
  );
};

export default Todo;
