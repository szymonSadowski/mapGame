import { styled } from '@stitches/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Button } from '../styles/button';
import { Container } from '../styles/container';
import { SubTitle, Title } from '../styles/text';

export default function Home() {
  const HeaderContainer = styled('div', {
    display: 'flex',
    marginTop: '$1000',
    alignItems: 'center',
    flexDirection: 'column'
  });
  const MainContentContainer = styled('div', {
    display: 'flex',
    marginTop: '$2000',
    justifyContent: 'center',
    gap: '$300'
  });

  const LinkStyled = styled('a', {
    textDecoration: 'none'
  });

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
            <Button variant="primary" size="large">
              <Link href="/select">
                <LinkStyled>Select Game</LinkStyled>
              </Link>
            </Button>
            <Button variant="secondary" size="large">
              Login
            </Button>
          </MainContentContainer>
        </main>
      </Container>
    </div>
  );
}
