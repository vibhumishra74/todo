import React, { useState } from 'react'
import { Card, Button, Form } from "react-bootstrap";
import "./module.card.css";
const TodoCard = ({tasks, setTasks,currentPage, status,filterdata})=>{
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    
    
  
    const deleteTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    };
  
    const editTask = (taskId,title) => {
        setNewTaskTitle(title);
      setEditingTaskId(taskId);
    };
  
    const updateTask = (updatedTitle) => {
      if(!updatedTitle){
        alert('please update')
        return
      }
      const updatedTasks = tasks.map((task) => {
        if (task.id === editingTaskId) {
            setNewTaskTitle('')
          return { ...task, title: updatedTitle };
        } else {
          return task;
        }
      });
      setTasks(updatedTasks);
      setEditingTaskId(null);
    };
  
    const markTaskDone = (taskId) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, done: true };
        } else {
          return task;
        }
      });
      setTasks(updatedTasks);
    };
  
    
    const renderTasks = tasks.filter(task=>task.title.includes(filterdata) && (status !='All' ?  task.done === status:true)).map((task,i) => {
        if (task.id === editingTaskId) {
          return (<Card className='cardcontainer'>
           <Card.Header>Task No:-{i+1}</Card.Header>
            <Card.Body key={task.id}>
                
              <Form.Control
                type="text"
                value={newTaskTitle}
                placeholder={"Add your Task"}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <Button variant="success" onClick={() => updateTask(newTaskTitle)}>
                Save
              </Button>
            </Card.Body>
            </Card>
          );
        } else {
          return (
            <Card className='cardcontainer'>
             <Card.Header>Task No:-{i+1}</Card.Header>
            <Card.Body key={task.id}>
                <Card.Title className={task.done ? "done" : ""}>{task.title}</Card.Title>
              {/* <Card.Text className={task.done ? "done" : ""}>{task.title}</Card.Text> */}
              {!task.done && (
                <div>
                  <Button variant="primary" onClick={() => editTask(task.id,task.title)}>
                    Edit
                  </Button>{" "}
                  <Button variant="danger" onClick={() => deleteTask(task.id)}>
                    Delete
                  </Button>{" "}
                  <Button variant="success" onClick={() => markTaskDone(task.id)}>
                    Done
                  </Button>
                </div>
              )}
            </Card.Body>
            </Card>
          );
        }
      }).slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5);

    return tasks?.length>0? <>
        {renderTasks}
    </>:<div>
        <h2>Please add to your Todo</h2>
    </div>
    
}

export default TodoCard