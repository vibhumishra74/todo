import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDownMenu({setStatus,status}) {
  // console.log('tasks={tasks}',tasks)
  // const[status,setStatus] = useState('All')
  return (
    <DropdownButton id="dropdown-basic-button" title={status == true ? 'completed': status == false ?'Not Completed':'All'}>
      <Dropdown.Item onClick={()=>setStatus('All')} >All</Dropdown.Item>
      <Dropdown.Item onClick={()=>setStatus(true)} >Completed</Dropdown.Item>
      <Dropdown.Item onClick={()=>setStatus(false)}>Not Completed</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDownMenu;