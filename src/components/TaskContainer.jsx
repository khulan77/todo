import { Task } from "./Task";

export const TaskContainer = ({
  filteredTasksValue,
  taskListValue,
  updateTaskList,
}) => {
  const toggleCompleted = (taskId) => {
    const updatedList = taskListValue.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );

    updateTaskList(updatedList);
  };

  const deleteTask = (taskId) => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all completed tasks?"
    );

    if (!confirmClear) return;

    const updatedList = taskListValue.filter((task) => task.id !== taskId);
    updateTaskList(updatedList);
  };

  return (
    <div className="flex flex-col gap-4">
      {filteredTasksValue.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};
