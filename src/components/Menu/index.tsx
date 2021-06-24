import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="open menu" onClick={() => setIsOpen(true)} />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <img src="/img/logo_rd.png" alt="Raia Drogasil" />
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">HTML</S.MenuLink>
          <S.MenuLink href="#">CSS3</S.MenuLink>
          <S.MenuLink href="#">JAVASCRIPT</S.MenuLink>
          <S.MenuLink href="#">REACT</S.MenuLink>
          <S.MenuLink href="#">REDUX</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">HTML</S.MenuLink>
          <S.MenuLink href="#">CSS3</S.MenuLink>
          <S.MenuLink href="#">JAVASCRIPT</S.MenuLink>
          <S.MenuLink href="#">REACT</S.MenuLink>
          <S.MenuLink href="#">REDUX</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
