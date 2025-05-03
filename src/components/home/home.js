import React from "react";
import MyTasksPageTitle from "../myTaskPageTitle/myTasksPageTitle";
import TaskActionBtn from "../TaskActionBtn/taskActionBtn";
import TasksBody from "../tasksBody/tasksBody";
import AddingNewTask from "../addingNewTask/addingNewTask";
const Home = () => {
  return (
    <div>
      <MyTasksPageTitle />
      <TaskActionBtn />
      <TasksBody />
      <AddingNewTask/>
    </div>
  );
};

export default Home;
