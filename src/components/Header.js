import { HeaderContainer } from '../styles';

export const Header = ({ children }) => {
  return (
    <header>
      <HeaderContainer style={{ textAlign: 'center' }}>{children}</HeaderContainer>
    </header>
  );
};
