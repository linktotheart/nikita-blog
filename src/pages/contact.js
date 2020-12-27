import React from "react"
import Social from "../components/social"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { Grid } from "@horacioh/gatsby-theme-instagram"


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
        <div className="post-thumbnail contact-bg" style={{ marginBottom: 0}}>
          <h1 className="post-title">Don't be shy to say Hi!</h1>
          <p>Write to me at &rarr;</p>
          <h3>
          <a href="mailto:shelar.nikita19@gmail.com">shelar.nikita19@gmail.com</a>
          </h3>
          <h3>
          <a href="mailto: nikita.shelar@scmc.edu.in"> nikita.shelar@scmc.edu.in</a>
          </h3>
        </div>
        <div className="get-in-touch">
          <h1 style={{marginBottom: "2rem"}}>
            Get in touch with me on
          </h1>
          <Social />
        </div>
      </div>
      <div className="instagram">
        <h2> Follow @ instagram </h2>
      <Grid />

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