import Modal from 'react-modal'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  width: 600px;
  margin: 0 auto;
`

export const ModalComponent = styled(Modal)`
  ${() => css`
    background: rgb(48 61 70 / 84%);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
export const Row = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    background: ${theme.colors.white};
    margin: 0 auto;
    padding: ${theme.spacings.small};

    form {
      width: 100%;

      > div {
        margin-top: 10px;

        span {
          font-size: 14px;
        }
      }

      input {
        margin-right: 10px;
        padding: 10px 0.8rem;
      }

      button {
        padding: 15px 0px;
      }

      label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #fff;

        input {
          width: auto;
        }
      }
    }

    ${media.greaterThan('medium')`
        width: 80%;

        form {
          width: 70%;

          input {
            padding: 15px 0.8rem;
          }

          button {
            padding: 20px 0px;
          }
        }
    `}

    ${media.greaterThan('huge')`
      width: 60%;

      form {
        width: 40%;

      > div {
        margin-top: 15px;

        span {
          font-size: 16px;
        }
      }

        input {
          padding: 20px 0.8rem;
        }

        button {
          padding: 20px 0px;
        }
      }
    `}
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: 0;

    svg {
      width: 40px;
      color: ${theme.colors.secondary};
    }
  `}
`
