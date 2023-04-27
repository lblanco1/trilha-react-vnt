import { createContext, useEffect, useState } from "react";

const taskInitValues = [];

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(taskInitValues);

  const getTasks = () => {
    fetch("http://localhost:3001/tasks").then((response) =>
      setTasks(response.data)
    );
  };

  useEffect(() => {
    console.log("Chamou")
    getTasks;
  }, []);

  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
};
