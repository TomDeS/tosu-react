import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

interface ThemeButtonProps {
  name: string
  currentTheme: string
  handleClick: any
}

const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const { name } = props
  const { currentTheme } = props
  const lowerName = name.toLowerCase()

  let icon = ''
  let styles = ''
  let isDisabled = false

  if (lowerName === currentTheme) {
    isDisabled = true
    styles = 'button__active'
  }

  if (lowerName === 'default') {
    icon = '🌙'
  } else if (lowerName === 'jellefy') {
    icon = '☀'
  } else {
    icon = '🙀'
  }

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    props.handleClick(e.target.value)
  }

  return (
    <button
      onClick={(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e)}
      className={styles}
      value={lowerName}
      disabled={isDisabled}
      type="button"
    >
      {name}
      <small>{icon}</small>
    </button>
  )
}

const ThemeToggler: React.FC = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(e)
  }

  return (
    <div className="theme-toggler">
      <ThemeButton
        name="default"
        currentTheme={currentTheme}
        handleClick={(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e)}
      />
      <ThemeButton
        name="Jellefy"
        currentTheme={currentTheme}
        handleClick={(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e)}
      />
      <ThemeButton
        name="Jonify"
        currentTheme={currentTheme}
        handleClick={(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e)}
      />
    </div>
  )
}

export default ThemeToggler
