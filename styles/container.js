import { styled } from '@stitches/react';

export const Container = styled('div', {
  minHeight: '100vh',
  minWidth: '100wv',
  backgroundImage: `url('/map_background.png')`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  padding: '$300',
  backgroundColor: '$appBackground',
  backgroundRepeat: 'no-repeat'
});
