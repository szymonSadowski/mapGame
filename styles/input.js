import { styled } from './stitches.config';

export const Input = styled('input', {
  all: 'unset',
  maxWidth: '100%',
  minHeight: '40px',
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
  boxShadow: '0 2px 10px $colors$shadow',
  backgroundColor: '$whiteAndBlack',
  '&:focus': { border: '3px solid', borderColor: '$solidBorder' },
  '&:disabled': { backgroundColor: '$elementBackground' }
});

export const InputContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px $colors$shadow`,
  backgroundColor: '$subtleBackground',
  mt: '$10',
  p: '$4'
});