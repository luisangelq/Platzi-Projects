import { useState, useEffect } from "react";

const useTodos = () => {
  // localStorage.setItem("todoList", JSON.stringify(todo));
  const getTodoList = localStorage.getItem("todoList");

  const [todoList, setTodoList] = useState(
    getTodoList ? JSON.parse(getTodoList) : []
  );
  const [search, setSearch] = useState("");
  const [filteredTodos, setfilteredTodos] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));

    setLoading(true);
    setError(null);

    setTimeout(() => {
    if (todoList.length === 0) {
      setError("There are no todos");
    }
    setfilteredTodos(todoList);

    setLoading(false);
    }, 1500);
  }, [todoList]);

  return {
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
    openModal,
    setOpenModal,
  };
};

export { useTodos };
