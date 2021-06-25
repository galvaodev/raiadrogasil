import React, { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeContext = { themes: Theme; toggleTheme: () => void }

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const ThemeCustomProvider: React.FC = ({ children }) => {
  const [themes, setThemes] = useState<Theme>('light')
  const toggleTheme = () => {
    setThemes(themes === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ themes, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  const { themes, toggleTheme } = context
  return { themes, toggleTheme }
}
