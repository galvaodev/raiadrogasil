import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  fullWidth?: string
  greaterThan?: breakpoint
  flex?: number
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint, widthFull?: string, flex?: number) => css`
    ${media.lessThan(size)`
      display: ${widthFull ? 'flex' : 'block'};
      width: ${widthFull};
      ${
        flex &&
        css`
          flex: 1;
        `
      }
    `}
  `,

  greaterThan: (size: breakpoint, widthFull?: string, flex?: number) => css`
    ${media.greaterThan(size)`
      display: ${widthFull ? 'flex' : 'block'};
      width: ${widthFull};
      ${
        flex &&
        css`
          flex: 1;
        `
      }
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan, fullWidth, flex }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan, fullWidth, flex)}
    ${!!greaterThan &&
    mediaMatchModifiers.greaterThan(greaterThan, fullWidth, flex)}
  `}
`
