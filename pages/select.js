import { styled } from '@stitches/react';
import Head from 'next/head';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Button } from '../styles/button';
import { Container } from '../styles/container';
import { SubTitle, Title } from '../styles/text';

export default function Select() {
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
            <h2 className={SubTitle()}>Select quiz You want to take</h2>
          </HeaderContainer>
        </header>
        <main>test</main>
      </Container>
    </div>
  );
}
