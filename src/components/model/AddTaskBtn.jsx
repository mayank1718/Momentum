import React from "react";

const AddTaskBtn = () => {
  return (
    <div>
      <button className="cursor-pointer p-3 bg-linear-to-r from-sky-500 to-purple-500 rounded-2xl font-bold text-xl mt-3 lg:block hidden active:scale-95 transition-all ease-in">
        {" "}
        Add Task{" "}
      </button>
    </div>
  );
};

export default AddTaskBtn;
