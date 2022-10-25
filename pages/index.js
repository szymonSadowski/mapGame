import { styled } from '@stitches/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { NavBar } from '../components';
import { Container, HeaderContainer, Title, SubTitle, Button } from '../styles';

const MainContentContainer = styled('div', {
  display: 'flex',
  marginTop: '$20',
  justifyContent: 'center',
  gap: '$4',
  flexDirection: 'row',
  px: '$4'
});

const LinkStyled = styled('a', {
  textDecoration: 'none'
});
export default function Home() {
  return (
    <div>
      <Head>
        <title>MapGame</title>
        <meta name="description" content="MapGame" />
        <link rel="icon" href="/map_app.ico" />
      </Head>
      <Container>
        <NavBar />
        <header>
          <HeaderContainer>
            <h1 className={Title()}>MapGames</h1>
            <h2 className={SubTitle()}>Try your geo knowledge</h2>
          </HeaderContainer>
        </header>
        <main>
          <MainContentContainer>
            <Button variant="primary" size="lg">
              <Link href="/select">
                <LinkStyled>Select Game</LinkStyled>
              </Link>
            </Button>
            <Button variant="secondary" size="lg">
              Login
            </Button>
          </MainContentContainer>
        </main>
      </Container>
    </div>
  );
}
