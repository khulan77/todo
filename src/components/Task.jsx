import React from "react";

export const Task = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div className="task-item  flex  justify-between   bg-[#f9FAFB] items-center rounded-md p-4 font-semibold">
      <div className="flex  items-center gap-2 bg-[#f9FAFB] text-sm">
        <input
          type="checkbox"
          checked={task.isCompleted}
          className="h-5 w-5"
          onChange={() => toggleCompleted(task.id)}
        />
        <span
          className={`${
            task.isCompleted ? "line-through " : "text-black-500"
          } `}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="delete-btn p-4  text-[#EF4444] text-sm h-[30px]  text-center  rounded-md bg-[#FEF2F2]  flex items-center justify-center  font-semibold"
      >
        Delete
      </button>
    </div>
  );
};
