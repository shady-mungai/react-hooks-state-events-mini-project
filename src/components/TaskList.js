import React from "react";
import Task from "./Task"

function TaskList({ tasks, onDeleteTask }) {
  const oneTask = tasks.map((task,index)=>{
    return (
    <Task 
      key={index}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
      />
    )
  })

  return (
    <div className="tasks">
      {oneTask}
    </div>
  );
}

export default TaskList;
