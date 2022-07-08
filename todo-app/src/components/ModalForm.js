import React, { useState, useContext } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

import { TodoContext } from "../context";

const ModalForm = () => {
  const [title, setTitle] = useState("");

  const {todoList, setTodoList, setOpenModal } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: title,
      completed: false,
    };

    const newTodoList = [ newTodo, ...todoList];
    setTodoList(newTodoList);

    setOpenModal(false);
    setTitle("");

    Swal.fire({
      icon: "success",
      title: "Your task has been added",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Cortar la cebolla"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={() => setOpenModal(false)}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  width: 90%;
  max-width: 300px;
  background-color: #fff;
  padding: 33px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;

  label {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #1e1e1f;
    margin-bottom: 26px;
  }

  input {
    background-color: #f9fbfc;
    border: 2px solid #202329;
    border-radius: 2px;
    box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);
    color: #1e1e1f;
    font-size: 20px;
    text-align: center;
    padding: 12px;
    height: 96px;
    width: calc(100% - 25px);
  }

  textarea::placeholder {
    color: #a5a5a5;
    font-family: "Montserrat";
    font-weight: 400;
  }

  textarea:focus {
    outline-color: #61dafa;
  }

  .TodoForm-buttonContainer {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .TodoForm-button {
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
    color: #202329;
    font-weight: 400;
    width: 120px;
    height: 48px;
    border-radius: 5px;
    border: none;
    font-family: "Montserrat";
  }

  .TodoForm-button--add {
    background: #61dafa;
    box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
  }

  .TodoForm-button--cancel {
    background: transparent;
  }
`;

export default ModalForm;
