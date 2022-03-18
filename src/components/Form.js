import React, { useState } from 'react';
import '../styles/form.css';

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const [formError, setFormError] = useState({});
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === '') {
      setFormError(validate(inputText));
    } else {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
          finished: false,
        },
      ]);
      setFormError({});
    }
    setInputText('');
  };

  const validate = (values) => {
    const error = {};
    if (!values.inputText) {
      error.inputText = '請輸入待辦事項';
    }
    return error;
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="form">
      <div>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          name="inputText"
          placeholder=" 請輸入待辦事項"
        />
        <p className="errorMsg">{formError.inputText}</p>
      </div>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
