import { React, useState } from 'react';
import { CountriesMap, Countdown, ProgressBar, Dialog, Loading } from '../../components';
import { useQuery } from 'react-query';
import { styled, Button, Input, Text, SectionTitle, InputContainer } from '../../styles';
import { capitalize } from '../../utils';
import { getCountries } from '../../api';
import { STATUS } from '../../consts/statuses';
import { Layout } from '../../components/Layouts';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

const InfoContainer = styled('div', {
  color: 'white',
  backgroundColor: '$subtleBackground',
  boxShadow: `0 2px 10px $colors$shadow`,
  mt: '$4',
  p: '$4'
});

const Info = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  p: '$4',
  mb: '$2',
  borderBottom: '2px solid $colors$border'
});
const Answers = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
});

const Answer = styled('div', {
  p: '$2'
});

export default function Quiz() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [guessedCountries, setGuessedCountries] = useState(['Spain']);
  const [status, setStatus] = useState(STATUS.BEGUN);
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const { data, error, isLoading } = useQuery('countries', getCountries);
  if (error) return <div>Request Failed</div>;
  if (isLoading || loading) return <Loading />;
  let countries = [];
  data.map((country) => {
    country.independent && countries.push(country.name.common);
  });
  const handleOnChange = (event) => {
    const userGuess = capitalize(event.target.value);
    if (countries.includes(userGuess)) {
      setGuessedCountries([...guessedCountries, userGuess]);
      event.target.value = '';
    }
    if (guessedCountries.length === countries.length) {
      setStatus(STATUS.COMPLETED);
    }
  };

  const score = `${guessedCountries.length} / ${countries.length}`;
  async function postScores() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('records')
        .insert([
          {
            user_id: user.id,
            created_at: new Date().toISOString(),
            quiz: 'test',
            score: 150
          }
        ])
        .single();
      if (error) throw error;
      console.log(data);
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <Layout header>
      <main>
        {status === STATUS.FINISHED && <Dialog open={open} setOpen={setOpen} score={score} />}
        {status === STATUS.COMPLETED && (
          <Dialog open={open} setOpen={setOpen} completed score={score} />
        )}
        <CountriesMap guessedCountries={guessedCountries} />
        {status !== (STATUS.FINISHED || STATUS.COMPLETED) ? (
          <InputContainer>
            {status === STATUS.BEGUN ? (
              <Button
                variant="primary"
                size="lg"
                icon="true"
                onClick={() => setStatus(STATUS.STARTED)}>
                {' '}
                Start
              </Button>
            ) : (
              <>
                <Countdown timeForQuiz={10} status={status} setStatus={setStatus} />
                <Input
                  placeholder={'Country'}
                  onChange={handleOnChange}
                  disabled={status === STATUS.STOPPED}
                />
              </>
            )}
          </InputContainer>
        ) : null}
        <InfoContainer>
          <Info>
            <Text className={SectionTitle()} css={{ display: 'inline-block' }}>
              {score}
            </Text>
            <ProgressBar currentValue={guessedCountries.length} maxValue={countries.length} />
          </Info>
          <Answers>
            {countries.map((country, index) => {
              return (
                <Answer key={country}>
                  <Text>
                    {' '}
                    <>{index + 1}. </>
                    {guessedCountries.includes(country) ? <>{country}</> : null}
                  </Text>
                </Answer>
              );
            })}
          </Answers>
          <button onClick={postScores} />
        </InfoContainer>
      </main>
    </Layout>
  );
}
