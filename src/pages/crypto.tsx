import React from 'react'

import Layout from '@/components/Layout'
import Crypto from '@/apps/crypto/Crypto'
import Section from '@/components/Section'

const IndexPage: React.FC = () => (
  <Layout>
    <Section title="Cryptography" id="crypto">
      <Crypto />
    </Section>
  </Layout>
)

export default IndexPage
