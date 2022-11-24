import React from 'react';
import { styled } from '../styles';
import { ThemeToggle } from './ThemeToggle';

export const NavBar = () => {
  const NavBar = styled('nav', {
    position: 'fixed',
    height: '50px',
    minWidth: '100%',
    display: 'flex',
    top: 0
  });

  return (
    <NavBar>
      <ThemeToggle />
    </NavBar>
  );
};
