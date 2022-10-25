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
        fontSize: '$5xl',
        lineHeight: '$2',
        fontWeight: '$bold'
      },
      subTitle: {
        color: '$highContrast',
        font: '$mono',
        fontSize: '$xl',
        lineHeight: '$2',
        fontWeight: '$semibold'
      },
      sectionTitle: {
        color: '$lowContrast',
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
