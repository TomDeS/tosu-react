/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'

import ThemeContext from '../context/ThemeContext'

function SEO({ description = ``, meta = [], title }) {
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
          title="tosu.be"
          meta={[
            {
              name: `description`,
              content: `Useful tools like bank account generator, SHA-256 encoder, Base64 encoder/decoder and racing!`,
            },
            {
              property: `og:title`,
              content: `tosu.be`,
            },
          ].concat(meta)}
        />
      )}
    </ThemeContext.Consumer>
  )
}

export default SEO
