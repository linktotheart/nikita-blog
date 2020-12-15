import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import PostLink from "../components/post-link"
import Layout from "../components/layout"

const CasePage = ({
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
        <title>Case Studies — {site.siteMetadata.title}</title>
        <meta name="description" content={"Case study page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}
export default CasePage
export const pageQuery = graphql`
  query CasePageQuery{
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