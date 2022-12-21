import { styled } from './stitches.config';

export const Container = styled('div', {
  minHeight: '95vh',
  minWidth: '100wv',
  backgroundImage: `url('./map_background.png')`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'bottom',
  p: '$5',
  backgroundColor: '$appBackground',
  backgroundRepeat: 'no-repeat',
  '@bp2': {
    backgroundImage: `url('./map_background_opacity.png')`,
    marginBottom: '$10'
  }
});

export const HeaderContainer = styled('div', {
  display: 'flex',
  marginTop: '$20',
  alignItems: 'center',
  flexDirection: 'column',
  '@media only screen and (max-width: 700px)': {
    marginTop: '$5',
    textAlign: 'center'
  }
});

export const MainContentContainer = styled('main', {
  display: 'flex',
  mt: '$10',
  justifyContent: 'center'
});

export const ProfilePageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  width: '60%'
});

export const FlexContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
});
export const FlexContainerColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
});
