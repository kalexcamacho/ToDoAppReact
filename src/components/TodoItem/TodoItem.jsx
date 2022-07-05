import React from "react";
import './TodoItem.scss'

function TodoItem({text, completed}) {
    let isCompletedClass = completed ? "completed":"non-completed";
    const onCheckButton = () => alert(`Completaste ${text}`);
    const onDeleteButton = () => alert(`Eliminaste ${text}`);

    return (
        <label className="item">
            <button 
            className={`checkButton-${isCompletedClass}`}
            onClick={onCheckButton}
            >
                <i className="fas fa-check"></i>
            </button>

            <label className={`text-${isCompletedClass}`}>{text}</label>

            <button 
            className="deleteButton"
            onClick={onDeleteButton}
            >
                <i className="fas fa-trash-alt"></i>
            </button>
        </label>

    );
}

export { TodoItem };