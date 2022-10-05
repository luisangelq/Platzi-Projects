import React from 'react'
import styled from 'styled-components'
import '../styles/components/Layout.css'

import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <Container className='Main'>
        <Header />
        {children}
        <Footer />
    </Container>
  )
}

const Container = styled.div`
    
`

export default Layout