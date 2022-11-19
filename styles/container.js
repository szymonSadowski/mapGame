import { styled } from '@stitches/react';

export const Container = styled('div', {
  minHeight: '95vh',
  minWidth: '100wv',
  backgroundImage: `url('./map_background.png')`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'bottom',
  padding: '$5',
  backgroundColor: '$appBackground',
  backgroundRepeat: 'no-repeat',
  '@media only screen and (max-width: 700px)': {
    backgroundImage: `url('./map_background_opacity.png')`,
    marginBottom: '$10'
  }
});
