import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      wide: string;
      extraWide: string;
    }
  }
}
