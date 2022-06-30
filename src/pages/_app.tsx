import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { GlobalStyle } from 'styles/global'
import ProductProvider from 'context/ProductProvider'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <ProductProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ProductProvider>
      </ThemeProvider>
  )
}

export default MyApp
