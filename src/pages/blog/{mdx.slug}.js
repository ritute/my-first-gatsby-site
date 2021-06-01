import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage }  from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const BlogPostTemplate = ({ data }) => {
  const { mdx: { body }, mdx: { frontmatter } } = data
  const image = getImage(frontmatter.hero_image)

  return (
    <Layout pageTitle={frontmatter.title}>
      <p>Posted: {frontmatter.date}</p>
      <GatsbyImage 
        image={image}
        alt=""
      />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )

}

export const query = graphql`
  query BlogPost($slug: String) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPostTemplate