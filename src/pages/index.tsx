import React from 'react'

import Layout from '@/components/layout'
import Race from '@/apps/race/Race'
import Crypto from '@/apps/crypto/Crypto'
import Section from '@/components/Section'
import BankAccount from '@/apps/bankaccount/Bankaccount'

const IndexPage: React.FC = () => (
  <Layout>
    <Section title="Bank account number" id="bank">
      <p>
        Here are randomly generated valid bank account numbers. The Dutch bank
        account number (NL) has the bank code of an existing bank
        <sup>*</sup>. For Belgium, the bank code is a random number and may or
        may not match an existing bank. All generated bank accounts should pass
        most tests. If a invalid bank account number was generated, please copy
        it and log{' '}
        <a href="https://github.com/TomDeS/tosu-react/issues">an issue</a>.
      </p>
      <p>
        <small>
          <sup>*</sup> As the 11-test isn&apos;t required anymore for new
          NL-bank accounts, this check is not included.
        </small>
      </p>

      <p>Here you go, these bank account numbers are randomly generated:</p>
      <BankAccount codes={['BE', 'NL']} />
    </Section>

    <Section title="Cryptography" id="crypto">
      <Crypto />
    </Section>

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
