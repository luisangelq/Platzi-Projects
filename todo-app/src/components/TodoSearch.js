import { useEffect } from "react";
import styled from "styled-components";

function TodoSearch({
  todoList,
  filteredTodos,
  setfilteredTodos,
  search,
  setSearch,
  loading,
  setError,
}) {
  useEffect(() => {
    console.log(filteredTodos);
    if (search !== "") {
      setError(null);

      const filterBySearch = todoList.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
      );

      setfilteredTodos(filterBySearch);

      if (filterBySearch.length === 0) {
        setError("No se encontraron resultados");
      }
    } else {
      setfilteredTodos(todoList);
      setError(null);
    
    }
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchInput
      placeholder="Cebolla"
      value={search}
      onChange={handleSearch}
      disabled={loading}
    />
  );
}

const SearchInput = styled.input`
  background: #f9fbfc;
  border-radius: 2px;
  border: 2px solid #202329;
  margin: 0 24px;
  height: 64px;
  width: calc(100% - 62px);
  font-size: 24px;
  text-align: center;
  font-family: "Montserrat";
  font-weight: 400;
  color: #1e1e1f;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);

  &::placeholder {
    color: #a5a5a5;
    font-family: "Montserrat";
    font-weight: 400;
  }

  &:focus {
    outline-color: #61dafa;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export { TodoSearch };
