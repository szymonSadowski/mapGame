import { ThemeProvider } from 'next-themes';
import React, { useState } from 'react';
import { darkTheme, globalCss } from '../styles/stitches.config';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
const GlobalStyle = globalCss({
  body: {
    margin: 0,
    backgroundColor: '$appBackground'
  }
});

GlobalStyle();

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          defaultTheme="system"
          value={{ light: 'light-theme', dark: darkTheme.toString() }}
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
