import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.6rem;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  /* ::-webkit-scrollbar {
    height: 6px;
    width: 3px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(15, 18, 58, 0.6);
    -webkit-border-radius: 8px;
  }

  .ReactModal__Overlay {
    -webkit-perspective: 600;
    perspective: 600;
    opacity: 0;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transition: opacity .2s ease;
  }

  .ReactModal__Content {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }

  .ReactModal__Content--after-open {
    -webkit-transform: scale(1);
    transform: scale(1);
    transition: all .2s ease;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .ReactModal__Content--before-close {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    transition: all .2s ease-in;
  }

  .ReactModal__Body--open,
  .ReactModal__Html--open {
    overflow: hidden;
  }

  .modal-overlay {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(4px);
  }

  .modal-content {
    z-index: 999;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(126.97deg, rgba(6, 11, 40) 28.26%, rgba(10, 14, 35) 91.2%);
    border-radius: 20px;
    border: none;
    outline: none;
    max-width: 600px;
    max-height: 450px;
    height: 100%;
    margin: auto;
    overflow: hidden;

    @media ${({ theme }) => theme.breakpoints.mobile} {
      width: 90%;
    }
  } */
`
