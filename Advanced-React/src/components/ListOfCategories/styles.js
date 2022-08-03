import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  list-style: none;

  &.fixed {
    background-color: white;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: 10px;
    transform: scale(.8);
    z-index: 1;
  }

  /* &::-webkit-scrollbar {
    display: none;
  } */

  li {
    padding: 0 8px;
  }
`

export { List }
