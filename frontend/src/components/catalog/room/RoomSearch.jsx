import { Search } from "lucide-react";

const RoomSearch = ({ value, onChange }) => {
  return (
    <div className="relative flex-1 group">
  <Search
    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors duration-200 group-focus-within:text-cyan-500"
  />

  <input
    type="text"
    placeholder="Search by room number, building or department..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full rounded-2xl border border-slate-300 bg-white text-black placeholder:text-gray-500 caret-black pl-12 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500"
  />
</div>
  );
};

export default RoomSearch;