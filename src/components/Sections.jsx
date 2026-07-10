import React from "react";
import { Clock3, TreePalm, Trophy } from "lucide-react";
import GlassCard from "./GlassCard";

const Sections = () => {
  const summaryCards = [
    {
      title: "Focus Score",
      value: "87%",
      change: "+6 this week",
      accent: "from-sky-500 to-cyan-400",
    },
    {
      title: "Deep Work",
      value: "4.2h",
      change: "2 sessions",
      accent: "from-violet-500 to-fuchsia-400",
    },
    {
      title: "Completed",
      value: "18",
      change: "9 pending",
      accent: "from-emerald-500 to-lime-400",
    },
  ];
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {summaryCards.map((card) => (
        <GlassCard key={card.title} highlighted={card.title === "Focus Score"}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400">{card.title}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">
                {card.value}
              </p>
            </div>
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-r ${card.accent} shadow-lg transition duration-300 group-hover:scale-110`}>
              {card.title === "Focus Score" ? (
                <Trophy size={18} className="text-white" />
              ) : card.title === "Deep Work" ? (
                <Clock3 size={18} className="text-white" />
              ) : (
                <TreePalm size={18} className="text-white" />
              )}
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400">{card.change}</p>
        </GlassCard>
      ))}
    </section>
  );
};

export default Sections;
