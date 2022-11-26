import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';
import { styled, Text } from '../styles';

export const NavBar = () => {
  const NavBar = styled('nav', {
    position: 'fixed',
    top: 5,
    height: '50px',
    minWidth: '100%',
    display: 'flex'
  });
  const NavItemsContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    borderLeft: '1px solid $colors$border',
    pl: '$4',
    gap: '$4'
  });
  const NavText = styled(Text, {
    '&:hover': {
      color: '$highlight'
    }
  });
  return (
    <NavBar>
      <ThemeToggle />
      <NavItemsContainer>
        <Link
          href={{
            pathname: '/'
          }}>
          <NavText>Home</NavText>
        </Link>

        <Link
          href={{
            pathname: '/select'
          }}>
          <NavText>Select</NavText>
        </Link>
      </NavItemsContainer>
    </NavBar>
  );
};
