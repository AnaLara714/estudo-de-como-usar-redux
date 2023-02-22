import React from "react"; 

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./stores";

import { increment, decrement, sum } from "./stores/counterSlicer";
import { add, remove } from "./stores/projects";

export const App: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [addTask, setAddTask] = React.useState("");
  const counter = useSelector((state: RootState) => state.counter);
  const projects = useSelector((state: RootState) => state.projects);

  const dispacth = useDispatch(); //chama para ela atuliar o estado
  
  // console.log(counter);
  console.log(projects)
  return (
    <>
      <h1>Counter: {counter.value}</h1>
      <button onClick={() => dispacth(increment())}>Add</button>
      <button onClick={() => dispacth(decrement())}>Sub</button>
      <input type="text" value={value}
        onChange={(e) => setValue(e.target.value)}
      />   
      <button onClick={() => dispacth(sum(Number(value)))}>Sum</button>

      <h1>Tasks:</h1>
      <input type="text" value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
      />   
      <button onClick={() => dispacth(add(addTask))}>Add task</button>
      <ul>{projects.map( function (projects) {
        return <li>{projects.title}</li>
      })}</ul>
    </>
  )
}