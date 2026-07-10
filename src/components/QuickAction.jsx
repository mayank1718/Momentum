import React from "react";
import GlassCard from "./GlassCard";

const QuickAction = () => {
  const actions = ["Plan day", "Start focus", "Review notes"];

  return (
    <GlassCard>
      <p className="text-sm font-semibold text-slate-100">Quick Actions</p>
      <div className="mt-4 grid gap-3">
        {actions.map((action) => (
          <button
            key={action}
            className="rounded-2xl border border-slate-700/70 bg-slate-800/80 px-3 py-3 text-left text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md">
            {action}
          </button>
        ))}
      </div>
    </GlassCard>
  );
};

export default QuickAction;
