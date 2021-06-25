import { dark, light } from 'styles/theme'

type Theme = typeof dark
type Theme = typeof light

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
