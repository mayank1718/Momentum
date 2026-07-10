import React from 'react'
import GlassCard from './GlassCard';

const HabitTracker = () => {
const habits = [
  { label: "Hydration", value: 82, color: "bg-sky-500" },
  { label: "Reading", value: 64, color: "bg-violet-500" },
  { label: "Sleep", value: 91, color: "bg-emerald-500" },
];

    return (
    <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  Habit Tracker
                </p>
                <p className="text-sm text-slate-400">
                  Consistency compounds over time.
                </p>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">
                78% streak
              </div>
            </div>
            <div className="mt-4 space-y-4">
              {habits.map((habit) => (
                <div key={habit.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{habit.label}</span>
                    <span>{habit.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={`h-full rounded-full ${habit.color} transition-all duration-500`}
                      style={{ width: `${habit.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
  )
}

export default HabitTracker
