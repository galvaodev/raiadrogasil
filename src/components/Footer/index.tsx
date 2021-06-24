import Link from 'next/link'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <MediaMatch flex={1} lessThan="medium">
        <S.Column flex>
          <Link href="/">
            <img src="/img/logo_drogaraia.png" alt="RaiaDrogasil" />
          </Link>
          <Link href="/">
            <img src="/img/logo_drogasil.png" alt="RaiaDrogasil" />
          </Link>
          <Link href="/">
            <img src="/img/logo_farmasil.png" alt="RaiaDrogasil" />
          </Link>
          <Link href="/">
            <img src="/img/logo_univers.png" alt="RaiaDrogasil" />
          </Link>
          <Link href="/">
            <img src="/img/logo_4bio.png" alt="RaiaDrogasil" />
          </Link>
        </S.Column>
      </MediaMatch>
      <S.Copyright>
        <Heading color="secondary" size="small">
          RD 2017. Todos os direitos reservados
        </Heading>
      </S.Copyright>

      <MediaMatch flex={1} greaterThan="medium">
        <S.Column flex>
          <Link href="/">
            <img src="/img/logo_drogaraia.png" alt="RaiaDrogasil" />
          </Link>
          <Link href="/">
            <img src="/img/logo_drogasil.png" alt="RaiaDrogasil" />
          </Link>
          <Link href="/">
            <img src="/img/logo_farmasil.png" alt="RaiaDrogasil" />
          </Link>
          <Link href="/">
            <img src="/img/logo_univers.png" alt="RaiaDrogasil" />
          </Link>
          <Link href="/">
            <img src="/img/logo_4bio.png" alt="RaiaDrogasil" />
          </Link>
        </S.Column>
      </MediaMatch>
      <S.Column>
        <img src="/img/logo_rd_small.png" alt="RaiaDrogasil" />
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Footer
