/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import ThemeContext from '../context/ThemeContext'

function SEO({ description = ``, meta = [], title }) {
  const { site } = useStaticQuery(
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

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Helmet
          htmlAttributes={{
            lang: 'en',
            class: `${theme.jonify ? 'jonify' : 'default'}`,
          }}
          title={title}
          titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
          ].concat(meta)}
        />
      )}
    </ThemeContext.Consumer>
  )
}

export default SEO
