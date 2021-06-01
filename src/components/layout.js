import React from 'react'
import styled from 'styled-components'

import Navbar from './navbar'

const Container = styled.main`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`

const Title = styled.title`

`

const Header = styled.h1`

`

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <Title>{pageTitle}</Title>
      <Navbar />
      <Header>{pageTitle}</Header>
      {children}
    </Container>
  )
}

export default Layout
