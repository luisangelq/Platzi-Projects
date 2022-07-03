import react, { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButtom } from "./components/CreateTodoButton";

//import './App.css';
const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tormar el curso de intro a react", completed: true },
  { text: "Llorar con la llorona", completed: false },
];
function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <TodoCounter />
      <TodoSearch 
        search={search}
        setSearch={setSearch}
      />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </>
  );
}

export default App;
