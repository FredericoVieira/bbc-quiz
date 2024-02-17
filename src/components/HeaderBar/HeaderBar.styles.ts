import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HeaderBar = styled.div`
  display: flex;

  ${({ theme }) => css`
    padding: ${theme.spacing[5]} ${theme.spacing[16]};

    ${media.lessThan('medium')`
      padding: ${theme.spacing[5]} ${theme.spacing[8]};
    `}
  `}
`

export const LogoLink = styled.a`
  margin: auto;
`

export const Logo = styled.img`
  width: 450px;

  ${media.lessThan('medium')`
    width: 250px;
  `}
`
