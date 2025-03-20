import { useState } from "react";
import { motion } from "framer-motion";

interface TodoItemProps {
  todo: { id: string; text: string; completed: boolean };
  toggleComplete: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, editTodo, removeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex justify-between items-center border p-2 my-2 dark:text-white"
    >
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          className="border p-1"
        />
      ) : (
        <span onClick={() => toggleComplete(todo.id)} className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}>
          {todo.text}
        </span>
      )}
      <div className="flex gap-2">
        <button onClick={() => setIsEditing(true)} className="text-blue-500">Edit</button>
        <button onClick={() => removeTodo(todo.id)} className="text-red-500">Delete</button>
      </div>
    </motion.div>
  );
};

export default TodoItem;
