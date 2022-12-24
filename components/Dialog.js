import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Link from 'next/link';
import { keyframes } from '@stitches/react';
import { styled, Button } from '../styles';
import { blackA } from '@radix-ui/colors';
const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
});

const AlertDialogContent = styled(AlertDialog.Content, {
  backgroundColor: '$subtleBackground',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' }
});

const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: '$highlight',
  fontSize: '$2xl',
  fontWeight: 'bold'
});

const AlertDialogDescription = styled(AlertDialog.Description, {
  color: '$text',
  fontSize: 'xl',
  fontWeight: 'semibold',
  lineHeight: 1.5
});

const Flex = styled('div', { display: 'flex' });

export const Dialog = ({ open, setOpen, completed, score }) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Portal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          {completed ? (
            <>
              <AlertDialogTitle>Congratulations!!</AlertDialogTitle>
              <AlertDialogDescription>
                You guess all the countries! Amazing {score}
              </AlertDialogDescription>
            </>
          ) : (
            <>
              <AlertDialogTitle>Your time has ended</AlertDialogTitle>
              <AlertDialogDescription>Your score is: {score}</AlertDialogDescription>
            </>
          )}
          <AlertDialogDescription>Go play another quiz!</AlertDialogDescription>
          <Flex css={{ justifyContent: 'flex-end' }}>
            <AlertDialog.Action asChild>
              <Button variant="primary" css={{ marginRight: '$4' }}>
                No, I want to watch my map
              </Button>
            </AlertDialog.Action>
            <AlertDialog.Action asChild>
              <Link href="/quiz" passHref legacyBehavior>
                <Button variant="secondary">Sure!</Button>
              </Link>
            </AlertDialog.Action>
          </Flex>
        </AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
