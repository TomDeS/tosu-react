import React from 'react'
import { PageProps } from 'gatsby'

import Navigation from '@/components/Navigation'

const Home: React.FC<PageProps> = () => (
  <>
    <main>
      <div className="content-wrapper">
        <Navigation />
        <p>
          @TODO:
        </p>
        <ul>
          <li>Functionality from tosu.be</li>
        </ul>
      </div>
    </main>
    <div className="rainbow">
      <div className="sprite"></div>
    </div>
  </>
)

export default Home
