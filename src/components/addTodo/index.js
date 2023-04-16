import React from 'react'
import { Card, Button } from "react-bootstrap";
import './add.css'

const AddToDo = ({ renderPageNumbers, newTaskTitle, setNewTaskTitle, addTask }) => {

  return <Card className="text-center">
    {/* {renderTasks} */}
    <Card.Footer>
      <input className='addTodoInput'
        type="text"
        placeholder="Add new task"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <Button className='addtask' variant="primary" onClick={addTask}>
        Add Task
      </Button>
    </Card.Footer>
  </Card>

}

export default AddToDo