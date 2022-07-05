import React from "react";
import './TodoList.scss'
import { TodoItem } from "../TodoItem/TodoItem";

function TodoList({todos}) {
    return (
        <section className="itemList">
            {todos.map((todo, i) => {
                return <TodoItem
                    key={i}
                    text={todo.text}
                    completed={todo.completed}
                />
            })}
        </section>
    );
}

export { TodoList };