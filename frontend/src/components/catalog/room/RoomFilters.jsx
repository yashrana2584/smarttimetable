import { Building2, Monitor, FlaskConical, Zap, Cpu, Hammer, Presentation } from "lucide-react";

const filters = [
  { label: "All", value: "All", icon: null },
  { label: "Classroom", value: "Classroom", icon: Building2 },
  { label: "Computer Lab", value: "Computer Lab", icon: Monitor },
  { label: "Electronics Lab", value: "Electronics Lab", icon: Cpu },
  { label: "Electrical Lab", value: "Electrical Lab", icon: Zap },
  { label: "Chemistry Lab", value: "Chemistry Lab", icon: FlaskConical },
  { label: "Workshop", value: "Workshop", icon: Hammer },
  { label: "Seminar Hall", value: "Seminar Hall", icon: Presentation },
];

const chipColors = {
  Classroom: "bg-blue-500/10 text-blue-400",
  "Computer Lab": "bg-violet-500/10 text-violet-400",
  "Electronics Lab": "bg-cyan-500/10 text-cyan-400",
  "Electrical Lab": "bg-yellow-500/10 text-yellow-300",
  "Chemistry Lab": "bg-green-500/10 text-green-400",
  Workshop: "bg-orange-500/10 text-orange-400",
  "Seminar Hall": "bg-pink-500/10 text-pink-400",
};

const RoomFilters = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const Icon = filter.icon;

        return (
          <button
            key={filter.value}
            onClick={() => onSelect(filter.value)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
              ${
                selected === filter.value
  ? "bg-cyan-500 text-white shadow-md"
  : `${chipColors[filter.value] ?? "bg-white text-slate-700"} border border-slate-700 hover:brightness-110`
              }`}
          >
            {Icon && <Icon size={16} />}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default RoomFilters;