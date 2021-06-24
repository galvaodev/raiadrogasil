import styled, { css } from 'styled-components'
import media from 'styled-media-query'

interface flexProps {
  flex?: boolean
}

export const Wrapper = styled.footer``

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
  `}

  ${media.greaterThan('medium')`
    flex-wrap: nowrap;
  `}
`
export const Column = styled.div<flexProps>`
  ${({ theme, flex }) => css`
    text-align: center;

    a,
    span {
      display: block;
      color: ${theme.colors.secondary};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }

    ${flex &&
    css`
      flex: 1;
      display: flex;
      padding-left: ${theme.spacings.medium};

      img {
        margin-right: 10px;
      }

      ${media.lessThan('medium')`
        padding-left: 0;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: center;

        img {
          height: 25px;
        }
      `}
    `}

    ${media.lessThan('medium')`
      img {
        height: 20px;
      }
    `}
  `}
`
export const Copyright = styled.div`
  ${({ theme }) => css`
    width: auto;
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xsmall};
    text-align: left;
  `}
`
