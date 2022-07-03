import react from "react";
import styled from "styled-components";

function TodoList(props) {
  return (
    <List>
      <ul>{props.children}</ul>
    </List>
  );
}

const List = styled.section`
  ul {
    margin: 0;
    padding: 0 0 56px 0;
    list-style: none;
  }
`;

export { TodoList };
