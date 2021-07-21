import React from 'react'

import Layout from '@/components/Layout'
import Race from '@/apps/race/Race'
import Section from '@/components/Section'

const IndexPage: React.FC = () => (
  <Layout>
    <Section title="Race" id="race">
      <p>
        Let&apos;s see who is the fastest. Add participant names in the below
        field and click on &lsquo;add&rsquo;. Done? Then start the race! Who
        gets the farthest before the time runs out wins. Want to make it super
        fun? Tick the sound checkbox under &lsquo;settings&rsquo; and set the
        duration to like a million seconds (but not really a million though).
      </p>
      <Race />
    </Section>
  </Layout>
)

export default IndexPage
