import { styled } from './stitches.config';

export const FormContainer = styled('div', {
  backgroundColor: '$elementBackground',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  alignItems: 'center',
  justifyItems: 'center',
  p: '$4',
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px $colors$shadow`
});
export const FormLine = styled('div', {
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
