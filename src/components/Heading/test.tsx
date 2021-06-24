import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Heading from '.'

describe('<Heading />', () => {
  it('shold render a heading heading by default', () => {
    renderWithTheme(<Heading>RaiaDrogasil</Heading>)
    expect(screen.getByRole('heading', { name: /RaiaDrogasil/i })).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('shold render a heading heading by coloris passed', () => {
    renderWithTheme(<Heading color="secondary">RaiaDrogasil</Heading>)
    expect(screen.getByRole('heading', { name: /RaiaDrogasil/i })).toHaveStyle({
      color: '#868686'
    })
  })

  it('shold render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">RaiaDrogasil</Heading>)
    expect(screen.getByRole('heading', { name: /RaiaDrogasil/i })).toHaveStyle({
      'font-size': '1.4rem'
    })
  })
})
