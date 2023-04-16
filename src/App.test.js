import App from './App';

import { render, fireEvent } from "@testing-library/react";
// import TodoList from "./TodoList";

describe("TodoList", () => {
  it("filters tasks based on search query", () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <App />
    );

    // add some tasks
    fireEvent.change(getByPlaceholderText("Add new task"), {
      target: { value: "Task 1" },
    });
    fireEvent.click(getByText("Add Task"));
    fireEvent.change(getByPlaceholderText("Add new task"), {
      target: { value: "Task 2" },
    });
    fireEvent.click(getByText("Add Task"));
    fireEvent.change(getByPlaceholderText("Add new task"), {
      target: { value: "Task 3" },
    });
    fireEvent.click(getByText("Add Task"));

    // search for a task
    fireEvent.change(getByPlaceholderText("search"), {
      target: { value: "2" },
    });

    // assert that only the matching task is displayed
    expect(queryByText("Task 1")).toBeNull();
    expect(queryByText("Task 2")).not.toBeNull();
    expect(queryByText("Task 3")).toBeNull();
  });
});
