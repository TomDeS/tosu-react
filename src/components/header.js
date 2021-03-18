import ThemeToggler from '../utilities/ThemeToggler'
import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <nav id="navbar-main" aria-label="Primary navigation">
      <Link to="/">{siteTitle}</Link>
      <ul className="site-nav">
        <li>
          <a href="/#bank">Bank accounts</a>
        </li>
        <li>
          <a href="/#crypto">Crypto</a>
        </li>
        <li>
          <a href="/#race">Race</a>
        </li>
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
