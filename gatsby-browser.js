import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'

require('./src/styles/app.scss')

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
