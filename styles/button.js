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
    boxShadow: '0 0 0 2px $colors$shadow'
  },
  '&:disabled': {
    pointerEvents: 'none',
    opacity: '50%',
    cursor: 'not-allowed'
  },
  variants: {
    variant: {
      primary: {
        color: '$text',
        backgroundColor: '$elementBackground',
        border: '1px solid $border',
        '&:hover': {
          backgroundColor: '$elementHover'
        }
      },
      secondary: {
        color: '$text',
        backgroundColor: '$elementGreenBackground',
        border: '1px solid $subtleBorder',
        '&:hover': {
          backgroundColor: '$highlight'
        }
      }
    },
    size: {
      xs: {
        px: '10px',
        fontSize: '$xs'
        // height: '$7'
      },
      sm: {
        px: '$3',
        fontSize: '$sm'
      },
      md: {
        px: '$2',
        fontSize: '$md'
      },
      lg: {
        px: '$6',
        fontSize: '$lg',
        // height: '$12',
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
