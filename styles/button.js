import { styled } from '@stitches/react';

export const Button = styled('button', {
  font: '$publicoText',
  cursor: 'pointer',
  border: 0,
  padding: '$4',
  margin: 0,
  textDecoration: 'none',
  appearance: 'none',
  boxSizing: 'border-box',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  fontFamily: 'inherit',
  fontWeight: '$medium',
  lineHeight: 1,
  fontSize: '$small',
  borderRadius: '8px',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px $mauve5'
  },
  '&:disabled': {
    pointerEvents: 'none',
    opacity: '50%',
    cursor: 'not-allowed'
  },
  variants: {
    variant: {
      primary: {
        color: '$lowContrast',
        backgroundColor: '$elementBackground',
        border: '1px solid $border',
        '&:hover': {
          backgroundColor: '$hoverBackground'
        }
      },
      secondary: {
        color: 'white',
        backgroundColor: '$lowContrast',
        border: '1px solid $subtleBorder',
        '&:hover': {
          backgroundColor: '$hoverSolidBackground'
        }
      }
    },
    size: {
      xs: {
        px: '10px',
        fontSize: '$xs',
        height: '$7'
      },
      sm: {
        px: '$3',
        fontSize: '$sm',
        height: '$8'
      },
      md: {
        px: '$2',
        fontSize: '$md',
        height: '$10'
      },
      lg: {
        px: '$6',
        fontSize: '$lg',
        height: '$12',
        minWidth: '120px'
      }
    },
    icon: {
      true: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '$1'
      }
    }
  }
});
