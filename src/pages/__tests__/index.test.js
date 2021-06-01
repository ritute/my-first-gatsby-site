import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

import IndexPage from '../index'

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: 'My page title',
      },
    },
  }))
})

describe('IndexPage', () => {
  it('contains a greeting', () => {
    const { getByText } = render(<IndexPage />)
    
    const greeting = getByText('Welcome to my blog!')
    
    expect(greeting).toBeInTheDocument()
  })

  it('contains a gatsby image', () => {
    const { getByRole } = render(<IndexPage />)

    const image = getByRole('img')

    expect(image).toBeInTheDocument()
  })
})