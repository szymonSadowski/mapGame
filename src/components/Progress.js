import * as Progress from '@radix-ui/react-progress';
import { styled } from '../styles/stitches.config';

const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$elementGreenBackground',
  borderRadius: '99999px',
  width: '60%',
  height: 25,
  transform: 'translateZ(0)'
});

const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: '$highlight',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)'
});

export const ProgressBar = (value) => {
  return (
    <ProgressRoot value={value.currentValue}>
      <ProgressIndicator
        style={{
          transform: `translateX(${(value.currentValue / value.maxValue) * 100}%)`
        }}
      />
    </ProgressRoot>
  );
};
