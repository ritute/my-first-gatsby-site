import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`

`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`

const NavLinkItem = styled.li`
  padding-right: 2rem;
`

const NavLinkText = styled(Link)`
  color: black;
`

const Navbar = () => {
  return (
    <Nav>
      <NavLinks>
        <NavLinkItem>
          <NavLinkText to='/'>Home</NavLinkText>
        </NavLinkItem>
        <NavLinkItem>
          <NavLinkText to='/about'>About</NavLinkText>
        </NavLinkItem>
        <NavLinkItem>
          <NavLinkText to='/blog'>Blog</NavLinkText>
        </NavLinkItem>
      </NavLinks>
    </Nav>
  )
}

export default Navbar
