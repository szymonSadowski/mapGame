import React from 'react';
import { Button, PointerText, styled, Text } from '../../styles';
import { NavMobile } from './NavMobile';
import { ThemeToggle } from '../ThemeToggle';
import Link from 'next/link';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

const NavBarContainer = styled('nav', {
  position: 'fixed',
  display: 'flex',
  top: 5,
  height: '50px',
  minWidth: '90%',
  '@bp1': {
    justifyContent: 'space-between'
  }
});
const NavItemsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderLeft: '1px solid $colors$border',
  pl: '$4'
});
const NavButtonsContainer = styled('div', {
  display: 'flex',
  gap: '$4'
});

export const NavBar = () => {
  const isMobile = useMediaQuery('(max-width: 450px)');
  const session = useSession();
  const supabase = useSupabaseClient();
  const SingOutButton = () => {
    return (
      <>
        {session && (
          <Button variant={'secondary'} size="sm" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </Button>
        )}
      </>
    );
  };
  return (
    <NavBarContainer>
      <ThemeToggle />
      {isMobile ? (
        <NavMobile>
          <SingOutButton />
        </NavMobile>
      ) : (
        <NavItemsContainer>
          <NavButtonsContainer>
            <Link
              href={{
                pathname: '/'
              }}>
              <Text className={PointerText()}>Home</Text>
            </Link>
            <Link
              href={{
                pathname: '/select'
              }}>
              <Text className={PointerText()}>Select</Text>
            </Link>
          </NavButtonsContainer>
          <div>
            <SingOutButton />
          </div>
        </NavItemsContainer>
      )}
    </NavBarContainer>
  );
};