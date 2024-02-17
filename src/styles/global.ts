import { createGlobalStyle, css } from 'styled-components'

import { theme } from './theme'

import background from '~/assets/background.png'

export const GlobalStyle = createGlobalStyle`
  ${() => css`
    * {
      margin: 0;
      outline: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      color: ${theme.colors.white};
      background-color: ${theme.colors.blue};
    }

    html {
      font-size: 62.5%;
      min-width: 320px;
    }

    body {
      font-family: 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      font-size: 1.6rem;
      line-height: 1.5;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    #app {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      background-image: url(${background});
      background-size: contain;
      background-position: center center;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `};
`
