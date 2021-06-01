import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

import BlogPage from '../../blog/index'

const mockMdxData = {
  allMdx: {
    nodes: [
      {
        slug: 'slug-1',
        frontmatter: {
          title: 'Title 1',
          date: 'Date 1',
        },
      },
      {
        slug: 'slug-2',
        frontmatter: {
          title: 'Title 2',
          date: 'Date 2',
        },
      },
    ]
  }
}

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: 'My page title',
      },
    },
  }))
})

describe('BlogPage', () => {
  it('contains a list', () => {
    const { container } = render(<BlogPage data={mockMdxData} />)

    expect(container.querySelector('ul')).toBeInTheDocument()
  })
})