import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  }
  return "light";
};

export function AuthProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AuthContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
