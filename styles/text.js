import { css } from '@stitches/react';
import { styled } from './stitches.config';

export const Text = styled('span', {
  color: '$text',
  font: '$publicoText',
  fontSize: '$large',
  display: 'block',
  variants: {
    variant: {
      title: {
        font: '$apercu',
        fontSize: '$7xl',
        lineHeight: '$2',
        fontWeight: '$bold'
      },
      subTitle: {
        font: '$mono',
        fontSize: '$2xl',
        lineHeight: '$2',
        fontWeight: '$semibold'
      },
      sectionTitle: {
        font: '$mono',
        fontSize: '$xl',
        lineHeight: '$1',
        fontWeight: '$semibold'
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

export const SectionTitle = css('span', Text, {
  defaultVariants: {
    variant: 'sectionTitle'
  }
});

export const PointerText = css('span', {
  cursor: 'pointer',
  '&:hover': {
    color: '$highlight'
  }
});
