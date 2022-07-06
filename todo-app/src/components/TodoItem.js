import { useContext } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

import { checkTodo, deleteTodo } from "../helpers/todoActions";

import { TodoContext } from "../context";

function TodoItem({ todo }) {
  const { todoList, setTodoList, setLoading } = useContext(TodoContext);

  const onCheck = () => {
    
    const markedTodo = checkTodo(todoList, todo.id);
    setTodoList(markedTodo);
    setLoading(false);
  };

  const onDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deletedTodo = deleteTodo(todoList, todo.id);
        setTodoList(deletedTodo);

        Swal.fire({
          icon: "success",
          title: "Your task has been deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <Item>
      <span
        className={`Icon Icon-check ${todo.completed && "Icon-check--active"}`}
        onClick={onCheck}
      >
        ✔
      </span>
      <p className={`Description ${todo.completed && "Completed"}`}>
        {todo.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </Item>
  );
}

const Item = styled.li`
  background-color: #fafafa;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);

  p {
    margin: 24px 0 24px 24px;
    width: calc(100% - 120px);
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }

  .Completed {
    text-decoration: line-through;
  }

  .Icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    font-size: 24px;
    font-weight: bold;
    /* background-color: #CCC; */
  }

  .Icon-check {
    position: absolute;
    left: 12px;
  }
  .Icon-check--active {
    color: #4caf50;
  }

  .Icon-delete {
    position: absolute;
    top: -24px;
    right: 0;
  }
  .Icon-delete:hover {
    color: red;
  }
`;

export { TodoItem };
