import { NavLink as RouterNavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ResultImage = styled.img`
  ${({ theme }) => css`
    width: 12%;
    height: auto;
    margin-bottom: ${theme.spacing[12]};
    margin-top: -${theme.spacing[8]};
    border: 2px solid ${theme.colors.white};
    border-radius: 30%;

    ${media.lessThan('medium')`
      width: 35%;
      margin-bottom: ${theme.spacing[8]};
      margin-top: -${theme.spacing[8]};
    `}
  `}
`

export const ResultMessage = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.labelLarge};
    width: 60%;
    text-align: center;
    border: 2px solid yellow;
    padding: ${theme.spacing[12]};
    background-color: ${theme.colors.darkBlue};
    box-shadow: 0 0 30px 0 ${theme.colors.yellow};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.labelSmall};
      width: 90%;
    `}
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    gap: ${theme.spacing[8]};
    margin-top: ${theme.spacing[12]};

    ${media.lessThan('medium')`
      width: 70%;
      flex-wrap: wrap-reverse;
    `}
  `}
`

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing[8]};

    button {
      width: 46px;
      height: 46px;
      border-radius: 8px;
    }

    button:hover {
      outline: 2px solid ${theme.colors.darkBlue};
    }

    button > svg {
      width: 46px;
      height: 46px;
      border-radius: 8px;
    }
  `}
`

export const RestartQuizButton = styled(RouterNavLink)`
  ${({ theme }) => css`
    width: 60%;
    color: ${theme.colors.darkBlue};
    background-color: ${theme.colors.yellow};
    font-size: ${theme.fontSize.labelLarge};
    font-weight: ${theme.fontWeight[500]};
    text-align: center;
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    border: 2px solid ${theme.colors.gray};
    border-radius: 8px;

    &:hover {
      font-weight: ${theme.fontWeight[600]};
      border: 2px solid ${theme.colors.darkBlue};
    }

    ${media.lessThan('medium')`
      width: 50%;
      font-size: ${theme.fontSize.label};
    `}
  `}
`
