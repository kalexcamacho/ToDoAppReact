import React from "react";
import './TodoCreateButton.scss'

function TodoCreateButton() {
    return (
        <button 
        className="buttonCreate"
        onClick={()=> console.log('clic')} 
        >
            +
        </button>
    );
}

export { TodoCreateButton };