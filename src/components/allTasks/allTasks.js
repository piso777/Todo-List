import React from "react";
import { Link } from "react-router";
import TaskActionBtn from "../TaskActionBtn/taskActionBtn";
import TasksBody from "../tasksBody/tasksBody";
import AddingNewTask from "../addingNewTask/addingNewTask";
const AllTasks = () => {
  return (
    <>
      <div className="container bg-info mt-5">
        <h1 className="text-center fw-bolder"> All Tasks</h1>
        <TaskActionBtn />
        <TasksBody />
        <AddingNewTask />
      </div>
      <Link
        className="btn btn-secondary w-25 m-auto fs-4 fw-bolder d-flex justify-content-center"
        to={"/"}
      >
        Go To Home
      </Link>
    </>
  );
};

export default AllTasks;
