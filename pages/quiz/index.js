import { styled } from '../../styles/stitches.config';
import { React, useState } from 'react';
import { CountriesMap, Countdown, ProgressBar } from '../../components';
import { useQuery } from 'react-query';
import { Button, Input, Text, SectionTitle } from '../../styles';
import { capitalize } from '../../utils';
import { getCountries } from '../../api';
import { STATUS } from '../../consts/statuses';
import { Layout } from '../../components/Layouts';

const InputContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px $colors$shadow`,
  backgroundColor: '$subtleBackground',
  mt: '$10',
  p: '$4'
});

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
  const [guessedCountries, setGuessedCountries] = useState(['Spain']);
  const [status, setStatus] = useState(STATUS.BEGUN);
  const { data, error, isLoading } = useQuery('countries', getCountries);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

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
  };

  return (
    <Layout header>
      <main>
        {status === STATUS.FINISHED && <div>FINISHED</div>}
        <CountriesMap guessedCountries={guessedCountries} />
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
              <Input placeholder={'Country'} onChange={handleOnChange} />
            </>
          )}
        </InputContainer>
        <InfoContainer>
          <Info>
            <Text className={SectionTitle()}>
              {' '}
              {guessedCountries.length} / {countries.length}
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
