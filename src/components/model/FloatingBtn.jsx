import React from "react";

const FloatingBtn = ({ setPortalModel, portalModel }) => {
  return (
    <button
      onClick={() => {
        setPortalModel(!portalModel);
      }}
      className="flex flex-col items-center rounded-full bg-linear-to-r from-purple-400 to-sky-400 p-5 transition duration-300 hover:scale-105 absolute -top-5 left-1/2 -translate-x-1/2 cursor-pointer ease-in-out active:scale-95 ">
      <span className="font-extrabold text-3xl">+</span>
    </button>
  );
};
export default FloatingBtn;
