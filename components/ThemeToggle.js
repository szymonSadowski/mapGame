// ./ThemeToggle.tsx
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import React from 'react';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };
  const ToggleContainer = styled('button', {
    backgroundColor: 'transparent',
    padding: '5px 20px 5px 20px',
    border: '0',
    '&:hover': {
      backgroundColor: '$selectBackground'
    }
  });
  return (
    <ToggleContainer onClick={toggleTheme}>
      <> {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}</>
    </ToggleContainer>
  );
};
