import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

const ThemeToggler = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

  const handleClick = (e) => {
    setCurrentTheme(e)
  }

  return (
    <div className="theme-toggler">
      <ThemeButton
        name="default"
        currentTheme={currentTheme}
        handleClick={(e) => handleClick(e)}
      />
      <ThemeButton
        name="Jellefy"
        currentTheme={currentTheme}
        handleClick={(e) => handleClick(e)}
      />
      <ThemeButton
        name="Jonify"
        currentTheme={currentTheme}
        handleClick={(e) => handleClick(e)}
      />
    </div>
  )
}

const ThemeButton = (props) => {
  const lowerName = props.name.toLowerCase()
  let icon = ''
  let styles = ''
  let isDisabled = false

  if (lowerName === props.currentTheme) {
    isDisabled = true
    styles = 'button__active'
  }

  if (lowerName === 'default') {
    icon = `🌙`
  } else if (lowerName === 'jellefy') {
    icon = `☀`
  } else {
    icon = `🙀`
  }

  const handleClick = (e) => {
    e.preventDefault()
    props.handleClick(e.target.value)
  }

  return (
    <button
      onClick={handleClick}
      className={styles}
      value={lowerName}
      disabled={isDisabled}
    >
      {props.name} <small>{icon}</small>
    </button>
  )
}

export default ThemeToggler
