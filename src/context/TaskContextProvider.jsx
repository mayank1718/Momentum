import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskContextProvider = ({children}) => {

  const [taskData, setTaskData] = useState([])

  const [showPortalForm, setShowPortalForm] = useState(false);

  return (
    <TaskContext.Provider value={{ showPortalForm, setShowPortalForm, taskData, setTaskData }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
