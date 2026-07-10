const GlassCard = ({ children, className = "", highlighted = false }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-slate-500/70 bg-slate-900/70 p-4 shadow-[0_20px_60px_-24px_rgba(2,6,23,0.85)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-sky-300/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.4),0_30px_80px_-24px_rgba(56,189,248,0.24)] sm:p-5 ${highlighted ? "ring-2 ring-sky-800/40" : ""} ${className}`}>
      <div className="absolute inset-0 bg-linear-to-br from-slate-100/10 via-slate-900/20 to-transparent opacity-80" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
