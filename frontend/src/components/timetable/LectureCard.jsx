export default function LectureCard({
  subject,
  faculty,
  room,
  type = "Theory",
}) {
  const isLab = type === "Lab";
<div className="mb-6 flex items-center justify-between">
  <div>
    <h2 className="text-2xl font-bold text-white">
      Weekly Timetable
    </h2>

    <p className="text-slate-400">
      Semester 5 • Division A
    </p>
  </div>
</div>

  return (
    <div
      className={`h-full w-full rounded-xl border p-3 transition-all duration-300
    hover:-translate-y-1 hover:shadow-xl
      ${
        isLab
          ? "border-purple-500/30 bg-purple-500/10 hover:border-purple-400"
          : "border-cyan-500/30 bg-cyan-500/10 hover:border-cyan-400"
      }`}
    >
      <h3 className="font-semibold text-white truncate">
        {subject}
      </h3>

      <p className="mt-1 text-sm text-slate-300 truncate">
        👨‍🏫 {faculty}
      </p>

      <p className="text-sm text-slate-400 truncate">
        🚪 {room}
      </p>

      <span
        className={`mt-3 inline-block rounded-full px-2 py-1 text-xs font-medium
        ${
          isLab
            ? "bg-purple-500/20 text-purple-300"
            : "bg-cyan-500/20 text-cyan-300"
        }`}
      >
        {type}
      </span>
    </div>
  );
}