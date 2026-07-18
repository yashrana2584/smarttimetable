import {
  Search,
  Download,
  RefreshCw,
  Filter,
} from "lucide-react";

export default function Toolbar() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">

      <div className="flex flex-wrap items-center justify-between gap-4">

        {/* Left */}

        <div className="flex flex-wrap gap-3">

          <select className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 outline-none focus:border-cyan-400">

            <option>Semester 5</option>

          </select>

          <select className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 outline-none focus:border-cyan-400">

            <option>Division A</option>

          </select>

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 transition hover:border-cyan-400">

            <Filter size={18} />

            Filters

          </button>

        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-3">

          <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-3">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              placeholder="Search..."
              className="bg-transparent px-3 py-2 outline-none"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 transition hover:border-cyan-400">

            <RefreshCw size={18} />

            Generate Again

          </button>

          <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-900 transition hover:scale-105">

            <Download size={18} />

            Export

          </button>

        </div>

      </div>

    </div>
  );
}