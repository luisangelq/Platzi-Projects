import react, { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButtom } from "./components/CreateTodoButton";

//import './App.css';
const todo = [
  { id: 1, text: "Cortar cebolla", completed: true},
  { id: 2, text: "Tormar el curso de intro a react", completed: true },
  { id: 3, text: "Llorar con la llorona", completed: false },
];
function App() {
  const [todoList, setTodoList] = useState(todo);
  const [search, setSearch] = useState("");
  const [filteredTodos, setfilteredTodos] = useState([]);

  const completedTodos = todoList.filter((todo) => todo.completed).length;
  const totalTodos = todoList.length;

  return (
    <>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch
        todoList={todoList}
        setfilteredTodos={setfilteredTodos}
        search={search}
        setSearch={setSearch}
      />
      <TodoList>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todoList={todoList}
            setTodoList={setTodoList}
            todo={todo}
          />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </>
  );
}

export default App;
