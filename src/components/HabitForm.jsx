import React, { useState } from "react";
import { useHabits } from "../context/HabitContext";
import { v4 as uuidv4 } from "uuid";

const HabitForm = () => {
  const { addHabit } = useHabits();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("#22c55e");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newHabit = {
      id: uuidv4(),
      name,
      category,
      color,
      days: Array(7).fill(false),
    };

    addHabit(newHabit);
    setName("");
    setCategory("");
    setColor("#22c55e");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 mb-6 space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-800">Add New Habit</h2>

      <input
        type="text"
        placeholder="Habit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="text"
        placeholder="Category (e.g. Fitness, Study)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-gray-700">Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-8 h-8 rounded border border-gray-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-medium py-2 rounded hover:bg-indigo-700 transition-colors"
      >
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
