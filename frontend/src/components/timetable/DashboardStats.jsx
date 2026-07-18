import { useProject } from "../../context/ProjectContext";
import {
  BookOpen,
  GraduationCap,
  DoorOpen,
  Users,
} from "lucide-react";

export default function DashboardStats() {

  const { project } = useProject();

  const stats = [
    {
      title: "Subjects",
      value: project.subjects?.length ?? 0,
      icon: BookOpen,
    },
    {
      title: "Faculty",
      value: project.faculty?.length ?? 0,
      icon: GraduationCap,
    },
    {
      title: "Rooms",
      value: project.rooms?.length ?? 0,
      icon: DoorOpen,
    },
    {
      title: "Divisions",
      value: project.divisions?.length ?? 0,
      icon: Users,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {item.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-cyan-500/10 p-4">
                <Icon
                  size={28}
                  className="text-cyan-400"
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}