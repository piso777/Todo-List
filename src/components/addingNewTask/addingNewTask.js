import React from 'react';
import {useState ,useContext} from 'react';
import {TaskContext} from '../../contexts/tasksContexts'
const AddingNewTask = () => {
    const [tasks,setTasks] = (useContext(TaskContext));
    const [addTask, setAddTask] = useState("");
    const handleAddTask = (e)=>{
        setAddTask(e.target.value);
    }
    const AddingMyTask =()=>{
        if(addTask === ""){
            alert("Please Enter Your Task");
        }else{
            const newTask = {
              id: tasks.length + 1,
              title: `Task ${tasks.length + 1}`,
              body: addTask,
              completed: false,
            };
            setTasks([...tasks, newTask]);
            localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
            setAddTask("");
        }
    }
    return (
        <div className='container bg-info p-3'>
            <div className="addTask d-flex justify-content-center">
                <input value={addTask} onChange={handleAddTask} className="form-control rounded-0" type="text" placeholder='Add New Task' />
                <button onClick={AddingMyTask} className='btn btn-primary rounded-0'>Add</button>
            </div>
        </div>
    );
}

export default AddingNewTask;
