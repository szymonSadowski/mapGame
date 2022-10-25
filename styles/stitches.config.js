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
      border: '$mauve6',
      hoverBorder: '$green8',
      solidBackground: '$green9',
      hoverSolidBackground: '$green10',
      lowContrast: '$green9',
      highContrast: '$green12',
      navBarColor: '$mauve4',
      white: '$mauve1'
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem',
      '8xl': '6rem'
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    },
    fonts: {
      apercu: 'Apercu, Helvetica, Arial, sans-serif',
      publicoText: 'Publico Text, Georga, Times, serif',
      mono: 'Apercu Mono, Lucida Console, monospace'
    },
    // can't get it to work, alot of issues on github also
    media: {
      light: '(prefers-color-scheme: light)',
      dark: '(prefers-color-scheme: dark)',
      bp1: '(min-width: 280px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1440px)'
    }
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
    border: 'white',
    hoverBorder: '$green8',
    solidBackground: '$green9',
    hoverSolidBackground: '$green10',
    lowContrats: '$greenDark11',
    highContrast: '$greenDark12',
    navBarColor: '$mauve11',
    white: '$mauve1'
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
