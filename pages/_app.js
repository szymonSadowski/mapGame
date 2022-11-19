import { ThemeProvider } from 'next-themes';
import React from 'react';
import { darkTheme } from '../styles/stitches.config';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          dark: darkTheme.className,
          light: 'light'
        }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
