import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("currentUser"))
  );

  // 🔐 LOGIN
  const login = (number, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.number === number);

    if (!existingUser) {
      return { success: false, message: "User not found" };
    }

    if (existingUser.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      setUser(existingUser);
      return { success: true };
    } else {
      return { success: false, message: "Wrong password" };
    }
  };

  // 🆕 SIGNUP
  const register = (number, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.number === number);

    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    const newUser = { number, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
