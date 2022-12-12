import React from 'react';
import {RiDeleteBin2Line, RiTodoFill} from "react-icons/ri";
import {FaCheck} from "react-icons/fa";
import styles from './todo.module.css'

const Todo = ({todo, deleteTodo, toggleTodo}) => {
    return (
        <div className={`${styles.todo} ${todo.isCompleted && styles.completedTodo}`}>
            <RiTodoFill className={styles.todo__icon}/>
            <div className={styles.todo__text}>
                {todo.text}
            </div>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
            <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)}/>
        </div>
    );
};

export default Todo;