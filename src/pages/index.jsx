import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GenerateBankAccount from "../apps/bankaccount/Bankaccount"
import Crypto from "../apps/crypto/Crypto"
import Race from "../apps/race/Race"
import Section from "../components/Section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="container">

      <Section title="Bank account number" id="bank">
        <div className="columns">
          <div className="column">
            <p>
              Here are randomly generated bank account numbers. The Dutch bank account number (NL) passes the 11-test and has the bank code of an existing bank. For Belgium, the bank code is a random number and may or may not match an existing bank.
            All generated bank accounts should pass most tests. If a invalid bank account number was generated, please copy it and log <a href="https://github.com/TomDeS/tosu-react/issues">an issue</a>.
            </p>

          </div>
          <div className="column">
            <p>Generated bank account numbers:</p>
            <ul className="list-none">
              <li>BE: <GenerateBankAccount countryCode="BE" /></li>
              <li>NL: <GenerateBankAccount countryCode="NL" /></li>
            </ul>
          </div>
        </div>
      </Section>


      <Section title="Cryptography" id="crypto">
        <Crypto />
      </Section>

      <Section title="Race" id="race">
        <p>
          Let's see who is the fastest.
          Add participant names in the below field and click on 'add'. Done? Then start the race!
          First one to the finish wins. Want to make it super fun? Tick the sound checkbox under 'settings'
          and set the duration to like a million seconds (but not really a million though).
        </p>
        <Race />
      </Section>




    </div>
  </Layout>
)

export default IndexPage
