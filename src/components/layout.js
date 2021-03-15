import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SEO from "./seo"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <Header siteTitle={data.site.siteMetadata?.title || `tosu.be`} />
      <main>{children}</main>
      <footer>
        <div className="wrapper">
          <div className="row">
            <p>
              Published under the
              <a
                href="https://github.com/TomDeS/tosu-react/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
              >
                MIT License
              </a>
              . Issues or improvements? Suggest (or better yet: create a pull
              request) them on
              <a href="https://github.com/TomDeS/tosu-react/issues">GitHub</a>.
            </p>

            <div className="row">
              <p>
                This website uses functional cookies (we don't track you) and
                electricity. Hosted by
                <a href="https://www.netlify.com/">Netlify</a>, thanks!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
