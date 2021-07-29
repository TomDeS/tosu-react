import React from 'react'

import Layout from '@/components/Layout'
import Race from '@/apps/race/Race'
import Crypto from '@/apps/crypto/Crypto'
import Card from '@/components/Card'
import BankAccount from '@/apps/bankaccount/Bankaccount'
import Vin from '@/apps/vin/Vin'
import NationalNumber from '@/apps/nationalNumber/NationalNumber'

const IndexPage: React.FC = () => (
  <Layout>
    <div className="grid">
      <Card title="Bank account numbers" id="bank">
        <p>
          Here are randomly generated valid bank account numbers. The Dutch bank
          account number (NL) has the bank code of an existing bank
          <sup id="a1">
            <a href="#f1">[1]</a>
          </sup>
          . For Belgium, the bank code is a random number and may or may not
          match an existing bank. All generated bank accounts should pass most
          tests. If a invalid bank account number was generated, please copy it
          and log{' '}
          <a href="https://github.com/TomDeS/tosu-react/issues">an issue</a>.
        </p>

        <BankAccount codes={['BE', 'NL']} showDetails />

        <p>
          <small>
            <sup>
              <b id="f1">[1]</b>
            </sup>{' '}
            As the 11-test isn&apos;t required anymore for new NL-bank accounts,
            this check is not included.
          </small>
        </p>
      </Card>

      <Card title="Cryptography" id="crypto">
        <Crypto />
      </Card>
    </div>

    <div className="grid">
      <Card title="National number" id="natNum">
        <p>Here are some random Belgian national numbers.</p>
        Likely male: <NationalNumber gender="M" />
        Likely female: <NationalNumber gender="F" />
      </Card>

      <Card title="Vehicle Identification Number" id="vin">
        <p>
          Random VIN (chassis number)
          <sup id="a2">
            <a href="#f2">[2]</a>
          </sup>
          :
        </p>

        <Vin />
        <small>
          <sup>
            <b id="f2">[2]</b>
          </sup>{' '}
          It may or may not be a valid one.
        </small>
      </Card>
    </div>

    <Card title="Race" id="race">
      <p>
        Let&apos;s see who is the fastest. Add participant names in the below
        field and click on &lsquo;add&rsquo;. Done? Then start the race! Who
        gets the farthest before the time runs out wins. Want to make it super
        fun? Tick the sound checkbox under &lsquo;settings&rsquo; and set the
        duration to like a million seconds (but not really a million though).
      </p>
      <Race />
    </Card>
  </Layout>
)

export default IndexPage
