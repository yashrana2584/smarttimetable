import { useProject } from "../../../context/ProjectContext";
import AddRoomButton from "./AddRoomButton";
import EmptyRoom from "./EmptyRoom";
import RoomCard from "./RoomCard";
import RoomStats from "./RoomStats";
import { useState } from "react";
import RoomSearch from "./RoomSearch";
import RoomFilters from "./RoomFilters";

const RoomList = () => {
  const { project } = useProject();
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredRooms = project.rooms.filter((room) => {
  const q = search.toLowerCase();

  const matchesSearch =
    room.roomNumber.toLowerCase().includes(q) ||
    room.building.toLowerCase().includes(q) ||
    room.department.toLowerCase().includes(q);

  const matchesFilter =
    selectedFilter === "All" || room.type === selectedFilter;

  return matchesSearch && matchesFilter;
});

  return (
  <div className="space-y-6">

    <RoomStats />

    <div className="space-y-4">

  <div className="flex flex-col md:flex-row gap-4 items-center">
    <RoomSearch
      value={search}
      onChange={setSearch}
    />

    <AddRoomButton />
  </div>

  <RoomFilters
    selected={selectedFilter}
    onSelect={setSelectedFilter}
  />

</div>

    {project.rooms.length === 0 ? (
    <EmptyRoom />
) : filteredRooms.length === 0 ? (
    <div className="bg-white border rounded-xl p-10 text-center">
        <h3 className="text-lg font-semibold text-slate-700">
            No matching rooms found
        </h3>

        <p className="text-slate-500 mt-2">
            Try searching with a different keyword.
        </p>
    </div>
) : (
    <div className="space-y-6">
        {filteredRooms.map((room) => (
            <RoomCard
                key={room.id}
                room={room}
            />
        ))}
    </div>
)}

  </div>
);
};

export default RoomList;