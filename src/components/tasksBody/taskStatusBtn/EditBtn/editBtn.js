import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { TaskContext } from "../../../../contexts/tasksContexts";
const EditBtn = ({ taskId }) => {
  //Tasks Context
  const [tasks, setTasks] = useContext(TaskContext);
  //Edit Task State
  const [editedBody, setEditedBody] = useState("");
  //Open Modal and Set Task Body
  const handleOpenModal = () => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditedBody(taskToEdit.body);
    }
  };
  //Edit Task
  const handleEdit =()=>{
    const updatedTasks =tasks.map((task)=>{
      return(
      task.id === taskId ?{...task,body:editedBody}:task
      )
    })
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setEditedBody("");
  }
  return (
    <div>
      <button
        className="btn btn-outline-warning ms-2"
        data-bs-toggle="modal"
        data-bs-target={`#editModal-${taskId}`}
        onClick={handleOpenModal}
      >
        <FontAwesomeIcon icon={faEdit} />
        <span className="ms-1">Edit</span>
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id={`editModal-${taskId}`}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>Task {taskId}</h4>
              <textarea
                value={editedBody}
                onChange={(e) => {
                  setEditedBody(e.target.value);
                }}
                className="form-control"
                cols="30"
                rows="10"
              ></textarea>
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
                onClick={handleEdit}
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

export default EditBtn;