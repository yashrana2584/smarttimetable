import LectureCard from "./LectureCard";
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const slots = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 01:00",
];

export default function TimetableGrid() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const slots = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 01:00",
  ];

  return (
  <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">

    {/* Header */}

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

    <table className="w-full border-collapse">

        <thead>

          <tr>

            <th className="border border-slate-700 p-4 text-left text-cyan-300 uppercase tracking-wider text-sm">
              Time
            </th>

            {days.map((day) => (
              <th
                key={day}
                className="border border-slate-700 p-4 text-center text-cyan-300 uppercase tracking-wider text-sm"
              >
                {day}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {slots.map((slot) => (

            <tr key={slot}>

              <td className="border border-slate-700 bg-slate-800 p-4 font-semibold text-slate-300">
  {slot}
</td>

              {days.map((day, index) => (

  <td
  key={day}
  className="h-32 border border-slate-700 p-3 align-middle"
>

    {slot === "08:00 - 09:00" && index === 0 && (
      <LectureCard
        subject="DBMS"
        faculty="Prof. Patel"
        room="C-204"
        type="Theory"
      />
    )}

  </td>

))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}