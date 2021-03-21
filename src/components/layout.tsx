/**
 * We use some prop drilling(*) to decide on the current theme.
 * Layout manages the state, gets it from Header, which gets it from ThemeToggler.
 * Layout then passes it on to SEO:
 *  Layout (state management)
 *    |-- SEO (gets theme from Layout)
 *    |-- Header (gets theme from ThemeToggler)
 *        |-- ThemeToggler (sets theme)
 *
 *  Context was originally used, but replaced by drilling as it's overkill
 *
 *  (*) https://kentcdodds.com/blog/prop-drilling
 */

// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import Header from './header'
import SEO from './seo'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default')

  const handleClick = (value: string) => {
    setTheme(value)
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <SEO theme={theme} />
      <Header
        siteTitle="tosu.be"
        theme={theme}
        handleClick={(value: string) => handleClick(value)}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
