import React from 'react'

const ContextChanges = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
})

export default ContextChanges
