import React, { useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../../contexts/tasksContexts";
import DoneBtn from "./taskStatusBtn/doneBtn/doneBtn";
import EditBtn from "./taskStatusBtn/EditBtn/editBtn";
import DeleteBtn from "./taskStatusBtn/DeleteBtn/deleteBtn";
import "./taskBody.css";
const TasksBody = () => {
  const [tasks,setTasks] = useContext(TaskContext);
  useEffect(()=>{
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  },[])
  if (tasks.length === 0) {
    return (
      <div className="container bg-info p-3 text-dark fs-2 fw-bolder text-center pt-5">
        <h3>No Tasks Found </h3>
        <p>Please add a new task</p>
      </div>
    );
  }
  const tasksUI = tasks.map((task) => {
    if (task.title === "" && task.body === "") {
      return (
        <div className="container bg-info p-3 text-dark fs-2 fw-bolder text-center pt-5">
          <h3>No Tasks Found </h3>
          <p>Please add a new task</p>
        </div>
      );
    } else {
      return (
        <div
          key={task.id}
          className="card taskCard text-center text-white bg-dark mb-3"
        >
          <div className="card-header">ID : {task.id}</div>
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.body}</p>
          </div>
          <div
            id={task.id}
            className="card-footer d-flex justify-content-center align-items-center gap-2 pb-3"
          >
            <DoneBtn taskId={task.id} />
            <EditBtn taskId={task.id} />
            <DeleteBtn taskId={task.id} />
          </div>
        </div>
      );
    }
  });
  return <div className="container bg-info p-3">{tasksUI}</div>;
};

export default TasksBody;
