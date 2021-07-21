import React from 'react'

import Layout from '@/components/Layout'
import Section from '@/components/Section'
import Vin from '@/apps/vin/Vin'

const IndexPage: React.FC = () => (
  <Layout>
    <Section title="VIN" id="vin">
      <p>
        Here is a random Vehicle Identification Number. As the logic behind it
        is quite special, only the length check passes. The number is generated
        based on the current date/time.
      </p>
      <Vin />
    </Section>
  </Layout>
)

export default IndexPage
