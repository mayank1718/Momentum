import React, { useContext } from "react";
import TaskContext from "../../context/TaskContext";

const AddTaskBtn = () => {
  const { setShowPortalForm } = useContext(TaskContext);
  return (
    <div>
      <button
        onClick={() => setShowPortalForm(true)}
        className="cursor-pointer p-3 bg-linear-to-r from-sky-500 to-purple-500 rounded-2xl font-bold text-xl mt-3 lg:block hidden active:scale-95 transition-all ease-in">
        {" "}
        Add Task{" "}
      </button>
    </div>
  );
};

export default AddTaskBtn;
