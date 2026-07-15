import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import TaskContext from "../../context/TaskContext";

const FormPortal = () => {
  const { setShowPortalForm, setTaskData, taskData } = useContext(TaskContext);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskData((prev) => [...prev, formData]);
    setFormData({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      date: "",
      time: "",
      category: "",
      priority: "",
      progressState: "",
    });
    console.log(taskData.id);
    
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return createPortal(
    <div className="bg-black/70 inset-0 flex justify-center items-center w-full h-screen fixed p-3">
      <form
        onSubmit={handleSubmit}
        className="lg:w-[50%] border border-cyan-400/20 lg:min-h-[70%] h-[80%] w-full flex items-start backdrop-blur-xl bg-[#1B2530]/80  rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.35)] flex-col p-3 gap-3">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl font-bold text-sky-500 font-mono">
            Start Your Momentum -
          </h2>
          <button
            onClick={() => setShowPortalForm(false)}
            className="px-6 py-3 active:scale-95 active:shadow-[0_6px_15px_rgba(56,189,248,0.35)] border border-orange-400 rounded-xl">
            Back
          </button>
        </div>
        <div className="flex flex-col gap-2 w-full font-semibold font-sans">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="px-1.5 py-3 bg-[#222C4B] w-full rounded-lg focus:border-cyan-400 focus:shadow-[0_6px_15px_rgba(56,189,248,0.35)] focus:scale-102 transition-all ease-in focus:outline-none placeholder:text-slate-400"
            type="text"
            placeholder="Task Title..."
            required
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="px-1.5 py-3 bg-[#222C4B] w-full rounded-lg focus:border-cyan-400 focus:shadow-[0_6px_15px_rgba(56,189,248,0.35)] focus:scale-102 transition-all ease-in focus:outline-none placeholder:text-slate-400"
            type="text"
            placeholder="Task Description..."
            required
          />
        </div>
        <div className="flex justify-between w-full">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-[48%] bg-[#222C4B] rounded-xl px-1.5 py-3 text-white  outline-none transition-all focus:border-cyan-400 focus:shadow-[0_6px_15px_rgba(56,189,248,0.35)]">
            <option value="" disabled>
              Select Category
            </option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="personal">Personal</option>
            <option value="health">Health</option>
          </select>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-[48%] bg-[#222C4B] rounded-xl px-1.5 py-3 text-white outline-none transition-all focus:border-cyan-400 focus:shadow-[0_6px_15px_rgba(56,189,248,0.35)]">
            <option value="" disabled>
              Select Priority
            </option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex justify-between w-full font-sans">
          <input
            className="px-1.5 py-3 bg-[#222C4B] w-[48%] rounded-lg focus:border-cyan-400 focus:shadow-[0_6px_15px_rgba(56,189,248,0.35)] focus:scale-102 transition-all ease-in focus:outline-none placeholder:text-slate-400"
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            placeholder="Enter Date"
          />
          <input
            className="px-1.5 py-3 bg-[#222C4B] w-[48%] rounded-lg focus:border-cyan-400 focus:shadow-[0_6px_15px_rgba(56,189,248,0.35)] focus:scale-102 transition-all ease-in focus:outline-none placeholder:text-slate-400"
            name="time"
            value={formData.time}
            onChange={handleChange}
            type="time"
            placeholder="Enter Time"
          />
        </div>
        <div className="flex justify-center w-full">
          <select
            name="progressState"
            value={formData.progressState}
            onChange={handleChange}
            className="w-full bg-[#222C4B] rounded-xl px-1.5 py-3 text-white font-medium outline-none transition-all focus:border-cyan-400 focus:shadow-[0_6px_15px_rgba(56,189,248,0.35)]">
            <option value="" disabled>
              Progress State
            </option>
            <option value="pending">Pending</option>
            <option value="progress">In Progress</option>
            <option value="complete">Completed</option>
          </select>
        </div>
        <div className="flex justify-between w-full mt-4">
          <button onClick={handleSubmit} className="px-6 py-3 active:scale-95 active:shadow-[0_6px_15px_rgba(56,189,248,0.35)] border border-cyan-400 rounded-xl">
            Add Task
          </button>
          <button
            onClick={() => setShowPortalForm(false)}
            className="px-6 py-3 active:scale-95 active:shadow-[0_6px_15px_rgba(56,189,248,0.35)] border border-orange-400 rounded-xl">
            Cancel
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("model-root"),
  );
};

export default FormPortal;
