import { ThemeProvider } from 'next-themes';
import React from 'react';
import { darkTheme } from '../styles/stitches.config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: 'light'
      }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
