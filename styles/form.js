import { styled } from './stitches.config';

export const FormContainer = styled('div', {
  backgroundColor: '$elementBackground',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  alignItems: 'center',
  justifyItems: 'center',
  p: '$4',
  width: '40%',
  maxHeight: 600,
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px $colors$shadow`,
  '@bp2': {
    width: '100%'
  }
});
export const FormLine = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4'
});

export const FormLabel = styled('span', {
  fontSize: '$lg',
  fontWeight: '$normal',
  color: '$text'
});
