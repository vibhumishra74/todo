import React, { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "./App.css";
import TodoCard from "./components/card";
import AddToDo from "./components/addTodo";
import Inputsearch from "./components/filter/inputsearch";
import DropDownMenu from "./components/filter/DropDownMenu";
import FilterComponent from "./components/filter";


const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) ?? []
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(5);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filterdata,setFilterData] = useState('')
  const [status,setStatus] = useState('All')
// console.log('filterdata',filterdata)
  const addTask = () => {
    if(!newTaskTitle.trim()){
      alert('please add something in todo task')
      return
    }
    const newTask = { id: Date.now(), title: newTaskTitle, done: false };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    localStorage.setItem('tasks',JSON.stringify([...tasks, newTask]))
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tasks.length / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} className={`${number == currentPage ?'active':""}`} onClick={() => setCurrentPage(number)}>
        {number}
      </li>
    );
  });

 


  useEffect(()=>{
    if(localStorage.getItem('tasks'))
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

  const handleChange = (e)=>{

    setFilterData(e)
  }
  return (
    <div className="container">
      <h1>Todo List</h1>
    {/* {console.log('status',status)} */}
      <FilterComponent status={status} setStatus={setStatus} handleChange={handleChange} filterdata={filterdata} />
      
      <AddToDo newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} addTask={addTask} renderPageNumbers={renderPageNumbers} />

      <TodoCard 
       tasks={tasks}
       status={status}
       setTasks={ setTasks}
       currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filterdata={filterdata}
        
       />
      <ul id="page-numbers">{renderPageNumbers}</ul>
            </div>
            );
            };
            
            
            
            export default TodoList
            
            
            
