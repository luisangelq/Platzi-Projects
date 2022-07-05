import react, { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButtom } from "./components/CreateTodoButton";

//import './App.css';
const todo = [
  { id: 1, text: "Cortar cebolla", completed: true },
  { id: 2, text: "Tormar el curso de intro a react", completed: true },
  { id: 3, text: "Llorar con la llorona", completed: false },
];
function App() {
  localStorage.setItem("todoList", JSON.stringify(todo));
  const getTodoList = localStorage.getItem("todoList");

  const [todoList, setTodoList] = useState(
    getTodoList ? JSON.parse(getTodoList) : []
  );
  const [search, setSearch] = useState("");
  const [filteredTodos, setfilteredTodos] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <TodoCounter todoList={todoList} />
      <TodoSearch
        todoList={todoList}
        setfilteredTodos={setfilteredTodos}
        search={search}
        setSearch={setSearch}
        setLoading={setLoading}
        setError={setError}
      />

      {!loading ? (
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
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <Spinner />
        </div>
      )}

      {error ? <p>{error}</p> : null}

      <CreateTodoButtom />
    </>
  );
}

export default App;
