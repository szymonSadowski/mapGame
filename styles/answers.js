import { styled } from './stitches.config';

export const AnswersContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
  '@bp2': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  },
  '@bp1': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
});

export const Answer = styled('div', {
  p: '$2'
});
