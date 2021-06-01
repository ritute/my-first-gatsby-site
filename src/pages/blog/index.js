import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map(node => (
          <li key={node.slug}>
            <article>
              <h2>
                <Link to={node.slug}>{node.frontmatter.title}</Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query BlogPosts {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        slug
      }
    }
  }
`

export default BlogPage
