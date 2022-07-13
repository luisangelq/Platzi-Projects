import styled from "styled-components";

function CreateTodoButtom({ openModal, setOpenModal }) {
  const handleAddTodo = () => {
    console.log("Add todo");
    setOpenModal(!openModal);
  };
  return <AddTodo onClick={handleAddTodo}>+</AddTodo>;
}

const AddTodo = styled.button`
  background-color: #61dafa;
  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 50px;
  position: fixed;
  bottom: 24px;
  right: 47%;
  font-weight: bold;
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  z-index: 100;

  transform: rotate(0);
  transition: 0.3s ease;

  &:hover {
    transform: rotate(224deg);
  }
`;

export { CreateTodoButtom };
