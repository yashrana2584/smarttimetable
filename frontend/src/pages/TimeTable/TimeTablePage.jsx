import DashboardHeader from "../../components/timetable/DashboardHeader";
import DashboardStats from "../../components/timetable/DashboardStats";
import TimetableGrid from "../../components/timetable/TimetableGrid";
import Toolbar from "../../components/timetable/Toolbar";

export default function TimetablePage() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <div className="mx-auto max-w-7xl space-y-8">

        <DashboardHeader />

        <DashboardStats />
        <Toolbar />
        <TimetableGrid />

      </div>

    </div>
  );
}