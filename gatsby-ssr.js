// wrapRootElement in SSR too, not only in browser
// https://github.com/gatsbyjs/gatsby/issues/15968

import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'

const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

export { wrapRootElement }
