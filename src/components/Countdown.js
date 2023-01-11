import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { STATUS } from '../consts/statuses';
import { styled, Button } from '../styles';
import { PlayIcon, StopIcon, ResetIcon } from '@radix-ui/react-icons';
const CountdownContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  px: '$8'
});
const StyledText = styled('div', {
  fontSize: '$3xl',
  fontWeight: '$medium'
});
export function Countdown({ timeForQuiz, status, setStatus }) {
  const [secondsRemaining, setSecondsRemaining] = useState(timeForQuiz);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  const handleStart = () => {
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(timeForQuiz);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.FINISHED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );
  return (
    <CountdownContainer>
      <StyledText>
        {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
      </StyledText>
      {status === STATUS.STOPPED ? (
        <Button onClick={handleStart} variant="secondary" size="sm" icon="true">
          <PlayIcon />
        </Button>
      ) : (
        <Button onClick={handleStop} variant="secondary" size="sm" icon="true">
          <StopIcon />
        </Button>
      )}
      <Button onClick={handleReset} variant="primary" size="sm" icon="true">
        <ResetIcon />
      </Button>
    </CountdownContainer>
  );
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, '0');
