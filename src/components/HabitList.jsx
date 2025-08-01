import React from "react";
import { useHabits } from "../context/HabitContext";
import HabitCard from "./HabitCard";

const HabitList = () => {
  const { habits } = useHabits();

  if (!habits.length) {
    return <p className="text-center text-gray-500">No habits yet. Add one above!</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;
