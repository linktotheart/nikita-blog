import React from "react"
import Social from "../components/social"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{background: `rgba(0,0,0,0.015)`, marginBottom: 0}}>
          <h1 className="post-title">Don't be shy to say Hi!</h1>
          <p>Write to me at &rarr;</p>
          <h3>
          <a href="mailto:shelar.nikita19@gmail.com">shelar.nikita19@gmail.com</a>
          </h3>
          <h3>
          <a href="mailto: nikita.shelar@scmc.edu.in"> nikita.shelar@scmc.edu.in</a>
          </h3>
        </div>
        <div>
          <h1 style={{marginBottom: "2rem"}}>
            Follow me on
          </h1>

          <Social />


        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`