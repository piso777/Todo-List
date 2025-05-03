import React from "react";
import { Link } from "react-router";
const TaskActionBtn = () => {
  const taskAction = [
    {
      id: 1,
      name: "All",
      path: "/all",
    },
    {
      id: 2,
      name: "Completed",
      path: "/completed",
    },
    {
      id: 3,
      name: "Not Completed",
      path: "/notcompleted",
    },
  ];
  const taskActionUi = taskAction.map((task) => {
    return (
      <Link key={task.id} to={task.path}>
        <button key={task.id} className="btn btn-primary mx-2">
          {task.name}
        </button>
      </Link>
    );
  });
  return (
    <div className="container bg-secondary p-3 d-flex justify-content-center">
      {taskActionUi}
    </div>
  );
};

export default TaskActionBtn;
