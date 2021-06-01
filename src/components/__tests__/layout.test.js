import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

import Layout from '../layout'

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: 'My page title',
      },
    },
  }))
})

describe('Layout', () => {
  it('renders a heading', () => {
    const { container } = render(
      <Layout pageTitle='Page Title' />
    )

    expect(container.querySelector('h1')).toBeInTheDocument()
  })

  it('renders a navbar', () => {
    const { container } = render(
      <Layout pageTitle='Page Title' />
    )

    expect(container.querySelector('nav')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByText } = render(
      <Layout pageTitle='Page Title'>
        <main>
          <h1>Hello</h1>
        </main>
      </Layout>
    )

    const child = getByText('Hello')

    expect(child).toBeInTheDocument()
  })
})