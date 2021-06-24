import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { NavigateNext } from '@styled-icons/material-outlined/NavigateNext'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Leia mais</Button>)

    expect(screen.getByRole('button', { name: /Leia mais/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Leia mais</Button>)

    expect(screen.getByRole('button', { name: /Leia mais/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Leia mais</Button>)

    expect(screen.getByRole('button', { name: /Leia mais/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Leia mais</Button>)

    expect(screen.getByRole('button', { name: /Leia mais/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<NavigateNext data-testid="icon" />}>Leia mais</Button>
    )

    expect(screen.getByText(/Leia mais/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Leia mais
      </Button>
    )
    expect(screen.getByRole('link', { name: /Leia mais/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
