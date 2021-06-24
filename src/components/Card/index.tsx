import Button from 'components/Button'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'

import * as S from './styles'

export type CardProps = {
  title: string
  color?: 'orange' | 'yellow' | 'purple'
  thumbnail: string
  isLongTexte?: boolean
  text: string
  click?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Card = ({
  title = 'Site Responsivo DESKTOP',
  thumbnail = '/img/desktop.png',
  text = `Quando pressionado o botão <strong>Leia mais...</strong> o restante da
  informação deverá aparecer em scroll down.`,
  color = 'orange',
  isLongTexte = true
}: CardProps) => {
  const [bodyText, setBodyText] = useState(text)
  const [showAll, setShowAll] = useState(false)

  const LongText = useCallback(() => {
    const value: string = text.substring(0, 70) + '...'
    setBodyText(value)
  }, [setBodyText, text])

  const isButton = useCallback(
    (param?) => {
      switch (param) {
        case 'foo':
          return (
            <Button color={color} onClick={() => setShowAll(!showAll)}>
              Leia mais...
            </Button>
          )
        default:
          return 'foo'
      }
    },
    [setShowAll, showAll, color]
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
        {isLongTexte ? isButton('foo') : isButton()}
      </S.Body>
    </S.Wrapper>
  )
}

export default Card
