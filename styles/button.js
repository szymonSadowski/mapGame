import { styled } from '@stitches/react';

export const Button = styled('button', {
  font: '$publicoText',
  fontSize: '$small',
  padding: '$50',
  width: '120px',
  // height: 'calc(100% + 6px)',
  borderRadius: '8px',
  variants: {
    variant: {
      primary: {
        color: '$lowContrast',
        backgroundColor: '$elementBackground',
        border: '1px solid $border',
        '&:hover': {
          backgroundColor: '$hoverBackground',
          border: '1px solid $hoverBorder'
        }
      },
      secondary: {
        color: 'white',
        backgroundColor: '$lowContrast',
        border: '1px solid $subtleBorder',
        '&:hover': {
          backgroundColor: '$solidBackground',
          border: '1px solid $hoverBorder'
        }
      }
    },
    size: {
      large: {
        width: '200px',
        height: '50px',
        fontSize: '$large'
      }
    }
  }
});
