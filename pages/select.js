import { styled } from '../styles';
import React from 'react';
import { ScrollAreaComponent } from '../components';
import { quizes } from '../consts/quizes';
import { PlayIcon } from '@radix-ui/react-icons';
import { Layout } from '../components/Layouts';
const MainContentContainer = styled('main', {
  display: 'flex',
  mt: '$10',
  justifyContent: 'center'
});

export default function Select() {
  return (
    <Layout header subTitle={'Select quiz You want to take'}>
      <MainContentContainer>
        <ScrollAreaComponent data={quizes}>
          <PlayIcon />
        </ScrollAreaComponent>
      </MainContentContainer>
    </Layout>
  );
}
