import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

//passando apenas size de props de Button utilizando metódo pick ou omit que esconde os itens desejados
type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'color'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, color }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors[color!]};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors[color!]};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover {
      background: transparent;
      color: ${theme.colors[color!]};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
