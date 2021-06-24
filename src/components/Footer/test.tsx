import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading column name', () => {
    const { container } = renderWithTheme(<Footer />)

    // Contact
    expect(
      screen.getByRole('heading', {
        name: /RD 2017. Todos os direitos reservados/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
