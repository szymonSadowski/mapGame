import { styled } from '@stitches/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { NavBar, ScrollAreaComponent, Quiz } from '../components';
import { quizes } from '../consts/quizes';
import { Container, HeaderContainer, Title, SubTitle } from '../styles';
import { PlayIcon } from '@radix-ui/react-icons';

const MainContentContainer = styled('main', {
  display: 'flex',
  marginTop: '$10',
  justifyContent: 'center'
});

const SpanStyled = styled('span', {
  color: '$highlight'
});

export default function Select() {
  const [state, setState] = useState({
    loading: false,
    quiz: null
  });
  const handleStateChange = (key) => {
    setState({
      ...state,
      quiz: key
    });
  };
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
            <h1 className={Title()}>
              Map <SpanStyled>Games </SpanStyled>
            </h1>
            {!state.quiz ? <h2 className={SubTitle()}>Select quiz You want to take</h2> : null}
          </HeaderContainer>
        </header>
        <MainContentContainer>
          {!state.quiz ? (
            <ScrollAreaComponent data={quizes} handleStateChange={handleStateChange}>
              {' '}
              <PlayIcon />
            </ScrollAreaComponent>
          ) : (
            <Quiz />
          )}
        </MainContentContainer>
      </Container>
    </div>
  );
}
