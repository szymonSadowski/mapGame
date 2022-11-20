import { styled } from '../styles/stitches.config';

export const Container = styled('div', {
  minHeight: '95vh',
  minWidth: '100wv',
  backgroundImage: `url('./map_background.png')`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'bottom',
  p: '$5',
  backgroundColor: '$appBackground',
  backgroundRepeat: 'no-repeat',
  '@bp2': {
    backgroundImage: `url('./map_background_opacity.png')`,
    marginBottom: '$10'
  }
});
