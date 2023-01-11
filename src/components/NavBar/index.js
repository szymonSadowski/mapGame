import React from 'react';
import { Button, PointerText, styled, Text } from '../../styles';
import { NavMobile } from './NavMobile';
import { ThemeToggle } from '../ThemeToggle';
import Link from 'next/link';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

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
  alignItems: 'center',
  gap: '$4'
});

export const NavBar = () => {
  const isMobile = useMediaQuery('(max-width: 450px)');
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const signOut = () => {
    router.push('/');
    supabase.auth.signOut();
  };
  const SignButton = () => {
    return (
      <>
        {session ? (
          <Link href="/">
            <Button variant={'secondary'} size="sm" onClick={signOut}>
              Sign Out
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button variant={'primary'} size="sm">
              Login
            </Button>
          </Link>
        )}
      </>
    );
  };
  return (
    <NavBarContainer>
      <ThemeToggle />
      {isMobile ? (
        <NavMobile>
          <SignButton />
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
                pathname: '/quiz'
              }}>
              <Text className={PointerText()}>Quizes</Text>
            </Link>
            <Link
              href={{
                pathname: '/records'
              }}>
              <Text className={PointerText()}>Records</Text>
            </Link>
          </NavButtonsContainer>
          <NavButtonsContainer>
            {session && (
              <Link
                href={{
                  pathname: '/profile'
                }}>
                <Text className={PointerText()}>Profile</Text>
              </Link>
            )}
            <SignButton />
          </NavButtonsContainer>
        </NavItemsContainer>
      )}
    </NavBarContainer>
  );
};