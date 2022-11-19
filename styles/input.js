import { styled } from '@stitches/react';

export const Input = styled('input', {
  all: 'unset',
  maxWidth: '50%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: '$lg',
  lineHeight: 1,
  color: '$highContrast',
  border: '1px solid',
  borderColor: '$solidBorder',
  height: 35,

  '&:focus': { border: '3px solid', borderColor: '$solidBorder' }
});
