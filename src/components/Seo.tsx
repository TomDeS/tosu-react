import React from 'react'
import { Helmet } from 'react-helmet'

export const SEO: React.FC = () => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
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
