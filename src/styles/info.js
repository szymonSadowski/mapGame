import { styled } from './stitches.config';

export const InfoContainer = styled('div', {
  color: 'white',
  backgroundColor: '$subtleBackground',
  boxShadow: `0 2px 10px $colors$shadow`,
  mt: '$4',
  p: '$4'
});

export const Info = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  p: '$4',
  mb: '$2',
  borderBottom: '2px solid $colors$border'
});
