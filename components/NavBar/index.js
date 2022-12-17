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
  borderLeft: '1px solid $colors$border',
  pl: '$4',
  gap: '$4'
});

export const NavBar = () => {
  const isMobile = useMediaQuery('(max-width: 450px)');
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <NavBarContainer>
      <ThemeToggle />
      {isMobile ? (
        <NavMobile />
      ) : (
        <NavItemsContainer>
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
          <div>
            {session ? <Button onClick={() => supabase.auth.signOut()}>Sign Out</Button> : null}
          </div>
        </NavItemsContainer>
      )}
    </NavBarContainer>
  );
};
