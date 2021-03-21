// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Link } from 'gatsby'
import ThemeToggler from '../utilities/ThemeToggler'

interface HeaderProps {
  siteTitle: string
}

export const Header: React.FC<HeaderProps> = ({ siteTitle }: HeaderProps) => (
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