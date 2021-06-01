import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'

const Container = styled.main`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`

const Title = styled.p`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
`

const Header = styled.h1`
  color: rebeccapurple;
`

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { site : { siteMetadata : { title }}} = data

  return (
    <Container>
      <title>{title}</title>
      <Title>{title}</Title>
      <Navbar />
      <Header>{pageTitle}</Header>
      {children}
    </Container>
  )
}

export default Layout
