import React from 'react'
import { render } from '@testing-library/react'

import Navbar from '../navbar'

describe('Navbar', () => {
  it('renders a nav', () => {
    const { container } = render(<Navbar />)

    expect(container.querySelector('nav')).toBeInTheDocument()
  })

  it('renders links', () => {
    const { container } = render(<Navbar />)

    expect(container.querySelector('a')).toBeInTheDocument()
  })
})