import { styled } from '@stitches/react';

export const HeaderContainer = styled('div', {
  display: 'flex',
  marginTop: '$20',
  alignItems: 'center',
  flexDirection: 'column',
  '@media only screen and (max-width: 700px)': {
    marginTop: '$5'
  }
});
