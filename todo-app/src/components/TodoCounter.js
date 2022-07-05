import React from 'react'
import styled from 'styled-components'

const TodoCounter = ({todoList}) => {

  const completedTodos = todoList.filter((todo) => todo.completed).length;
  const totalTodos = todoList.length;

  return (
    <Progression>
      Has complentado { completedTodos } de { totalTodos } ToDos
    </Progression>
  )
}

const Progression = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 48px;

`

export { TodoCounter };