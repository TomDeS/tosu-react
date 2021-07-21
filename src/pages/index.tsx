import React from 'react'
import { Link } from 'gatsby'

import Layout from '@/components/Layout'
import Race from '@/apps/race/Race'
import Crypto from '@/apps/crypto/Crypto'
import Section from '@/components/Section'
import BankAccount from '@/apps/bankaccount/Bankaccount'
import Vin from '@/apps/vin/Vin'
import NationalNumber from '@/apps/nationalNumber/NationalNumber'

const IndexPage: React.FC = () => (
  <Layout>
    <div className="grid">
      <Section title="Bank account numbers" id="bank">
        <p>The following bank account numbers are randomly generated:</p>
        <BankAccount codes={['BE', 'NL']} />
        <div>
          <Link to="/bank">More details</Link>
        </div>
      </Section>

      <Section title="VIN" id="vin">
        <p>Random Vehicle Identification Number (VIN):</p>

        <Vin />
        <div>
          <Link to="/vin">More details</Link>
        </div>
      </Section>
    </div>

    <div className="grid">
      <Section title="National number" id="natNum">
        <p>Here are some random Belgian national numbers.</p>
        <NationalNumber gender="M" />
        <NationalNumber gender="F" />

        <div>
          <Link to="/national-number">More details</Link>
        </div>
      </Section>

      <Section title="Cryptography" id="crypto">
        <Crypto />
        <div>
          <Link to="/crypto">More details</Link>
        </div>
      </Section>
    </div>

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
