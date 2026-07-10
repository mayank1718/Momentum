import React from "react";
import GlassCard from "./GlassCard";

const Glance = () => {
  return (
    <GlassCard>
      <p className="text-sm font-semibold text-slate-100">Today at a glance</p>
      <div className="mt-5 space-y-3">
        <div className="rounded-2xl bg-linear-to-r from-sky-500/10 to-violet-500/10 p-3">
          <p className="text-sm font-medium text-slate-100">Flow state</p>
          <p className="mt-1 text-sm text-slate-400">
            You are 2 sessions away from your weekly goal.
          </p>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 to-lime-500/10 p-3">
          <p className="text-sm font-medium text-slate-100">Energy</p>
          <p className="mt-1 text-sm text-slate-400">
            Balanced and ready for the afternoon.
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default Glance;
