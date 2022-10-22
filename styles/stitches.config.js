// stitches.config.ts
import { createStitches } from '@stitches/react';
import { green, greenDark, mauve, mauveDark } from '@radix-ui/colors';

export const styled = createStitches({
  theme: {
    colors: {
      ...green,
      ...mauve,
      // Alias
      appBackground: '$mauve5',
      subtleBackground: '$green2',
      elementBackground: '$mauve3',
      hoverBackground: '$mauve4',
      selectBackground: '$green5',
      subtleBorder: '$green6',
      border: '$green7',
      hoverBorder: '$green8',
      solidBackground: '$green9',
      hoverSolidBackground: '$green10',
      lowContrast: '$green11',
      highContrast: '$green12',
      navBarColor: '$mauve4'
    },
    fontSizes: {
      extraSmall: '0.75rem',
      small: '1rem',
      normal: '1.25rem',
      large: '1.75rem',
      extraLarge: '2.25rem',
      title: '4rem'
    },
    space: {
      50: '0.5rem',
      100: '1.75rem',
      200: '2rem',
      300: '2.25rem',
      400: '2.75rem',
      500: '3.25rem',
      1000: '4rem',
      2000: '10rem'
    },
    fonts: {
      apercu: 'Apercu, Helvetica, Arial, sans-serif',
      publicoText: 'Publico Text, Georga, Times, serif',
      mono: 'Apercu Mono, Lucida Console, monospace'
    }
    // ...
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    tablet: '(min-width: 720px)',
    desktop: '(min-width: 1280px)'
  }
});

export const darkTheme = styled.createTheme({
  colors: {
    ...greenDark,
    ...mauveDark,
    ...mauve,
    appBackground: '$mauve11',
    subtleBackground: '$greenDark2',
    elementBackground: '$mauve9',
    hoverBackground: '$mauve10',
    selectBackground: '$green5',
    subtleBorder: '$greenDark6',
    border: '$green7',
    hoverBorder: '$green8',
    solidBackground: '$green9',
    hoverSolidBackground: '$greenDark10',
    lowContrats: '$greenDark11',
    highContrast: '$greenDark12',
    navBarColor: '$mauve11'
  }
});

export const globalStyles = styled.globalCss({
  '@dark': {
    // notice the `media` definition on the stitches.config.ts file
    ':root:not(.light)': {
      ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
        const currentColor = darkTheme.colors[currentColorKey];
        const currentColorValue =
          currentColor.value.substring(0, 1) === '$'
            ? `$colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet
        };
      }, {})
    }
  }
});
export const Global = styled.globalCss({
  body: {
    margin: 0,
    backgroundColor: '$appBackground'
  }
});

globalStyles();
Global();
