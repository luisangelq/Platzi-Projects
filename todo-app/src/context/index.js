import { useState, useEffect, createContext } from "react";

const TodoContext = createContext();

const todo = [
  { id: 1, text: "Cortar cebolla", completed: true },
  { id: 2, text: "Tormar el curso de intro a react", completed: true },
  { id: 3, text: "Llorar con la llorona", completed: false },
];

const TodoProvider = ({ children }) => {
  // localStorage.setItem("todoList", JSON.stringify(todo));
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

    setLoading(true);
    setError(null);

    if (todoList.length === 0) {
      setError("There are no todos");
    }
    setfilteredTodos(todoList);
    
    setLoading(false);
  }, [todoList]);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        search,
        setSearch,
        filteredTodos,
        setfilteredTodos,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
