import { Link } from 'gatsby'
import React from 'react'

import ThemeContext from '../context/ThemeContext'

const Header = ({ siteTitle }) => (
  <header>
    <nav id="navbar-main" aria-label="Primary navigation">
      <Link to="/">{siteTitle}</Link>
      <ul className="site-nav">
        <li>
          <a href="#bank">Bank accounts</a>
        </li>
        <li>
          <a href="#crypto">Crypto</a>
        </li>
        <li>
          <a href="#race">Race</a>
        </li>
        <li>
          <ThemeContext.Consumer>
            {(theme) => (
              <button className="theme-switcher" onClick={theme.toggleTheme}>
                {theme.jonify ? <span>Default</span> : <span>Jonify</span>}
              </button>
            )}
          </ThemeContext.Consumer>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
