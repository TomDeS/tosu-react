import React from 'react'

import useDarkMode from 'use-dark-mode'

const NyanifyToggle = () => {
  const nyanify = useDarkMode(false, {
    classNameDark: 'nyanify',
    classNameLight: 'regular',
    storageKey: null,
  })

  return (
    <div className="dark-mode-toggle">
      <button onClick={nyanify.toggle}>
        {nyanify.value ? 'Regular' : 'Nyanify!'}
      </button>
    </div>
  )
}

export default NyanifyToggle
