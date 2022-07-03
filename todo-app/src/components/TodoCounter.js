import React from 'react'
import styled from 'styled-components'

const TodoCounter = () => {
  return (
    <Progression>Has complentado 2 de 3 ToDos</Progression>
  )
}

const Progression = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 48px;

`

export { TodoCounter };