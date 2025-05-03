import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TaskContext } from "../../../../contexts/tasksContexts";

const DoneBtn = ({ taskId }) => {
  const [tasks, setTasks] = useContext(TaskContext);
  const handleDoneTasks = (e) => {
    const updatedTask = tasks.map((theTask) => {
      return theTask.id === taskId ? { ...theTask, completed: true } : theTask;
    });
    setTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  };

  return (
    <div>
      <button
        className={
          tasks.find((task) => task.id === taskId).completed
            ? "btn btn-success"
            : "btn btn-outline-success"
        }
        onClick={handleDoneTasks}
      >
        <FontAwesomeIcon icon={faCheck} />
        <span className="ms-1">Done</span>
      </button>
    </div>
  );
};

export default DoneBtn;
