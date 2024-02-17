import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const QuizImage = styled.img`
  ${({ theme }) => css`
    width: 17%;
    height: auto;
    margin-top: -${theme.spacing[8]};
    margin-bottom: ${theme.spacing[12]};
    border: 2px solid ${theme.colors.white};
    border-radius: 30%;

    ${media.lessThan('medium')`
      width: 40%;
      margin-top: -${theme.spacing[36]};
      margin-bottom: ${theme.spacing[6]};
    `}
  `}
`

export const QuizQuestion = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.body};
    width: 65%;
    text-align: center;

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.labelLarge};
      width: 80%;
    `}
  `}
`

export const QuizAnswer = styled.button`
  ${({ theme }) => css`
    width: 50%;
    color: ${theme.colors.white};
    background-color: ${theme.colors.purple};
    font-size: ${theme.fontSize.labelLarge};
    font-weight: ${theme.fontWeight[500]};
    padding: ${theme.spacing[4]} ${theme.spacing[16]};
    margin-top: ${theme.spacing[16]};
    border: 2px solid ${theme.colors.white};
    border-radius: 8px;

    &:first-of-type {
      background-color: ${theme.colors.red};
    }

    &:hover {
      color: ${theme.colors.white};
      font-weight: ${theme.fontWeight[600]};
      border: 2px solid ${theme.colors.darkBlue};
    }

    &.active {
      color: ${theme.colors.yellow};
      border-color: ${theme.colors.yellow};
    }

    ${media.lessThan('medium')`
      width: 80%;
      font-size: ${theme.fontSize.labelSmall};
      padding: ${theme.spacing[2]} ${theme.spacing[6]};
      margin-top: ${theme.spacing[8]};
    `}
  `}
`
