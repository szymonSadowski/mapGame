import { styled, css } from '@stitches/react';

export const Text = styled('span', {
  color: '$highContrast',
  font: '$publicoText',
  fontSize: '$large',
  display: 'block',
  cursor: 'pointer',
  variants: {
    variant: {
      title: {
        color: '$lowContrast',
        font: '$apercu',
        fontSize: '$title',
        lineHeight: '$100'
      },
      subTitle: {
        color: '$highContrast',
        font: '$mono',
        fontSize: '$extraLarge',
        lineHeight: '$100'
      }
    }
  }
});

export const Title = css('h1', Text, {
  defaultVariants: {
    variant: 'title'
  }
});

export const SubTitle = css('h2', Text, {
  defaultVariants: {
    variant: 'subTitle'
  }
});
