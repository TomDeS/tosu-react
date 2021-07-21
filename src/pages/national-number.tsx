import React from 'react'

import Layout from '@/components/Layout'
import Section from '@/components/Section'
import NationalNumber from '@/apps/nationalNumber/NationalNumber'

const IndexPage: React.FC = () => (
  <Layout>
    <Section title="National number" id="natNum">
      <p>Here are some random Belgian national numbers.</p>
      <NationalNumber gender="M" />
      <NationalNumber gender="F" />
    </Section>
  </Layout>
)

export default IndexPage
