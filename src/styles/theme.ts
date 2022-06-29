import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  // colors: {},
  // fontSizes: {},
  breakpoints: {
    mobile: 'only screen and (max-width: 769px)',
    tablet: 'only screen and (max-width: 1023px)',
    wide: 'only screen and (min-width: 1536px)',
    extraWide: 'only screen and (min-width: 1921px)'
  }
}

/* Exemplo de uso (mediaQuery)

@media ${({ theme }) => theme.breakpoints.tablet} {

}

@media ${({ theme }) => theme.breakpoints.mobile} {

}

@media ${({ theme }) => theme.breakpoints.wide} {

}

*/
