import React, { useState } from 'react';
import FinishTime from './FinishTime';

function Todo({ text, todo, todos, setTodos }) {
  const [isFinished, setIsFinished] = useState(false);
  // 刪除代辦事項
  const deleteHandler = () => {
    alert(`確定要刪除${text}嗎?`);
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  // 將代辦事項狀態改為true
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
            finished: !item.finished,
          };
        }
        return item;
      })
    );
    setIsFinished(todo.finished);
    // console.log(isFinished);
  };

  return (
    <>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          {text}
        </li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
      {todo.finished ? <FinishTime /> : ''}
    </>
  );
}

export default Todo;
