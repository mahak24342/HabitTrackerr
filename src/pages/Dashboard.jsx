import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useHabits } from "../context/HabitContext";
import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const { clearHabits } = useHabits();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleClear = () => {
    if (confirm("Are you sure you want to delete all your habits?")) {
      clearHabits();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 via-white to-gray-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-md py-4 px-6 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">📋 HabitForge</h1>

        <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-2 sm:mt-0">
          <span className="text-sm sm:text-base"> {user?.number}</span>
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 font-medium px-5 py-1.5 rounded hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <HabitForm />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <HabitList />
        </div>

        {/* Optional: clear all habits button (you can remove if not needed) */}
        {/* 
        <div className="flex justify-end">
          <button
            onClick={handleClear}
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
          >
            🧹 Clear My Habits
          </button>
        </div> 
        */}
      </main>
    </div>
  );
};

export default Dashboard;



/*import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 via-white to-gray-100">
      
      <header className="bg-indigo-500 text-white shadow-md py-4 px-6 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">📋 HabitForge</h1>

        <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-2 sm:mt-0">
          <span className="text-sm sm:text-base"> Hello!  {user?.number}</span>
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 font-medium px-5 py-1.5 rounded hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </header>

     
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <HabitForm />
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <HabitList />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
*/
