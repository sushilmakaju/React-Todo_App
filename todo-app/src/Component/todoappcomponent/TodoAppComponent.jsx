// ./src/components/TodoAppComponent.jsx
import React, { useState } from 'react';
import TodoListComponent from '../todolistcomponent/TodoListComponent';

const TodoAppComponent = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Todo App</h1>
      <div className="flex mb-4">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          className="border p-2 mr-2 flex-1 rounded" 
          placeholder="Add a new task"
        />
        <button 
          onClick={addItem} 
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
        >
          Add
        </button>
      </div>
      <TodoListComponent items={items} toggleComplete={toggleComplete} removeItem={removeItem} />
    </div>
  );
}

export default TodoAppComponent;
