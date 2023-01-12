import { React, useEffect, useState } from 'react';
import { CountriesMap, Countdown, ProgressBar, Dialog, Loading, Answers } from '../../components';
import { useQuery } from 'react-query';
import { Button, Input, Text, SectionTitle, InputContainer } from '../../styles';
import { capitalize, getCountries } from '../../utils';
import { STATUS } from '../../consts/statuses';
import { Layout } from '../../components/Layouts';
import { useUser } from '@supabase/auth-helpers-react';
import { Info, InfoContainer } from '../../styles/info';
import { useRouter } from 'next/router';
import { QUIZ } from '../../consts/quizes';
import { useScoresMutation } from '../../hooks/useScores';

export default function AllCountries() {
  const router = useRouter();
  const quiz = router.query.quiz;
  const user = useUser();
  const [guessed, setGuessed] = useState([]);
  const [status, setStatus] = useState(STATUS.BEGUN);
  const [open, setOpen] = useState(true);
  const scoresMutation = useScoresMutation();
  const { data, error, isLoading } = useQuery('countries', getCountries);
  let geoPlaces = [];
  useEffect(() => {
    if (status === STATUS.COMPLETED || status === STATUS.FINISHED) {
      user &&
        scoresMutation.mutate({
          id: user.id,
          quiz: quiz,
          score: guessed.length,
          max_score: geoPlaces.length
        });
    }
  }, [status]);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <Loading />;

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
                onClick={() => setStatus(STATUS.STARTED)}
              >
                {' '}
                Start
              </Button>
            ) : (
              <>
                <Countdown timeForQuiz={1500} status={status} setStatus={setStatus} />
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
