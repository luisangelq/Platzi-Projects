import react from "react";
import styled from "styled-components";

function CreateTodoButtom(props){

    const handleAddTodo = () => {
        console.log("Add todo");
    }
    return(
        <AddTodo
            onClick={handleAddTodo}
        >+</AddTodo>
    );
}

const AddTodo = styled.button`
    background-color: #61DAFA;
  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 50px;
  position: fixed;
  bottom: 24px;
  right: 50%;
  font-weight: bold;
  color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;

  transform: rotate(0);
  transition: .3s ease;

  &:hover {
    transform: rotate(224deg);
    }
`


export { CreateTodoButtom};
