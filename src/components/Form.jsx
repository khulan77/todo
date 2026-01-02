import { useState } from "react";

export const Form = ({ updateTaskList, taskListValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };

    updateTaskList([newTask, ...taskListValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-[345px] h-10 flex gap-1.5 ">
      <input
        type="text"
        className="task-input form bg-[#ff4f6] py-2 px-4 font-semibold border border-gray-400 rounded-md h-10 w-[280px] text-sm"
        placeholder="Add new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="w-[59px] h-10 px-3 py-1 mr-3.5 rounded-md border font-semibold transition text-sm text-white bg-[#3c82f6]">
        Add
      </button>
    </form>
  );
};
