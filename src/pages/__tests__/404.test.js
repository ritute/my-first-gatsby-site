import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

import NotFoundPage from '../404'

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: 'My page title',
      },
    },
  }))
})

describe('NotFoundPage', () => {
  it('contains NOT FOUND text', () => {
    const { getByText } = render(<NotFoundPage />)

    const notFound = getByText('Page not found')
    
    expect(notFound).toBeInTheDocument()
  })
})