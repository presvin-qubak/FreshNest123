
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {

  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem("notifications") !== "false";
  });


  useEffect(() => {
    localStorage.setItem(
      "notifications",
      notifications
    );
  }, [notifications]);


  const toggleNotifications = () => {
    setNotifications((previous) => !previous);
  };


  return (
    <NotificationContext.Provider
      value={{
        notifications,
        toggleNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};


export const useNotifications = () => {
  return useContext(NotificationContext);
};

