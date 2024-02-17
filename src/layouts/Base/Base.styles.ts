import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Page = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${theme.spacing[5]} ${theme.spacing[16]};

    ${media.lessThan('medium')`
      padding: ${theme.spacing[0]} ${theme.spacing[12]};
    `}
  `}
`
