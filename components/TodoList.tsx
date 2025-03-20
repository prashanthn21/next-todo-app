import TodoItem from "./TodoItem";
import { Todo } from "../types/types";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  removeTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, editTodo, removeTodo }) => {
  return (
    <div className="mt-4">
      {todos.length === 0 ? <p className="text-gray-500 dark:text-gray-300">No tasks available.</p> : null}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} editTodo={editTodo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
