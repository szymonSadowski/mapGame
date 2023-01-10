import { React, useEffect, useState } from 'react';
import { CountriesMap, Countdown, ProgressBar, Dialog, Loading, Answers } from '../../components';
import { useQuery } from 'react-query';
import { Button, Input, Text, SectionTitle, InputContainer } from '../../styles';
import { capitalize } from '../../utils';
import { STATUS } from '../../consts/statuses';
import { Layout } from '../../components/Layouts';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Info, InfoContainer } from '../../styles/info';
import { useRouter } from 'next/router';
import { getCountries } from '../../utils/helpers';
import { QUIZ } from '../../consts/quizes';

export default function AllCountries() {
  const router = useRouter();
  const quiz = router.query.quiz;
  const supabase = useSupabaseClient();
  const user = useUser();
  const [guessed, setGuessed] = useState([]);
  const [status, setStatus] = useState(STATUS.BEGUN);
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const { data, error, isLoading } = useQuery('countries', getCountries);
  let geoPlaces = [];
  useEffect(() => {
    if (status === STATUS.COMPLETED || status === STATUS.FINISHED) {
      user && postScores();
    }
  }, [status]);

  if (error) return <div>Request Failed</div>;
  if (isLoading || loading) return <Loading />;

  data.map((country) => {
    country.independent &&
      geoPlaces.push({
        name: quiz === QUIZ.ALLCOUNTIRES ? country.name.common : country.capital[0],
        lat: country.capitalInfo.latlng[0],
        lng: country.capitalInfo.latlng[1]
      });
  });

  const handleOnChange = (event) => {
    const userGuess = capitalize(event.target.value);
    if (geoPlaces.some((e) => e.name === userGuess)) {
      setGuessed([...guessed, userGuess]);
      event.target.value = '';
    }
    if (guessed.length === geoPlaces.length) {
      setStatus(STATUS.COMPLETED);
    }
  };
  async function postScores() {
    try {
      setLoading(true);
      let { data } = await supabase
        .from('records')
        .select('*')
        .match({ user_id: user.id, quiz: quiz });
      if (data.length > 0) {
        const { error } = await supabase
          .from('records')
          .update([
            {
              updated_at: new Date().toISOString(),
              score: guessed.length
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
              quiz: quiz,
              score: guessed.length,
              max_score: geoPlaces.length
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
  const score = `${guessed.length} / ${geoPlaces.length}`;
  return (
    <Layout header>
      <main>
        {status === STATUS.FINISHED && <Dialog open={open} setOpen={setOpen} score={score} />}
        {status === STATUS.COMPLETED && (
          <Dialog open={open} setOpen={setOpen} completed score={score} />
        )}
        {geoPlaces && <CountriesMap quiz={quiz} guessed={guessed} geoPlaces={geoPlaces} />}
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
                  placeholder={'Guess...'}
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
            <ProgressBar currentValue={guessed.length} maxValue={geoPlaces.length} />
          </Info>
          <Answers geoPlaces={geoPlaces} guessed={guessed} />
        </InfoContainer>
      </main>
    </Layout>
  );
}
