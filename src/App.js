import React from "react";
import { Routes, Route } from "react-router";
import CompletedTasks from "./components/completedTasks/completedTasks";
import NotCompletedTasks from "./components/notCompletedTasks/notCompletedTasks";
import AllTasks from "./components/allTasks/allTasks";
import { TaskContext } from "./contexts/tasksContexts";
import Home from "./components/home/home";
import { useState } from "react";
const intialTasksValue = [
];
const App = () => {
  const [tasks, setTasks] = useState(intialTasksValue);
  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      <div className="App">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/notcompleted" element={<NotCompletedTasks />} />
          <Route path="/all" element={<AllTasks />} />
        </Routes>
      </div>
    </TaskContext.Provider>
  );
};

export default App;
