import { DoorOpen, Trash2 } from "lucide-react";
import { useProject } from "../../../context/ProjectContext";
import ConfirmDialog from "../../ui/ConfirmDialog";
import { useState } from "react";

const RoomCard = ({ room }) => {
  const { project, updateRoom, deleteRoom } = useProject();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const duplicateRoomNumber =
    room.roomNumber.trim() !== "" &&
    project.rooms.filter(
      (r) =>
        r.roomNumber.trim().toUpperCase() ===
          room.roomNumber.trim().toUpperCase() &&
        r.id !== room.id
    ).length > 0;

 const validationErrors = [];

if (!room.roomNumber.trim())
  validationErrors.push("Room Number is required");

if (!room.building.trim())
  validationErrors.push("Building is required");

if (!room.department.trim())
  validationErrors.push("Department is required");

if (room.capacity <= 0)
  validationErrors.push("Capacity must be greater than 0");

switch (room.type) {
  case "Classroom":
    if (!room.hasProjector)
      validationErrors.push("Classroom should have a projector.");
    break;

  case "Computer Lab":
    if (!room.hasComputers)
      validationErrors.push("Computer Lab requires computers.");

    if (!room.hasInternet)
      validationErrors.push("Computer Lab requires internet.");
    break;

  case "Seminar Hall":
    if (!room.hasProjector)
      validationErrors.push("Seminar Hall requires a projector.");
    break;

  case "Electronics Lab":
  case "Electrical Lab":
  case "Chemistry Lab":
  case "Workshop":
    // No mandatory facilities for now
    break;

  default:
    break;
}

const isAiReady = validationErrors.length === 0;

  const update = (field, value) => {
    updateRoom(room.id, {
      [field]: value,
    });
  };

 return (
  <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

    {/* ================= HEADER ================= */}

    <div className="mb-8 flex items-start justify-between">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-cyan-500/10 p-3">
          <DoorOpen
            size={22}
            className="text-cyan-400"
          />
        </div>

        <div>

          <h2 className="text-xl font-bold text-white">
            {room.roomNumber || "New Room"}
          </h2>

          <div className="mt-2 flex items-center gap-3">

            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
              {room.type}
            </span>

            {isAiReady ? (
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                ✓ AI Ready
              </span>
            ) : (
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-400">
                Incomplete
              </span>
            )}

          </div>

        </div>

      </div>

      <button
        onClick={() => setShowDeleteDialog(true)}
        className="rounded-xl p-2 text-slate-400 transition-all duration-200 hover:bg-red-500 hover:text-white"
      >
        <Trash2 size={18} />
      </button>

    </div>

    {/* ================= GENERAL INFORMATION ================= */}

    <div>

      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-700"></div>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          General Information
        </h3>

        <div className="h-px flex-1 bg-slate-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Room Number */}

        <div>

          <label className="mb-2 block text-sm text-slate-300">
            Room Number
          </label>

          <input
            value={room.roomNumber}
            onChange={(e) =>
              update("roomNumber", e.target.value.toUpperCase())
            }
            placeholder="A-101"
            className={`w-full rounded-xl border ${
              duplicateRoomNumber
                ? "border-red-500"
                : "border-slate-700"
            } bg-slate-800 px-4 py-3 text-white`}
          />

          {duplicateRoomNumber && (
            <p className="mt-2 text-sm text-red-400">
              Room number already exists.
            </p>
          )}

        </div>

        {/* Building */}

        <div>

          <label className="mb-2 block text-sm text-slate-300">
            Building
          </label>

          <input
            value={room.building}
            onChange={(e) =>
              update("building", e.target.value)
            }
            placeholder="Block A"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

        </div>

      </div>

      <div className="mt-5">

        <label className="mb-2 block text-sm text-slate-300">
          Department
        </label>

        <input
          value={room.department}
          onChange={(e) =>
            update("department", e.target.value)
          }
          placeholder="Computer Science"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
        />

      </div>

    </div>

    {/* ================= ROOM DETAILS ================= */}

    <div className="mt-8">

      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-700"></div>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Room Details
        </h3>

        <div className="h-px flex-1 bg-slate-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>

          <label className="mb-2 block text-sm text-slate-300">
            Room Type
          </label>

          <select
            value={room.type}
            onChange={(e) =>
              update("type", e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          >
            <option>Classroom</option>
            <option>Computer Lab</option>
            <option>Electronics Lab</option>
            <option>Electrical Lab</option>
            <option>Chemistry Lab</option>
            <option>Workshop</option>
            <option>Seminar Hall</option>
          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm text-slate-300">
            Capacity
          </label>

          <input
            type="number"
            min="1"
            value={room.capacity}
            onChange={(e) =>
              update("capacity", Number(e.target.value))
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

        </div>

      </div>

    </div>

    {/* ================= FACILITIES ================= */}

    <div className="mt-8">

      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-700"></div>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Facilities
        </h3>

        <div className="h-px flex-1 bg-slate-700"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        <label className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 p-3 text-white transition hover:border-cyan-500">
          <input
            type="checkbox"
            checked={room.hasProjector}
            onChange={(e) =>
              update("hasProjector", e.target.checked)
            }
          />
          Projector
        </label>

        <label className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 p-3 text-white transition hover:border-cyan-500">
          <input
            type="checkbox"
            checked={room.hasComputers}
            onChange={(e) =>
              update("hasComputers", e.target.checked)
            }
          />
          Computers
        </label>

        <label className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 p-3 text-white transition hover:border-cyan-500">
          <input
            type="checkbox"
            checked={room.hasInternet}
            onChange={(e) =>
              update("hasInternet", e.target.checked)
            }
          />
          Internet
        </label>

        <label className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 p-3 text-white transition hover:border-cyan-500">
          <input
            type="checkbox"
            checked={room.hasAC}
            onChange={(e) =>
              update("hasAC", e.target.checked)
            }
          />
          Air Conditioning
        </label>

      </div>

    </div>

    {/* ================= ADDITIONAL NOTES ================= */}

    <div className="mt-8">

      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-700"></div>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Additional Notes
        </h3>

        <div className="h-px flex-1 bg-slate-700"></div>
      </div>

      <textarea
        rows={4}
        value={room.notes}
        onChange={(e) =>
          update("notes", e.target.value)
        }
        placeholder="Additional information about this room..."
        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
      />

    </div>
<ConfirmDialog
  open={showDeleteDialog}
  variant="danger"
  title="Delete Room?"
  message={`Are you sure you want to delete room "${room.roomNumber || "New Room"}"? This action cannot be undone.`}
  confirmText="Delete"
  cancelText="Cancel"
  onCancel={() => setShowDeleteDialog(false)}
  onConfirm={() => {
    deleteRoom(room.id);
    setShowDeleteDialog(false);
  }}
/>
  </div>
);
}

export default RoomCard;