import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoCard from '.';

describe('TodoCard', () => {
  const tasks = [
    { id: 1, title: 'Task 1', done: false },
    { id: 2, title: 'Task 2', done: false },
    { id: 3, title: 'Task 3', done: false },
  ];

  const setTasks = jest.fn();
  const setCurrentPage = jest.fn();
  const filterdata = "";

  beforeEach(() => {
    render(
      <TodoCard
        tasks={tasks}
        setTasks={setTasks}
        currentPage={1}
        setCurrentPage={setCurrentPage}
        filterdata={filterdata}
      />
    );
  });

  test('renders task items', () => {
    expect(screen.getByText('Task No:-1')).toBeInTheDocument();
    expect(screen.getByText('Task No:-2')).toBeInTheDocument();
    expect(screen.getByText('Task No:-3')).toBeInTheDocument();
  });

  test('renders task titles', () => {
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  test('allows task deletion', () => {
    const deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons).toHaveLength(3);

    fireEvent.click(deleteButtons[0]);

    expect(setTasks).toHaveBeenCalledWith([
      { id: 2, title: 'Task 2', done: false },
      { id: 3, title: 'Task 3', done: false },
    ]);
  });

  test('allows task editing', () => {
    const editButtons = screen.getAllByText('Edit');
    expect(editButtons).toHaveLength(3);

    fireEvent.click(editButtons[0]);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Task Title' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(setTasks).toHaveBeenCalledWith([
      { id: 1, title: 'New Task Title', done: false },
      { id: 2, title: 'Task 2', done: false },
      { id: 3, title: 'Task 3', done: false },
    ]);
  });

  test('allows task marking as done', () => {
    const doneButtons = screen.getAllByText('Done');
    expect(doneButtons).toHaveLength(3);

    fireEvent.click(doneButtons[0]);

    expect(setTasks).toHaveBeenCalledWith([
      { id: 1, title: 'Task 1', done: true },
      { id: 2, title: 'Task 2', done: false },
      { id: 3, title: 'Task 3', done: false },
    ]);
  });
});
