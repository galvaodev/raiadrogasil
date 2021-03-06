import { light } from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Raia Dograsil</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      light.grid.container
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
