import React from 'react'
import { PageProps } from 'gatsby'

import Navigation from '@/components/Navigation'
import Bankaccount from '@/components/bankaccount'

const Home: React.FC<PageProps> = () => (
  <>
    <main>
      <div className="content-wrapper">
        <Navigation />

        <div className="card">
          <Bankaccount />
        </div>
      </div>
    </main>
  </>
)

export default Home
