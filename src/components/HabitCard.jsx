import React from "react";
import { useHabits } from "../context/HabitContext";
import { MdDeleteForever } from "react-icons/md";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const HabitCard = ({ habit }) => {
  const { toggleDay, deleteHabit } = useHabits();

  return (
    <div className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200">
      {/* Delete Button */}
      <button
        onClick={() =>
          confirm("Are you sure you want to delete this habit?") &&
          deleteHabit(habit.id)
        }
        className="absolute top-2 right-2 text-red-500 hover:text-red-600 text-xl"
        title="Delete habit"
      >
        <MdDeleteForever />
      </button>

      {/* Top Info Row */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
            <span
              className="w-4 h-4 rounded-full inline-block"
              style={{ backgroundColor: habit.color }}
            ></span>
            {habit.name}
          </h3>
          <p className="text-sm text-gray-500">{habit.category}</p>
        </div>

        <span className="text-sm font-medium text-green-700">
          ✅ Streak: {habit.days.filter(Boolean).length}
        </span>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, i) => (
          <button
            key={i}
            onClick={() => toggleDay(habit.id, i)}
            className={`text-xs sm:text-sm py-2 rounded-md font-semibold transition-all ${
              habit.days[i]
                ? "bg-green-500 text-white shadow-sm"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HabitCard;
