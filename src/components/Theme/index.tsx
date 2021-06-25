import React from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from 'styles/theme'

import { useTheme } from 'Hooks/context'

const Theme: React.FC = ({ children }) => {
  const { themes } = useTheme()

  return (
    <>
      <ThemeProvider theme={themes === 'dark' ? dark : light}>
        {children}
      </ThemeProvider>
    </>
  )
}

export default Theme
