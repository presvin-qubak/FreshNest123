
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });


  // Apply dark mode to body
  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem(
      "darkMode",
      darkMode
    );

  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };


  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};


export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

