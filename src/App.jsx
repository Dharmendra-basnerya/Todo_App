//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import AppName from "./componets/AppName"
import AddTodo from "./componets/AddTodo";
import TodoItem2 from "./componets/TodoItem2";
import TodoItem from "./TodoItem";
import "./App.css";
function App() {
  return (
    <center className="todo container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="Item-container">
    <TodoItem2></TodoItem2>
    <TodoItem></TodoItem>
    </div>
      
    </center>
  );
}

export default App
