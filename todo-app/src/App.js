import Spinner from "./components/Spinner";
import { TodoHeader } from "./components/TodoHeader";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButtom } from "./components/CreateTodoButton";
import ModalForm from "./components/ModalForm";

import { useTodos } from "./hooks";
import Modal from "./helpers/modalPortal";

function App() {
  //consume the context
  const {
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
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter todoList={todoList} />
        <TodoSearch
          todoList={todoList}
          filteredTodos={filteredTodos}
          setfilteredTodos={setfilteredTodos}
          search={search}
          setSearch={setSearch}
          setLoading={setLoading}
          setError={setError}
        />
      </TodoHeader>

      {!loading ? (
        <TodoList>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              todoList={todoList}
              setTodoList={setTodoList}
              setLoading={setLoading}
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

      {error && <p>{error}</p>}

      <CreateTodoButtom setOpenModal={setOpenModal} openModal={openModal} />

      {openModal && (
        <Modal>
          <ModalForm
            todoList={todoList}
            setTodoList={setTodoList}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
