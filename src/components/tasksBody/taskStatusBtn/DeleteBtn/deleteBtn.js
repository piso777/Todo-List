import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TaskContext } from "../../../../contexts/tasksContexts";
const DeleteBtn = ({taskId}) => {
  const [tasks, setTasks] = useContext(TaskContext);
  const handleDeleteTasks = () => {
    const deletedTask = tasks.filter(task => task.id !== taskId);
    setTasks(deletedTask);
    localStorage.setItem("tasks", JSON.stringify(deletedTask));
  };
  return (
    <div>
      <button
        className="btn btn-outline-danger ms-2"
        data-bs-toggle="modal"
        data-bs-target={`#deleteModal-${taskId}`}
      >
        <FontAwesomeIcon icon={faTrash} />
        <span className="ms-1">Delete</span>
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id={`deleteModal-${taskId}`}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Delete Task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>Are You Sure Of Deleting This Task</h4>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={handleDeleteTasks}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBtn;
