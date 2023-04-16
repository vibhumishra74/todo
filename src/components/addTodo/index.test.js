import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddToDo from '.';

describe('AddToDo', () => {
  it('render the input and add button', () => {
    const { getByPlaceholderText, getByText } = render(<AddToDo />);
    const input = getByPlaceholderText('Add new task');
    const addButton = getByText('Add Task');
    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it('update the input field value when typing', () => {
    const { getByPlaceholderText } = render(<AddToDo setNewTaskTitle={() => jest.fn()}/>);
    const input = getByPlaceholderText('Add new task');
    fireEvent.change(input, { target: { value: 'Test task' } });
    expect(input.value).toBe('Test task');
  });

  it('call the addTask function when the add task button is clicked', () => {
    const addTaskMock = jest.fn();
    const { getByText } = render(<AddToDo addTask={addTaskMock} />);
    const addButton = getByText('Add Task');
    fireEvent.click(addButton);
    expect(addTaskMock).toHaveBeenCalledTimes(1);
  });
});
