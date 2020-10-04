import React, { useState } from 'react'

import { Link } from 'gatsby'
import NyanifyToggle from './NyanifyToggle'

const Navigation = () => {
  const [nyanify, setNyanify] = useState(false)

  const toggle = () => {
    setNyanify(!nyanify)
  }

  return (
    <nav id="navbar-main" aria-label="Primary navigation">
      <Link to="/">Tosu.be</Link>

      <ul>
        <li>
          <Link
            to="/"
            aria-label="menu item"
            activeClassName="nav-item--active"
          >
            Start page
          </Link>
        </li>
        <li>
          <NyanifyToggle />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
