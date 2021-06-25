import styled, { css } from 'styled-components'
import * as S from 'components/Button/styles'
export const Wrapper = styled.main`
  ${({ theme }) => css``}
`

export const Thumbnail = styled.div`
  ${({ theme }) => css`
    text-align: center;
    background: ${theme.colors.orange};
    padding: ${theme.spacings.small};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
  `}
`
export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.white};

    ${S.Wrapper} {
      display: block;
      margin-top: 10px;
      margin-left: auto;
    }
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`
