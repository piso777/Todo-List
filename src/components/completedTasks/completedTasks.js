import { Link } from "react-router";
import { useContext } from "react";
import { TaskContext } from "../../contexts/tasksContexts";
import TaskActionBtn from "../TaskActionBtn/taskActionBtn";
import DoneBtn from "../tasksBody/taskStatusBtn/doneBtn/doneBtn";
import EditBtn from "../tasksBody/taskStatusBtn/EditBtn/editBtn";
import DeleteBtn from "../tasksBody/taskStatusBtn/DeleteBtn/deleteBtn";
const CompletedTasks = () => {
  const [tasks] = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.completed === true);
  if (completedTasks.length === 0) {
        return (
          <>
            <div className=" container d-flex flex-column align-items-center justify-content-center mt-5 bg-info p-3">
              <h1 className="text-center fw-bolder"> Completed Tasks</h1>
              <TaskActionBtn />
              <div className="container bg-info p-3 text-dark fs-2 fw-bolder text-center pt-5">
                <h3>No Tasks Found </h3>
              </div>
            </div>
            <Link
              className="btn btn-secondary w-25 m-auto fs-4 fw-bolder d-flex justify-content-center"
              to={"/"}
            >
              Go To Home
            </Link>
          </>
        );
  }
  const completedTasksUI = completedTasks.map((task) => {
    return (
      <div
        key={task.id}
        className="card taskCard text-center text-white bg-dark mb-3 mt-3"
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
  });
  return (
    <>
      <div className=" container d-flex flex-column align-items-center justify-content-center mt-5 bg-info p-3">
        <h1 className="text-center fw-bolder">Completed Tasks</h1>
        <TaskActionBtn />
        {completedTasksUI}
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

export default CompletedTasks;
