require('./src/styles/app.scss')

import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'

const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

export { wrapRootElement }
