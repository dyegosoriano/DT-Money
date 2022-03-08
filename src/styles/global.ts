import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    --blue: #5429CC;
    --red: #E52E4D;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 85.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--background);
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`
