import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddToDo from '.';


describe('AddToDo component', () => {
  const mockSetNewTaskTitle = jest.fn();
  const mockAddTask = jest.fn();

  beforeEach(() => {
    render(
      <AddToDo
        renderPageNumbers={[<li key="1">1</li>, <li key="2">2</li>]}
        newTaskTitle=""
        setNewTaskTitle={mockSetNewTaskTitle}
        addTask={mockAddTask}
      />
    );
  });

  it('renders the input field with a placeholder', () => {
    expect(screen.getByPlaceholderText('Add new task')).toBeInTheDocument();
  });

  it('calls setNewTaskTitle when the input field is changed', () => {
    const input = screen.getByPlaceholderText('Add new task');
    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(mockSetNewTaskTitle).toHaveBeenCalledWith('New Task');
  });

  it('calls addTask when the "Add Task" button is clicked', () => {
    const button = screen.getByText('Add Task');
    fireEvent.click(button);
    expect(mockAddTask).toHaveBeenCalled();
  });

  it('renders the page numbers', () => {
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
