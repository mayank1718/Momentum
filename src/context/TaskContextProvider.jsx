import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskContextProvider = ({children}) => {
  const [showPortalForm, setShowPortalForm] = useState(false);

  return (
    <TaskContext.Provider value={{ showPortalForm, setShowPortalForm }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
