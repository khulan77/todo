import React from "react";

export const Summary = ({ handleClearCompletedTasks, taskListValue }) => {
  const completedCount = taskListValue.filter(
    (task) => task.isCompleted
  ).length;

  return (
    <div className="summary flex justify-between items-center mt-4 h-[45px] border-t border-[#e4e4e7] text-sm font-semibold text-gray-600">
      <span>
        {completedCount} of {taskListValue.length} task completed
      </span>

      <button
        onClick={handleClearCompletedTasks}
        className="clear text-[#EF4444] hover:truncate"
      >
        Clear Completed
      </button>
    </div>
  );
};
