import { createStitches } from '@stitches/react';
import { green, slate, blackA, grass } from '@radix-ui/colors';

const spacing = {
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
};
export const { styled, css, config, theme, createTheme, reset, getCssText, globalCss, keyframes } =
  createStitches({
    theme: {
      colors: {
        ...green,
        ...slate,
        ...grass,
        ...blackA,
        // Alias
        appBackground: '$slate1',
        subtleBackground: '$slate2',
        elementBackground: '$slate6',
        hoverBackground: '$green6',
        // selectBackground: '$green5',
        // subtleBorder: '$green6',
        border: '$slate5',
        // hoverBorder: '$green5',
        // solidBackground: '$green9',
        // hoverSolidBackground: '$green10',
        highlight: '$green9',
        elementGreenBackground: '$green7',
        elementHover: '$slate8',
        // highContrast: '$green12',
        // navBarColor: '$mauve4',
        // whiteAndBlack: 'hsl(300, 20.0%, 99.0%)',
        // mapFill: 'yellow',
        shadow: '$blackA7',
        text: '$slate12'
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
        ...spacing
      },
      sizes: {
        ...spacing,
        max: 'max-content',
        min: 'min-content',
        full: '100%',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '90rem',
        'container-xs': '$xl',
        'container-sm': '$2xl',
        'container-md': '$3xl',
        'container-lg': '$5xl',
        'container-xl': '$7xl'
      },
      fonts: {
        apercu: 'Apercu, Helvetica, Arial, sans-serif',
        publicoText: 'Publico Text, Georga, Times, serif',
        mono: 'Apercu Mono, Lucida Console, monospace'
      }
    },
    media: {
      light: '(prefers-color-scheme: light)',
      dark: '(prefers-color-scheme: dark)',
      bp1: '(max-width: 280px)',
      bp2: '(max-width: 768px)',
      bp3: '(max-width: 1024px)',
      bp4: '(max-width: 1440px)'
    },
    utils: {
      p: (value) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value
      }),
      pt: (value) => ({
        paddingTop: value
      }),
      pr: (value) => ({
        paddingRight: value
      }),
      pb: (value) => ({
        paddingBottom: value
      }),
      pl: (value) => ({
        paddingLeft: value
      }),
      px: (value) => ({
        paddingLeft: value,
        paddingRight: value
      }),
      py: (value) => ({
        paddingTop: value,
        paddingBottom: value
      }),

      m: (value) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value
      }),
      mt: (value) => ({
        marginTop: value
      }),
      mr: (value) => ({
        marginRight: value
      }),
      mb: (value) => ({
        marginBottom: value
      }),
      ml: (value) => ({
        marginLeft: value
      }),
      mx: (value) => ({
        marginLeft: value,
        marginRight: value
      }),
      my: (value) => ({
        marginTop: value,
        marginBottom: value
      }),
      bg: (value) => ({
        backgroundColor: value
      }),
      br: (value) => ({
        borderRadius: value
      }),
      btrr: (value) => ({
        borderTopRightRadius: value
      }),
      bbrr: (value) => ({
        borderBottomRightRadius: value
      }),
      bblr: (value) => ({
        borderBottomLeftRadius: value
      }),
      btlr: (value) => ({
        borderTopLeftRadius: value
      }),
      ox: (value) => ({ overflowX: value }),
      oy: (value) => ({ overflowY: value }),
      boxSize: (value) => ({
        width: value,
        height: value
      }),
      w: (value) => ({ width: value }),
      h: (value) => ({ height: value }),
      maxW: (value) => ({ maxWidth: value }),
      maxH: (value) => ({ maxHeight: value })
    }
  });

const darkModeConfig = {
  ...blackA,
  colors: {
    appBackground: 'hsl(200, 7.0%, 8.8%)', // slateDark1
    subtleBackground: 'hsl(195, 7.1%, 11.0%)', //slateDark2
    text: 'hsl(210, 6.0%, 93.0%)', // slateDark12
    hoverBackground: 'hsl(154, 50.9%, 17.6%)', //greenDark6
    elementBackground: 'hsl(199, 6.4%, 17.9%)', //slateDark6,
    elementHover: 'hsl(207, 5.6%, 31.6%)', // slateDark8
    elementGreenBackground: 'hsl(153, 51.8%, 21.8%)', // greenDark7
    // subtleBackground: 'hsl(240, 5.1%, 11.6%)',
    // elementBackground: '$mauve3',
    // hoverBackground: '$mauve6',
    // selectBackground: '$green5',
    // subtleBorder: '$greenDark6',
    border: 'hsl(198, 6.6%, 15.8%)',
    // hoverBorder: '$green8',
    // solidBackground: '$green9',
    // hoverSolidBackground: '$green10',
    highlight: 'hsl(151, 55.0%, 41.5%)', //greenDark9,
    // highContrast: '$greenDark12',
    // navBarColor: '$mauve11',
    // whiteAndBlack: '$mauve1',
    // mapFill: '#fdfdf9',
    shadow: '$blackA7'
  }
};

// const slateDark = {
//   slate1: 'hsl(200, 7.0%, 8.8%)',
//   slate2: 'hsl(195, 7.1%, 11.0%)',
//   slate3: 'hsl(197, 6.8%, 13.6%)',
//   slate4: 'hsl(198, 6.6%, 15.8%)',
//   slate5: 'hsl(199, 6.4%, 17.9%)',
//   slate6: 'hsl(201, 6.2%, 20.5%)',
//   slate7: 'hsl(203, 6.0%, 24.3%)',
//   slate8: 'hsl(207, 5.6%, 31.6%)',
//   slate9: 'hsl(206, 6.0%, 43.9%)',
//   slate10: 'hsl(206, 5.2%, 49.5%)',
//   slate11: 'hsl(206, 6.0%, 63.0%)',
//   slate12: 'hsl(210, 6.0%, 93.0%)'
// };
// const greenDark = {
//   green1: 'hsl(146, 30.0%, 7.4%)',
//   green2: 'hsl(155, 44.2%, 8.4%)',
//   green3: 'hsl(155, 46.7%, 10.9%)',
//   green4: 'hsl(154, 48.4%, 12.9%)',
//   green5: 'hsl(154, 49.7%, 14.9%)',
//   green6: 'hsl(154, 50.9%, 17.6%)',
//   green7: 'hsl(153, 51.8%, 21.8%)',
//   green8: 'hsl(151, 51.7%, 28.4%)',
//   green9: 'hsl(151, 55.0%, 41.5%)',
//   green10: 'hsl(151, 49.3%, 46.5%)',
//   green11: 'hsl(151, 50.0%, 53.2%)',
//   green12: 'hsl(137, 72.0%, 94.0%)'
// };
// export const Global = styled.globalCss({
//   body: {
//     margin: 0,
//     backgroundColor: '$appBackground'
//   }
// });

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
  }
});
globalStyles();
// Global();
export const darkTheme = createTheme('dark-theme', darkModeConfig);
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
