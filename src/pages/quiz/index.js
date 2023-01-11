import { PlayIcon } from '@radix-ui/react-icons';
import { ScrollAreaComponent } from '../../components';
import { Layout } from '../../components/Layouts';
import { quizes } from '../../consts/quizes';
import { MainContentContainer } from '../../styles';

export default function Quiz() {
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
