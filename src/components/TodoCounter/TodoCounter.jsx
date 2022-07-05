import React from "react";
import './TodoCounter.scss'

function TodoCounter({ completedTodos, totalTodos}) {
    return (
        <>
            <h1 className="TodoLogo"><i className="fas fa-tasks"/> To Do Reminder</h1>
            <h2 className="TodoCounter"> Has completado {completedTodos} de {totalTodos} ToDo's</h2>
        </>
    );
}

export { TodoCounter };