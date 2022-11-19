import { createStitches } from '@stitches/react';
import { green, greenDark, mauve } from '@radix-ui/colors';

export const styled = createStitches({
  theme: {
    colors: {
      ...green,
      ...mauve,
      // Alias
      appBackground: '$mauve1',
      subtleBackground: '$mauve2',
      elementBackground: '$mauve3',
      hoverBackground: '$mauve4',
      selectBackground: '$green5',
      subtleBorder: '$green6',
      border: '$mauve6',
      hoverBorder: '$green5',
      solidBackground: '$green9',
      hoverSolidBackground: '$green10',
      lowContrast: '$green9',
      highContrast: '$green12',
      navBarColor: '$mauve4',
      whiteAndBlack: 'hsl(300, 20.0%, 99.0%)',
      mapFill: 'yellow'
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
    ...mauve,
    appBackground: 'hsl(246, 6.0%, 9.0%)',
    subtleBackground: 'hsl(240, 5.1%, 11.6%)',
    elementBackground: '$mauve3',
    hoverBackground: '$mauve6',
    selectBackground: '$green5',
    subtleBorder: '$greenDark6',
    border: 'white',
    hoverBorder: '$green8',
    solidBackground: '$green9',
    hoverSolidBackground: '$green10',
    lowContrats: '$greenDark11',
    highContrast: '$greenDark12',
    navBarColor: '$mauve11',
    whiteAndBlack: '$mauve1',
    mapFill: '#fdfdf9'
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
// const mauveDark = {
//   mauve1: 'hsl(246, 6.0%, 9.0%)',
//   mauve2: 'hsl(240, 5.1%, 11.6%)',
//   mauve3: 'hsl(241, 5.0%, 14.3%)',
//   mauve4: 'hsl(242, 4.9%, 16.5%)',
//   mauve5: 'hsl(243, 4.9%, 18.8%)',
//   mauve6: 'hsl(244, 4.9%, 21.5%)',
//   mauve7: 'hsl(245, 4.9%, 25.4%)',
//   mauve8: 'hsl(247, 4.8%, 32.5%)',
//   mauve9: 'hsl(252, 4.0%, 45.2%)',
//   mauve10: 'hsl(247, 3.4%, 50.7%)',
//   mauve11: 'hsl(253, 4.0%, 63.7%)',
//   mauve12: 'hsl(256, 6.0%, 93.2%)'
// };
// const mauve = {
//   mauve1: 'hsl(300, 20.0%, 99.0%)',
//   mauve2: 'hsl(300, 7.7%, 97.5%)',
//   mauve3: 'hsl(294, 5.5%, 95.3%)',
//   mauve4: 'hsl(289, 4.7%, 93.3%)',
//   mauve5: 'hsl(283, 4.4%, 91.3%)',
//   mauve6: 'hsl(278, 4.1%, 89.1%)',
//   mauve7: 'hsl(271, 3.9%, 86.3%)',
//   mauve8: 'hsl(255, 3.7%, 78.8%)',
//   mauve9: 'hsl(252, 4.0%, 57.3%)',
//   mauve10: 'hsl(253, 3.5%, 53.5%)',
//   mauve11: 'hsl(252, 4.0%, 44.8%)',
//   mauve12: 'hsl(260, 25.0%, 11.0%)'
// };
