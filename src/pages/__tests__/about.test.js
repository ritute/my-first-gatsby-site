import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

import AboutPage from '../about'

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: 'My page title',
      },
    },
  }))
})

describe('AboutPage', () => {
  it('contains a greeting', () => {
    const { getByText } = render(<AboutPage />)

    const greeting = getByText('Hi there!', { exact: false })
    
    expect(greeting).toBeInTheDocument()
  })
})