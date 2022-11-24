import Head from 'next/head';
import { NavBar } from '../NavBar';
import { Header } from '../Header';
import { styled, Container, Title, SubTitle } from '../../styles';

const SpanStyled = styled('span', {
  color: '$highlight'
});

export const Layout = ({ header, subTitle, children }) => {
  return (
    <div>
      <Head>
        <title>MapGame</title>
        <meta name="description" content="MapGame" />
        <link rel="icon" href="/map_app.ico" />
      </Head>
      <Container>
        <NavBar />
        {header && (
          <Header>
            <h1 className={Title()}>
              Map <SpanStyled>Games</SpanStyled>
            </h1>
            {subTitle?.length > 0 && <h2 className={SubTitle()}>{subTitle}</h2>}
          </Header>
        )}
        {children}
      </Container>
    </div>
  );
};
