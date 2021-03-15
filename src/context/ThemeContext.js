import React from 'react'

const defaultState = {
  jonify: false,
  toggleTheme: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  state = {
    jonify: false,
  }

  toggleTheme = () => {
    let jonify = !this.state.jonify
    this.setState({ jonify })
  }

  render() {
    const { children } = this.props
    const { jonify } = this.state
    return (
      <ThemeContext.Provider
        value={{
          jonify,
          toggleTheme: this.toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
