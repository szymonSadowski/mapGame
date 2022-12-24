import Head from 'next/head';
import { NavBar } from '../NavBar';
import { Header } from '../Header';
import { styled, Container, Title, SubTitle } from '../../styles';

const SpanStyled = styled('span', {
  color: '$highlight'
});

const StyledContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
});
const StyledChildrenContainer = styled('div', {
  maxWidth: '80%',
  minWidth: 800,
  px: '$4',
  '@bp2': {
    maxWidth: '100%',
    minWidth: 500
  },
  '@bp1': {
    maxWidth: '100%',
    minWidth: 350
  }
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
        <StyledContainer>
          <StyledChildrenContainer>{children}</StyledChildrenContainer>
        </StyledContainer>
      </Container>
    </div>
  );
};
