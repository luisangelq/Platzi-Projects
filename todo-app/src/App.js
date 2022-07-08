import { useContext } from "react";
import Spinner from "./components/Spinner";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButtom } from "./components/CreateTodoButton";
import ModalForm from "./components/ModalForm";

import { TodoContext } from "./context";
import Modal from "./helpers/modalPortal";

function App() {
  //consume the context
  const { filteredTodos, loading, error, openModal } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      {!loading ? (
        <TodoList>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
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

      {openModal ? (
        <Modal>
          <ModalForm />
        </Modal>
      ) : null}

      <CreateTodoButtom />
    </>
  );
}

export default App;
