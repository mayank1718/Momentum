import React from "react";
import GlassCard from "./GlassCard";

const Quotes = () => {
  return (
    <GlassCard>
      <p className="text-sm font-semibold text-slate-100">Motivational Quote</p>
      <p className="mt-3 text-lg font-medium italic text-slate-200">
        “Small steady efforts outpace big bursts of motivation.”
      </p>
      <p className="mt-3 text-sm text-slate-400">— Daily momentum note</p>
    </GlassCard>
  );
};

export default Quotes;
