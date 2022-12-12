import React from 'react';
import Todo from "../todo/Todo";
import './todoList.css'

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
    return(
        <div className='todoListContainer'>
            {!todos.length && <h3>ToDo list is empty</h3>}
            {todos.map((todo) =>
                <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                />)}
        </div>
    )
};

export default TodoList;