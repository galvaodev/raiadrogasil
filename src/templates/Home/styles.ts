import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``
export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${media.greaterThan('medium')`
      flex-wrap: nowrap;
    `}
  `}
`
export const Grid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 20px;

    ${media.greaterThan('medium')`
      width: 33.33%;
    `}
  `}
`
