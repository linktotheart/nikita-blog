import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta name="description" content={"About page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -about">
        <div className="post-thumbnail" >
          <img className="fluid" alt="Nikita Me?"/>
        </div>
        <div className="about-text">
          <h3>About Me</h3>
          <p>
          I am an upcoming media professional, currently studying at Symbiosis Center for Media & Communication Pune. With a perpetual hunger for knowledge in cinema. I am a social media enthusiast with a head for marketing.

          20 -year-old Doodler, content writer, food blogger and reading enthusiast. I love teaching and I usually involve myself in various NGO's for Child support. I currently volunteer at Nachiket Balgram an orphanage in Pune. 

          ​<br />

          Having watched Mad Men, I wanted to be the Don Draper of the world, but the quick realization DON-ed upon me that the AD world is more than just whiskeys and charms. Its an entourage of people who survive on creativity. 

          And so I hope to find a place in this Mad world. 

          ​<br />


          Reach out to me on my Instagram - <strong>@imnikita.s</strong> 
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`