import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const HabitContext = createContext();

export const useHabits = () => useContext(HabitContext);

export const HabitProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  // Load habits from localStorage when user logs in
  useEffect(() => {
    if (user) {
      const key = `habits_${user.number}`;
      const stored = JSON.parse(localStorage.getItem(key)) || [];
      setHabits(stored);
    }
  }, [user]);

  // Save habits to localStorage when they change
  useEffect(() => {
    if (user) {
      const key = `habits_${user.number}`;
      localStorage.setItem(key, JSON.stringify(habits));
    }
  }, [habits, user]);

  const addHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const toggleDay = (habitId, dayIndex) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              days: habit.days.map((done, i) =>
                i === dayIndex ? !done : done
              ),
            }
          : habit
      )
    );
  };

  const clearHabits = () => {
    const key = `habits_${user?.number}`;
    localStorage.removeItem(key);
    setHabits([]);
  };

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  return (
    <HabitContext.Provider
      value={{ habits, addHabit, toggleDay, clearHabits, deleteHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};






/*import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  // Load habits for current user
  useEffect(() => {
    if (user) {
      const stored = JSON.parse(localStorage.getItem(`habits_${user.number}`)) || [];
      setHabits(stored);
    }
  }, [user]);

  // Save habits to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(`habits_${user.number}`, JSON.stringify(habits));
    }
  }, [habits, user]);

  // Add new habit
  const addHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  // Toggle day for a habit
  const toggleDay = (habitId, dayIndex) => {
    const updated = habits.map((habit) =>
      habit.id === habitId
        ? {
            ...habit,
            days: habit.days.map((done, i) =>
              i === dayIndex ? !done : done
            ),
          }
        : habit
    );
    setHabits(updated);
  };

  const clearHabits = () => {
    setHabits([]);
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleDay, clearHabits }}>
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => useContext(HabitContext);
*/