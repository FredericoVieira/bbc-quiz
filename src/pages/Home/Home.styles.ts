import { NavLink as RouterNavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HomeImage = styled.img`
  ${({ theme }) => css`
    width: 45%;
    margin-bottom: ${theme.spacing[24]};

    ${media.lessThan('medium')`
      width: 85%;
      margin-bottom: ${theme.spacing[16]};
    `}
  `}
`

export const StartQuizButton = styled(RouterNavLink)`
  ${({ theme }) => css`
    width: 20%;
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
