import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${theme.fontSize.label};
    margin-top: ${theme.spacing[10]};
    color: ${theme.colors.darkBlue};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.labelSmall};
      margin-top: ${theme.spacing[4]};
    `}
  `}
`

export const Note = styled.span`
  ${({ theme }) => css`
    padding: ${theme.spacing[4]};
  `}
`

export const Link = styled.a``
