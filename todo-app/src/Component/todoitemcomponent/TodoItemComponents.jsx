// ./src/components/TodoItem.jsx
import React from 'react';

const TodoItem = ({ item, toggleComplete, removeItem }) => {
  return (
    <div className={`flex justify-between items-center p-4 mb-2 bg-white rounded shadow ${item.completed ? 'line-through text-gray-400' : 'text-black'}`}>
      <span>{item.text}</span>
      <div>
        <button 
          onClick={() => toggleComplete(item.id)} 
          className={`mr-2 px-4 py-2 rounded ${item.completed ? 'bg-gray-400' : 'bg-green-500 text-white'}`}
        >
          {item.completed ? 'Undo' : 'Complete'}
        </button>
        <button 
          onClick={() => removeItem(item.id)} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
