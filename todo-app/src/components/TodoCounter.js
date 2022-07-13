import styled from "styled-components";

const TodoCounter = ({ todoList, loading }) => {
  const completedTodos = todoList.filter((todo) => todo.completed).length;
  const totalTodos = todoList.length;

  return (
    <Progression className={loading && "load"}>
      Has complentado {completedTodos} de {totalTodos} ToDos
    </Progression>
  );
};

const Progression = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 48px;

  &.load {
    opacity: 0.5;
  }
`;

export { TodoCounter };
