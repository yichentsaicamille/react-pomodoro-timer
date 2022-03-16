import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import TodoList from '../components/TodoList';

function MyTodoList({ isFinished }) {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // 初始化的localStorage
  useEffect(() => {
    getLocalTodos();
  }, []);

  // 篩選未完成/已完成代辦事項
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // 存到localStorage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // 初始化時取出localStorage的代辦清單
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
    } else {
      let todoLacal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLacal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default MyTodoList;
