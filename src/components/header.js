import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav id="navbar-main" aria-label="Primary navigation">
      <Link to="/">
        <h1>{siteTitle}</h1>
      </Link>
      <ul>
        <li>
          <a href="#bank">Bank accounts</a>
        </li>
        <li>
          <a href="#crypto">Crypto</a>
        </li>
        <li>
          <a href="#race">Race</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
