import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import './styles/App.css'
import TodoList from "./components/list/TodoList";
import TodoForm from "./components/form /TodoForm";
import Navbar from "./components/navbar/Navbar";
import TodoActions from "./components/actions/TodoActions";

const App = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        const newTodo = {
            id: uuidv4(),
            text: text,
            isCompleted: false,
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
            ? {...todo, isCompleted: !todo.isCompleted}
            : {...todo}
        }))
    }

    const resetTodos = () => {
        setTodos([])
    }

    const deleteCompletedTodos = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }

    const completedTodoCount = todos.filter((todo) => todo.isCompleted).length

  return (
      <div className='App'>
          <Navbar/>
          <TodoForm addTodo={addTodo}/>
          {!!todos.length
              &&
              <TodoActions resetTodos={resetTodos} deleteCompletedTodos={deleteCompletedTodos} completedTodoExist={completedTodoCount}
              />}
          <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
          {completedTodoCount > 0 && <h2>{`You have completed ${completedTodoCount} ${completedTodoCount > 1 ? 'todos' : 'todo'}`}</h2>}
      </div>
  );
};

export default App;
