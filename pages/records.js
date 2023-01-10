import { Layout } from '../components/Layouts';
import { MainContentContainer } from '../styles';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { RecordTable } from '../components/RecordTable';

export default function Records({ records }) {
  // const session = useSession();
  // const supabase = useSupabaseClient();
  // const router = useRouter();
  console.log(records);
  return (
    <Layout header>
      <MainContentContainer>
        <RecordTable records={records} />
      </MainContentContainer>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const { data: records, error } = await supabase
    .from('records')
    .select('*')
    .order('score', { ascending: false });
  if (error) throw error;
  return {
    props: {
      records
    }
  };
};
