import { useState } from 'react';
import { useUser } from '@supabase/auth-helpers-react';
import { Layout } from '../components/Layouts';
import {
  Button,
  FlexContainer,
  FlexContainerColumn,
  Input,
  MainContentContainer,
  ProfilePageContainer,
  SectionTitle,
  Text
} from '../styles';
import { Loading } from '../components';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { RecordTable } from '../components/RecordTable';
import { useProfileQuery, useRecordsQuery, useUpdateProfileMutation } from '../hooks';

export default function Profile() {
  const user = useUser();
  const [username, setUsername] = useState('');
  const { data: profile, isLoading: profileLoading } = useProfileQuery(user);
  const { data: records, isLoading: recordsLoading } = useRecordsQuery(user);
  const updateProfileMutation = useUpdateProfileMutation();

  const onSumbit = () => {
    updateProfileMutation.mutate({
      id: user.id,
      username: username
    });
  };

  const loading = recordsLoading || profileLoading;
  return (
    <Layout header subTitle={'Your Profile'}>
      <MainContentContainer>
        {loading || !user ? (
          <Loading />
        ) : (
          <ProfilePageContainer>
            <FlexContainer>
              <FlexContainerColumn>
                <FlexContainer>
                  <Text className={SectionTitle()}>Email</Text>
                  <Input id="email" type="text" value={user.email} disabled />
                </FlexContainer>
                <FlexContainer>
                  <Text className={SectionTitle()}>
                    {profile.username ? <>{profile.username}</> : <>Username</>}
                  </Text>
                  <Input
                    id="username"
                    type="text"
                    placeholder="new name"
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FlexContainer>
              </FlexContainerColumn>
            </FlexContainer>
            <Button variant="primary" onClick={() => onSumbit()} disabled={loading}>
              {loading ? 'Loading ...' : 'Update'}
            </Button>
            <RecordTable records={records} />
          </ProfilePageContainer>
        )}
      </MainContentContainer>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  return {
    props: {
      initialSession: session,
      user: session.user
    }
  };
};
