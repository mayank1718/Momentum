import React, { useEffect, useState } from "react";
import GlassCard from "./GlassCard";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Work");
  const [timeLeft, setTimeLeft] = useState(2);
  const [completedSession, setCompletedSession] = useState(1);

  const min = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const sec = (timeLeft % 60).toString().padStart(2, "0");

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft((prev) => prev - 1);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, timeLeft]);

  return (
    <GlassCard highlighted>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Pomodoro Timer</p>
          <p className="text-sm text-slate-400">
            Stay in the flow for 25 minutes.
          </p>
        </div>
        <div
          className={
            mode == "Work"
              ? "rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-green-300"
              : mode == "Sort break"
                ? "rounded-full bg-amber-500/15 px-3 py-1 text-sm font-medium text-amber-300"
                : "rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-medium text-sky-300"
          }>
          {mode}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <div
          onClick={() => {
            setIsRunning(!isRunning);
          }}
          className="flex h-32 w-32 items-center justify-center rounded-full border-xl border-sky-400/20 bg-gradient-to-br from-sky-700 to-violet-500 text-3xl font-semibold text-white shadow-lg shadow-sky-900/40">
          {min} : {sec}
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
