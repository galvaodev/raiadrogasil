import React from 'react'
import { ThemeProvider } from 'styled-components'

import { useTheme } from 'Hooks/context'

const Theme: React.FC = ({ children }) => {
  const { themes } = useTheme()

  const theme = {
    dark: {
      background: '#272823',
      title: '#fff',
      text: '#fff',
      subtitle: '#fff',
      translate: '0px',
      button: '#553AFC'
    },
    light: {
      background: '#f0f0f5 ',
      title: '#3a3a3a',
      subtitle: '#3d3d4d',
      text: '#a8a8b3',
      translate: '37px',
      button: '#000'
    }
  }

  return (
    <>
      <ThemeProvider theme={theme[themes]}>{children}</ThemeProvider>
    </>
  )
}

export default Theme
