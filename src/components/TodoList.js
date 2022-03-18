import React from 'react';
import Todo from './Todo';
import '../styles/todoList.css';

function TodoList({ todos, setTodos, filteredTodos, isFinished }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
            isFinished={isFinished}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
