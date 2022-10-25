import { styled } from '@stitches/react';

export const Container = styled('div', {
  minHeight: '100vh',
  minWidth: '100wv',
  backgroundImage: `url('/map_background.png')`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  padding: '$5',
  backgroundColor: '$appBackground',
  backgroundRepeat: 'no-repeat',
  '@media only screen and (max-width: 700px)': {
    backgroundPosition: 'bottom'
  }
});
