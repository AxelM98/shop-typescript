import React, { createContext, useEffect, useState } from "react";

interface ContextProps {
  darkMode: boolean;
  toggle: () => void;
}

export const DarkModeContext = createContext<ContextProps>({
  darkMode: false,
  toggle: () => {},
});

interface DarkModeContextProviderProps {
  children: React.ReactNode;
}

export const DarkModeContextProvider: React.FC<
  DarkModeContextProviderProps
> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    JSON.parse(localStorage.getItem("darkMode")!) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
