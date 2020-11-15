import React from 'react'
import { PageProps } from 'gatsby'
import Navigation from '@/components/Navigation'

const NotFound: React.FC<PageProps> = () => (
  <main>
    <div className="content-wrapper">
      <Navigation />
      <p>Sorry, page not found!</p>
    </div>
  </main>
)

export default NotFound
