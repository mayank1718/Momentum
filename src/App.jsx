import {
  ArrowUpRight,
  Clock3,
  Flame,
  MoonStar,
  Quote,
  Search,
  Section,
  Sparkles,
  Target,
  TreePalm,
  Trophy,
  Waves,
} from "lucide-react";
import GlassCard from "./components/GlassCard";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Todo from "./components/Todo";
import DailyPlanner from "./components/DailyPlanner";
import Timer from "./components/Timer";
import Weather from "./components/Weather";
import Quotes from "./components/Quotes";
import HabitTracker from "./components/HabitTracker";
import UpcomingEvent from "./components/UpcomingEvent";
import Recent from "./components/Recent";
import QuickAction from "./components/QuickAction";
import Glance from "./components/Glance";
import NavBar from "./components/NavBar";
import FormPortal from "./components/model/FormPortal";
import { useContext } from "react";
import TaskContext from "./context/TaskContext";

function App() {
  const { showPortalForm } = useContext(TaskContext);

  return (
    <div className="min-h-screen px-3 py-4 text-slate-100 sm:px-5 lg:px-8 lg:py-8">
      {showPortalForm && <FormPortal />}
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:gap-6">
        <Header />
        <Sections />

        <div className="grid gap-4 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-4">
            <Todo />
            <DailyPlanner />
          </div>

          <div className="space-y-4">
            <Timer />
            <Weather />
            <Quotes />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <HabitTracker />
          <UpcomingEvent />
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr_0.95fr]">
          <Recent />

          <QuickAction />

          <Glance />
        </div>

        {/* Future functionality hooks: connect search, task selection, and nav state here. */}
        <NavBar />
      </div>
    </div>
  );
}

export default App;
