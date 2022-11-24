import { ThemeProvider } from 'next-themes';
import React from 'react';
import { darkTheme, globalCss } from '../styles/stitches.config';
import { QueryClient, QueryClientProvider } from 'react-query';
const GlobalStyle = globalCss({
  body: {
    margin: 0,
    backgroundColor: '$appBackground'
  }
});

GlobalStyle();

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        defaultTheme="system"
        value={{ light: 'light-theme', dark: darkTheme.toString() }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
