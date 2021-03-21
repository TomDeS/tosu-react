/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Helmet } from 'react-helmet'

interface SEOProps {
  theme: string
}

export const SEO: React.FC<SEOProps> = ({ theme }) => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
      class: `${theme}`,
    }}
    title="tosu.be"
    meta={[
      {
        name: 'description',
        content:
          'Useful tools like bank account generator, SHA-256 encoder, Base64 encoder/decoder and racing!',
      },
      {
        property: 'og:title',
        content: 'tosu.be',
      },
    ]}
  />
)

export default SEO
