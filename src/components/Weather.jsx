import { Waves } from "lucide-react";
import React from "react";
import GlassCard from "./GlassCard";

const Weather = () => {
  return (
    <GlassCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Weather</p>
          <p className="text-sm text-slate-400">Cloudy with a gentle breeze.</p>
        </div>
        <Waves className="h-7 w-7 text-sky-400 transition duration-300 group-hover:rotate-12" />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-4xl font-semibold text-slate-50">18°</p>
          <p className="mt-1 text-sm text-slate-400">San Francisco</p>
        </div>
        <div className="rounded-2xl bg-sky-500/15 px-3 py-2 text-sm font-medium text-sky-300">
          Light jacket
        </div>
      </div>
    </GlassCard>
  );
};

export default Weather;
