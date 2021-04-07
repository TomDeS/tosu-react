import React from 'react'
import settings from '@/config/config'

const { DEFAULT_THEME, LIGHT_THEME, CRAZY_IN_THE_COCONUT } = settings.theme

interface ThemeButtonProps {
  name: string
  currentTheme: string
  handleClick: any
}

interface ThemeTogglerProps {
  theme: string
  handleClick: any
}

const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const { name, currentTheme } = props
  const upperName = name.toUpperCase()
  console.debug('ThemeButton ', currentTheme, upperName)

  let icon = ''
  let styles = ''
  let isDisabled = false

  if (upperName === currentTheme.toUpperCase()) {
    isDisabled = true
    styles = 'button__active'
  }

  if (upperName === DEFAULT_THEME.toUpperCase()) {
    icon = '🌙'
  } else if (upperName === LIGHT_THEME.toUpperCase()) {
    icon = '☀'
  } else {
    icon = '🙀'
  }

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.debug('ThemeButton handle')
    e.preventDefault()
    props.handleClick(e.target.value)
  }

  return (
    <button
      onClick={(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e)}
      className={styles}
      value={upperName}
      disabled={isDisabled}
      type="button"
    >
      {name}
      <small>{icon}</small>
    </button>
  )
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ theme, handleClick }) => {
  console.debug('ThemeToggler ', theme)

  return (
    <div className="theme-toggler">
      <ThemeButton
        name={DEFAULT_THEME}
        currentTheme={theme}
        handleClick={(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e)}
      />
      <ThemeButton
        name={LIGHT_THEME}
        currentTheme={theme}
        handleClick={(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e)}
      />
      <ThemeButton
        name={CRAZY_IN_THE_COCONUT}
        currentTheme={theme}
        handleClick={(e: React.ChangeEvent<HTMLInputElement>) => handleClick(e)}
      />
    </div>
  )
}

export default ThemeToggler
