// eslint-disable-next-line no-use-before-define
import React, { createContext, useState } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeContext = createContext()

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default')
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
