/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

import { ThemeContext } from '../context/ThemeContext'

function SEO({ description = ``, meta = [], title }) {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
        class: `${currentTheme}`,
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
  )
}

export default SEO
