import React, {useState} from "react";
import './App.css'
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoCreateButton } from "./components/TodoCreateButton/TodoCreateButton";

const defaultTodos = [
  { id:1, text: 'Cortar cebolla', completed: true },
  { id:2, text: 'Tomar el curso de intro a React lorem ipsum dolor mata de cafe perro cielo lorem ipsum dolor mata de cafe perro cielo', completed: false },
  { id:3, text: 'Llorar con la llorona', completed: false }
]

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      <TodoCounter
      completedTodos={completedTodos} 
      totalTodos={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList
        todos={searchedTodos}
      />
      <TodoCreateButton/>
    </React.Fragment>

  );
}

export default App;
