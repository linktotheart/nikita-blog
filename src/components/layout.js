import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/"> Home </Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Nikita &bull; Portfolio </p>
      </footer>
    </div>
  )
}
