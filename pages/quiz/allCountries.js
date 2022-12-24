import { React, useEffect, useState } from 'react';
import { CountriesMap, Countdown, ProgressBar, Dialog, Loading } from '../../components';
import { useQuery } from 'react-query';
import { Button, Input, Text, SectionTitle, InputContainer, Answers, Answer } from '../../styles';
import { capitalize } from '../../utils';
import { getCountries } from '../../api';
import { STATUS } from '../../consts/statuses';
import { Layout } from '../../components/Layouts';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Info, InfoContainer } from '../../styles/info';

export default function AllCountries() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [guessedCountries, setGuessedCountries] = useState(['Spain']);
  const [status, setStatus] = useState(STATUS.BEGUN);
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const { data, error, isLoading } = useQuery('countries', getCountries);
  let countries = [];
  useEffect(() => {
    if (status === STATUS.COMPLETED || status === STATUS.FINISHED) {
      user && postScores();
    }
  }, [status]);
  if (error) return <div>Request Failed</div>;
  if (isLoading || loading) return <Loading />;
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
      let { data } = await supabase
        .from('records')
        .select('*')
        .match({ user_id: user.id, quiz: 'allcountries' });
      if (data.length > 0) {
        const { error } = await supabase
          .from('records')
          .update([
            {
              updated_at: new Date().toISOString(),
              score: score
            }
          ])
          .eq('id', data[0].id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('records')
          .insert([
            {
              user_id: user.id,
              created_at: new Date().toISOString(),
              quiz: 'allcountries',
              score: score
            }
          ])
          .single();
        if (error) throw error;
      }
    } catch (error) {
      console.error(error);
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
        </InfoContainer>
      </main>
    </Layout>
  );
}
