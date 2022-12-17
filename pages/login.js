import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { Layout } from '../components/Layouts';
import { useRouter } from 'next/router';
import { FormContainer, MainContentContainer } from '../styles';
import { useEffect } from 'react';

export default function Login() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  supabase.auth.onAuthStateChange((event) => {
    if (event == 'SIGNED_IN') {
      router.push('/');
    }
  });
  useEffect(() => {
    session && router.push('/');
  });
  return (
    <Layout header>
      <MainContentContainer>
        <FormContainer>
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
        </FormContainer>
      </MainContentContainer>
    </Layout>
  );
}
