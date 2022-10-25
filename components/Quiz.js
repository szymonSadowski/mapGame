import { styled } from '@stitches/react';
import React from 'react';
import { AllCountries } from './quizes';
import { blackA } from '@radix-ui/colors';

const QuizContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '50%',
  height: 600,
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  backgroundColor: '$elementBackground',
  '@media only screen and (max-width: 1200px)': {
    width: '90%'
  },
  '@media only screen and (max-width: 600px)': {
    width: '100%'
  }
});

export const Quiz = () => {
  return (
    <QuizContainer>
      <AllCountries />
    </QuizContainer>
  );
};
