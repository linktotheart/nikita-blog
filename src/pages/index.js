import React from "react"
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
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
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader/>
      {/* <h2> Projects  &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
      <div className="center" style={{textAlign: "center"}}>
      <Link to='/case' className="button -primary">View  All &rarr;</Link>
      </div> */}
"
      <h2 className="mt-5">Brands I've worked with</h2>
      <div className="brands">
        <div className="brand">
          <img src="./assets/img/brands (1).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (14).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (2).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (3).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (4).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (5).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (6).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (7).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (8).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (9).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (10).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (11).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (12).webp" alt="none" />
        </div>
        <div className="brand">
          <img src="./assets/img/brands (13).webp" alt="none" />
        </div>

        
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] },limit: 6) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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
