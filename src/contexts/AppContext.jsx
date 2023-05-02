import { createContext, useEffect, useState } from "react";
import { api } from "../services/service";

const taskInitValues = [];

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(taskInitValues);

    useEffect(() => {
        api.get("/tasks").then(response => {setTasks(response.data)
          console.log('teste: ',response.data)
        })
    }, [])

  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
};
