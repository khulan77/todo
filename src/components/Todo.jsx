import { useState } from "react";

export const Todo = () => {
  return (
    <div className="w-[377px] rounded-md bg-[#ffffff] pt-6 pl-4 pb-4">
      <div className="w-[345px] flex flex-col justify-center gap-4">
        <div className="font-semibold text-xl flex justify-center">
          To-Do List
        </div>
        <div className="flex gap-2">
          <input
            className="w-[280px] border border-[#e4e4e7] rounded-md px-2"
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            className="w-[59px] h-10 rounded-xl text-white bg-[#3c82f6]"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <div className="flex gap-2">
          <button
            className={`w-[38px] h-8 rounded-md text-xs ${
              currentFilter === "all"
                ? "bg-[#3c82f6] text-white"
                : "bg-[#f3f4f6] text-[#363636]"
            }`}
            onClick={() => setCurrentFilter("all")}
          >
            All
          </button>
          <button
            className={`w-[60px] h-8 rounded-md text-xs ${
              currentFilter === "active"
                ? "bg-[#3c82f6] text-white"
                : "bg-[#f3f4f6] text-[#363636]"
            }`}
            onClick={() => setCurrentFilter("active")}
          >
            Active
          </button>
          <button
            className={`w-[87px] h-8 rounded-md text-xs ${
              currentFilter === "completed"
                ? "bg-[#3c82f6] text-white"
                : "bg-[#f3f4f6] text-[#363636]"
            }`}
            onClick={() => setCurrentFilter("completed")}
          >
            Completed
          </button>
        </div>
        <div className="flex flex-col gap-2 max-h-[150px] overflow-y-auto">
          {filteredTasks.length === 0 ? (
            <div className="flex justify-center text-sm text-[#6b7280] font-normal">
              No tasks yet. Add one above!
            </div>
          ) : (
            filteredTasks.map((task, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-2 rounded-md ${
                  task.isCompleted
                    ? "bg-[#e4e4e7] line-through text-gray-500"
                    : "bg-[#f9f9f9]"
                }`}
              >
                <span
                  onClick={() => toggleTask(index)}
                  className="cursor-pointer"
                >
                  {task.text}
                </span>
                <button
                  className="text-red-500 text-xs"
                  onClick={() =>
                    setTaskList(taskList.filter((_, i) => i !== index))
                  }
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-400">0 of 4 tasks completed</div>
          <button
            className=" text-xs text-red-500"
            onClick={clearCompletedTasks}
          >
            Clear Completed
          </button>
        </div>
        <div className="flex justify-center gap-1 mt-2">
          <div className="text-xs font-normal text-[#6b7280]">Powered by</div>
          <div className="text-xs font-normal text-[#3b73ed]">
            Pinecone academy
          </div>
        </div>
      </div>
    </div>
  );
};
