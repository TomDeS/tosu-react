import React, { useState } from 'react'

import { Link } from 'gatsby'

const Navigation = () => {
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
          <Link
            to="/404"
            aria-label="menu item"
            activeClassName="nav-item--active"
          >
            Random race
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
