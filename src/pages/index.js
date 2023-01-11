import Link from 'next/link';
import React from 'react';
import { styled, Title, SubTitle, Button } from '../styles';
import { Layout } from '../components/Layouts';
import { Header } from '../components';
const MainContentContainer = styled('main', {
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
const DivStyled = styled('div', {
  textDecoration: 'none',
  color: '$highlight',
  display: 'flex',
  marginTop: '$2',
  justifyContent: 'center'
});
const SpanStyled = styled('span', {
  color: '$text'
});
export default function Home({ session }) {
  return (
    <Layout session={session}>
      <Header>
        <h1 className={Title()}>
          The best geo games are{' '}
          <DivStyled>
            HERE <SpanStyled>.</SpanStyled>
          </DivStyled>
        </h1>
        <h2 className={SubTitle()}>
          Try your geo knowledge in our quzies and compete with others!
        </h2>
      </Header>
      <MainContentContainer>
        <Button variant="primary" size="xl">
          <Link href="/quiz">
            <LinkStyled>Select Game</LinkStyled>
          </Link>
        </Button>
      </MainContentContainer>
    </Layout>
  );
}
