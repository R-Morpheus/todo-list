import React from 'react';
import './myButton.css'

const MyButton = ({disabled=false, title, onClick, children, ...props}) => {
    return (
        <button {...props} title={title} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;