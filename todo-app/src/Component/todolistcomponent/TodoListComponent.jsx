// ./src/components/TodoList.jsx
import React from 'react';
import TodoItemComponent from '../todoitemcomponent/TodoItemComponents';


const TodoListComponent = ({ items, toggleComplete, removeItem }) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItemComponent key={item.id} item={item} toggleComplete={toggleComplete} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default TodoListComponent;
