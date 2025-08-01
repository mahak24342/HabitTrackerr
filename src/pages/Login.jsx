// src/pages/Login.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, register } = useContext(AuthContext);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!/^\d{10}$/.test(number)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!/^\d{4}$/.test(password)) {
      setError("Password must be a 4-digit number.");
      return;
    }

    // Try login first
    const loginResult = login(number, password);

    if (loginResult.success) {
      // Logged in
      navigate("/");
    } else if (loginResult.message === "User not found") {
      // Try register as fallback
      const registerResult = register(number, password);
      if (registerResult.success) {
        // Registered & logged in
        navigate("/");
      } else {
        setError(registerResult.message);
      }
    } else {
      setError(loginResult.message); // Wrong password case
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login / Sign Up</h2>

        <input
          type="text"
          placeholder="Mobile Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          maxLength={10}
          required
        />

        <input
          type="password"
          placeholder="4-digit Password (OTP Style)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          maxLength={4}
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;
