"use client";

import { useState, useEffect } from "react";
import { Todo } from "../types/types";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  // Load from Local Storage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) setTodos(JSON.parse(savedTodos) as Todo[]);
  }, []);

  // Save to Local Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = { id: crypto.randomUUID(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Toggle completion
  const toggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit todo
  const editTodo = (id: string, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Remove todo
  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filtered todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white dark:bg-gray-800 shadow-lg">
      <ThemeToggle />
      <h1 className="text-2xl font-bold text-center">Todos App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="flex justify-between mt-4">
        <button onClick={() => setFilter("all")} className="px-3 py-1 border">
          All
        </button>
        <button onClick={() => setFilter("completed")} className="px-3 py-1 border">
          Completed
        </button>
        <button onClick={() => setFilter("pending")} className="px-3 py-1 border">
          Pending
        </button>
      </div>
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} editTodo={editTodo} removeTodo={removeTodo} />
    </div>
  );
}
