/**
 * Theme toggle component
 * Vaguely based on https://electricanimals.com/articles/next-js-dark-mode-toggle
 */

import React, { useState, useEffect } from 'react'
import settings from '@/config/config'

interface ThemeButtonProps {
  name: string
  icon: string
  activeTheme: string
  handleClick: any
}

const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const { name, icon, activeTheme } = props

  const changeTheme = (val: string) => {
    props.handleClick(val)
  }

  const isDisabled = activeTheme === name
  return (
    <button
      onClick={(e: any) => changeTheme(e.target.value)}
      className={isDisabled ? 'button__disabled' : 'button__active'}
      value={name}
      disabled={isDisabled}
      type="button"
    >
      {name}
      <small>{icon}</small>
    </button>
  )
}

function checkThemeMode(): string {
  let theme = 'default'

  // Avoid Gatsby build fail over window
  if (typeof window !== 'undefined') {
    // If user selected a value manually, use that one
    const savedTheme = window.localStorage.getItem('theme')

    if (savedTheme && savedTheme !== undefined) {
      theme = savedTheme
    }
    // Otherwise, check if user has a preference and use that value
    else {
      const userPrefersLight =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches
      if (userPrefersLight) {
        theme = 'jellefy'
      }
    }
  }

  return theme
}

const ThemeToggler: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState('default')

  const handleClick = (val: string) => {
    setActiveTheme(val)
  }

  // Get theme from local storage (if available) on component (un)mount
  useEffect(() => {
    const pref = checkThemeMode()
    setActiveTheme(pref)
  }, [])

  // Set the active theme and store it in local storage
  useEffect(() => {
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  return (
    <div className="theme-toggler">
      {settings.theme &&
        settings.theme.map((theme) => (
          <ThemeButton
            name={theme.value}
            icon={theme.icon}
            activeTheme={activeTheme}
            handleClick={(e: string) => handleClick(e)}
            key={theme.name}
          />
        ))}
    </div>
  )
}

export default ThemeToggler
