import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
              about
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <a href='https://drive.google.com/file/d/1jFvipU9oTXsA_veJE0LLpS-NbRCEh91B/view' target="_blank" className="button -primary mr-3">Download Resume</a>
        <Link to='/about' className="button -outline">Read More &rarr;</Link>
      </div>
      <div className="row mt-5 mb-5">
          <div className="col-6 nikita-img" >
              <img alt="Nikita" src="./assets/img/nikita.webp" className="img-fluid rounded-circle" />
          </div>
          <div className="col-6">
           <div className="d-flex sub">
              <h3 className="sub-heading">Little bit about me</h3>
              <p className="sub-content" dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.about}} />
              <div className="d-flex social">
                <a href="https://www.facebook.com/kneekeytaaa" target="_blank"><img src="./assets/img/facebook.png" /> </a>
                <a href="https://twitter.com/kneekeytaaa" target="_blank"><img src="./assets/img/twitter.png" /> </a>
                <a href="https://www.instagram.com/imnikita.s/" target="_blank"><img src="./assets/img/instagram.png" /> </a>
                <a href="https://www.linkedin.com/in/nikita-shelar-644948146/" target="_blank"><img src="./assets/img/linkedin.png" /> </a>
                <a href="mailto:shelar.nikita19@gmail.com" target="_blank"><img src="./assets/img/mail.png" /> </a>
                <a href="tel:8669667019" target="_blank"><img src="./assets/img/phone.png" /> </a>
              </div>
           </div>
           
          </div>
        </div>
      </>
    )}
  />
)