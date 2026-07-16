import React, { useEffect, useState } from "react";
import TaskContext from "./TaskContext";

const TaskContextProvider = ({ children }) => {
  const [taskData, setTaskData] = useState(() => {
    const savedData = localStorage.getItem("tasks");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskData));
  }, [taskData]);

  const [showPortalForm, setShowPortalForm] = useState(false);

    const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    date: "",
    time: "",
    category: "",
    priority: "",
    progressState: "",
  });

  return (
    <TaskContext.Provider
      value={{
        showPortalForm,
        setShowPortalForm,
        taskData,
        setTaskData,
        isEdit,
        editId,
        setIsEdit,
        setEditId,
        setFormData,
        formData
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
