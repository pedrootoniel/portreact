import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font: 62.5% 'Nunito', sans-serif;
}

body {
  font-size: 1.6rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: background 0.2s ease-in, color 0.2s ease-in;
}
`
