import React, {useState} from 'react';
import './todoForm.css'
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('')
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    return (
        <form onSubmit={onSubmit}>
            <MyInput
                value={text}
                type="text"
                placeholder="Введите новую задачу"
                onChange={(e) => {setText(e.target.value)}}
            />
            <MyButton type='submit'>Ввести</MyButton>
        </form>
    );
};

export default TodoForm;