import Button from 'components/Button'
import { useTheme } from 'Hooks/context'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'

import * as S from './styles'

export type CardProps = {
  title: string
  color?: 'orange' | 'yellow' | 'purple'
  thumbnail: string
  isLongTexte?: boolean
  text: string
  modalOpen?: any
  blackFriday?: boolean
  click?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Card = ({
  title = 'Site Responsivo DESKTOP',
  thumbnail = '/img/desktop.png',
  text = `Quando pressionado o botão <strong>Leia mais...</strong> o restante da
  informação deverá aparecer em scroll down.`,
  color = 'orange',
  isLongTexte = false,
  modalOpen,
  blackFriday
}: CardProps) => {
  const [bodyText, setBodyText] = useState(text)
  const [showAll, setShowAll] = useState(false)
  const { toggleTheme } = useTheme()

  const LongText = useCallback(() => {
    const value: string = text.substring(0, 70) + '...'
    setBodyText(value)
  }, [setBodyText, text])

  const isButton = useCallback(
    (param?) => {
      switch (param) {
        case 'longText':
          return (
            <Button color={color} onClick={() => setShowAll(!showAll)}>
              Leia mais...
            </Button>
          )
        case 'modal':
          return (
            <Button color={color} onClick={() => modalOpen()}>
              Leia mais...
            </Button>
          )
        case 'blackfriday':
          return (
            <Button color={color} onClick={toggleTheme}>
              Leia mais...
            </Button>
          )
        default:
          return
      }
    },
    [setShowAll, showAll, color, toggleTheme, modalOpen]
  )

  useEffect(() => {
    if (isLongTexte) {
      LongText()
    }
  }, [isLongTexte, LongText])

  return (
    <S.Wrapper>
      <S.Thumbnail color={color}>
        <img src={thumbnail} alt={title} />
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />
      </S.Thumbnail>
      <S.Body>
        <S.Text
          dangerouslySetInnerHTML={{ __html: showAll ? text : bodyText }}
        />
        {isLongTexte && isButton('longText')}
        {modalOpen && isButton('modal')}
        {blackFriday && isButton('blackfriday')}
      </S.Body>
    </S.Wrapper>
  )
}

export default Card
