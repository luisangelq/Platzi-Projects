import styled from "styled-components";

const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  list-style: none;

  /* &::-webkit-scrollbar {
    display: none;
  } */

  li {
    padding: 0 8px;
  }
`;

export { List };
