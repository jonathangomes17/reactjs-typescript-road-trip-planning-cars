import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: "Raleway", Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-size: 1rem;
  }
`

export default GlobalStyles
