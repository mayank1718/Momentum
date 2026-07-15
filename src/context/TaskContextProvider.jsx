import React, { useEffect, useState } from "react";
import TaskContext from "./TaskContext";

const TaskContextProvider = ({ children }) => {
  const [taskData, setTaskData] = useState(() => {
    const savedData = localStorage.getItem("tasks");
    return savedData ? JSON.parse(savedData) : [];
  });  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskData));
  }, [taskData]);

  const [showPortalForm, setShowPortalForm] = useState(false);

  return (
    <TaskContext.Provider
      value={{ showPortalForm, setShowPortalForm, taskData, setTaskData }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
