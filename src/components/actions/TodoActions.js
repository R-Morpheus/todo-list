import React from 'react';
import "./todoActions.css"
import MyButton from "../UI/button/MyButton";
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";

const TodoActions = ({resetTodos, deleteCompletedTodos, completedTodoExist}) => {
    return (
        <div className='action__container'>
            <MyButton title='Reset Todos' onClick={resetTodos}>
                <RiRefreshLine/>
            </MyButton>
            <MyButton title='Delete completed Todos' onClick={deleteCompletedTodos} disabled={!completedTodoExist}>
                <RiDeleteBin2Line/>
            </MyButton>
        </div>
    );
};

export default TodoActions;