import React from 'react'

import Layout from '@/components/Layout'
import Section from '@/components/Section'
import BankAccount from '@/apps/bankaccount/Bankaccount'

const IndexPage: React.FC = () => (
  <Layout>
    <Section title="Bank account number" id="bank">
      <p>
        Here are randomly generated valid bank account numbers. The Dutch bank
        account number (NL) has the bank code of an existing bank
        <sup id="a1">
          <a href="#f1">[1]</a>
        </sup>
        . For Belgium, the bank code is a random number and may or may not match
        an existing bank. All generated bank accounts should pass most tests. If
        a invalid bank account number was generated, please copy it and log{' '}
        <a href="https://github.com/TomDeS/tosu-react/issues">an issue</a>.
      </p>

      <p>Here you go, these bank account numbers are randomly generated:</p>
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
    </Section>
  </Layout>
)

export default IndexPage
