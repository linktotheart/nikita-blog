import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import PostLink from "../components/post-link"
import Layout from "../components/layout"

const BlogPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },

  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)


  return (
    <Layout>
      <Helmet>
        <title>Blogs — {site.siteMetadata.title}</title>
        <meta name="description" content={"Case study page of " + site.siteMetadata.description} />
      </Helmet>
      
      <h1>Blogs</h1>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}
export default BlogPage
export const pageQuery = graphql`
  query BlogPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          excerpt(pruneLength: 245)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`