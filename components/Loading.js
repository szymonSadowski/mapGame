import { styled } from '../styles';
import { keyframes } from '@stitches/react';
const SpinnerContainer = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
});
const spinner = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});
const LoadingSpinner = styled('div', {
  width: '100px',
  height: '100px',
  border: '10px solid $colors$highlight' /* Light grey */,
  borderTop: '10px solid $colors$border' /* Black */,
  borderRadius: '50%',
  animation: `${spinner} 1.5s linear infinite`
});

export const Loading = () => {
  return (
    <SpinnerContainer>
      <LoadingSpinner />
    </SpinnerContainer>
  );
};
