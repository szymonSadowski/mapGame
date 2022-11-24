import React from 'react';
import { mauve, blackA } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { styled, Button, SectionTitle, Text } from '../styles';
import Link from 'next/link';
const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  height: 600,
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px $colors$shadow`
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit'
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: blackA.blackA6,
  transition: 'background 160ms ease-out',
  '&:hover': { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE
  }
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: mauve.mauve10,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44
  }
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8
});

// Exports
export const ScrollArea = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;

// Your app...
const Box = styled('div', {});
const TagContainer = styled('div', {});

const Tag = styled('div', {
  color: '$white',
  fontSize: '$md',
  lineHeight: '$1',
  marginTop: '$3',
  borderTop: `1px solid $border`,
  padding: '$4',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '0.6fr 1fr 0.5fr',
  gap: '$4',
  '@bp2': {
    display: 'flex',
    flexDirection: 'column'
  }
});

export const ScrollAreaComponent = ({ data, children }) => {
  return (
    <ScrollArea>
      <ScrollAreaViewport css={{ backgroundColor: '$subtleBackground' }}>
        <Box style={{ padding: '15px 20px' }}>
          <Text className={SectionTitle()} css={{ padding: '$4' }}>
            Quizes
          </Text>
          {data.map((quiz) => (
            <TagContainer key={quiz.key}>
              <Tag>
                <span>{quiz.name}</span>
                <span> {quiz.description}</span>
                {/* <Link href="/quizes/[quiz]" as={`quizes/${quiz}`} key={quiz.key}> */}
                <Link
                  href={{
                    pathname: '/quiz',
                    query: { quiz: `${quiz.key}` }
                  }}>
                  <Button variant="secondary" size="lg" icon="true">
                    {' '}
                    Play
                    {children}
                  </Button>
                </Link>
              </Tag>
            </TagContainer>
          ))}
        </Box>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollArea>
  );
};
