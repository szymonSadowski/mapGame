import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Layout } from '../components/Layouts';
import {
  Button,
  FlexContainer,
  FlexContainerColumn,
  Input,
  MainContentContainer,
  ProfilePageContainer,
  SectionTitle,
  Text,
  InfoContainer,
  TableContainer
} from '../styles';
import { Loading } from '../components';
import Avatar from '../components/Avatar';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { quizesKeys } from '../consts/quizes';

export default function Profile({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [records, setRecords] = useState(null);
  useEffect(() => {
    getProfile();
    getRecords();
  }, [session]);
  async function getProfile() {
    try {
      setLoading(true);
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert('Error loading user data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, avatar_url }) {
    try {
      setLoading(true);
      const updates = {
        id: user.id,
        username,
        avatar_url,
        updated_at: new Date().toISOString()
      };

      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) throw error;
      alert('Profile updated!');
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function getRecords() {
    try {
      setLoading(true);
      let { data, error } = await supabase.from('records').select('*');
      if (error) throw error;
      if (data) {
        console.log(data);
        setRecords(data);
      }
    } catch (error) {
      alert('Error fetching the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <Layout header subTitle={'Your Profile'}>
      <MainContentContainer>
        {loading ? (
          <Loading />
        ) : (
          <ProfilePageContainer>
            <FlexContainer>
              <Avatar
                uid={user.id}
                url={avatar_url}
                size={150}
                onUpload={(url) => {
                  setAvatarUrl(url);
                  updateProfile({ username, avatar_url: url });
                }}
              />
              <FlexContainerColumn>
                <FlexContainer>
                  <Text className={SectionTitle()}>Email</Text>
                  <Input id="email" type="text" value={user.email} disabled />
                </FlexContainer>
                <FlexContainer>
                  <Text className={SectionTitle()}>Username</Text>
                  <Input
                    id="username"
                    type="text"
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FlexContainer>
              </FlexContainerColumn>
            </FlexContainer>
            <Button
              variant="primary"
              onClick={() => updateProfile({ username, avatar_url })}
              disabled={loading}>
              {loading ? 'Loading ...' : 'Update'}
            </Button>
            <InfoContainer>
              <TableContainer>
                <Text className={SectionTitle()}>Quiz</Text>
                <Text className={SectionTitle()}>Score</Text>
              </TableContainer>
              {records ? (
                <>
                  {records.map((record) => {
                    return (
                      <TableContainer key={record.id}>
                        <Text>{quizesKeys[record.quiz]}</Text>
                        <Text>{record.score}</Text>
                      </TableContainer>
                    );
                  })}
                </>
              ) : (
                <Loading />
              )}
            </InfoContainer>
          </ProfilePageContainer>
        )}
      </MainContentContainer>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
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
  // const {
  //   data: { records, error }
  // } = await supabase.from('records').select('*');
  return {
    props: {
      initialSession: session,
      user: session.user
    }
  };
};
